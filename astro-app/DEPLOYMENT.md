# Deployment (VPS + Docker + host-level Nginx)

This Astro app builds to static files and is served by a small Nginx container (`nginxinc/nginx-unprivileged`).
On the VPS, you run the container on a **localhost-only** port, and use **one VPS-level Nginx** to terminate TLS and route `studio.reondev.com`.

## One-time setup (DNS)

Ensure DNS points `studio.reondev.com` to your VPS IP.

## Run this site (VPS)

From the `astro-app` folder on the VPS:

```bash
DOCKER_BUILDKIT=1 docker compose -f compose.yml up -d --build
```

`compose.yml` binds the container to `127.0.0.1:8085` on the VPS.

## VPS Nginx routing (studio.reondev.com -> 127.0.0.1:8085)

Create `/etc/nginx/sites-available/studio.reondev.com`:

```nginx
server {
  listen 80;
  listen [::]:80;
  server_name studio.reondev.com;

  location / {
    proxy_pass http://127.0.0.1:8085;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

Enable + reload:

```bash
sudo ln -sf /etc/nginx/sites-available/studio.reondev.com /etc/nginx/sites-enabled/studio.reondev.com
sudo nginx -t
sudo systemctl reload nginx
```

## HTTPS (Certbot)

If this VPS is also serving `reondev.com`, you can issue both certs in one go:

```bash
sudo certbot --nginx -d reondev.com -d www.reondev.com -d studio.reondev.com
```

## Updating (VPS)

```bash
git pull
DOCKER_BUILDKIT=1 docker compose -f compose.yml up -d --build
```

## Optional: Docker-network reverse proxy mode (not required)

If you run an Nginx reverse-proxy **container** on a shared Docker network, you can use:
- `compose.prod.yml` (exposes container port `8080` on a Docker network, no host port)
- `deploy/nginx/studio.reondev.com.conf` (an upstream config for the proxy container)
