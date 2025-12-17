# Deployment (VPS + Docker + existing nginx proxy)

This Astro app builds to static files and is served by a tiny Nginx container (`nginxinc/nginx-unprivileged`).
Your existing project-level Nginx reverse proxy can route `studio.reondev.com` to this container.

## One-time setup (VPS)

1) Ensure DNS points `studio.reondev.com` to your VPS.

2) Create (or reuse) a shared Docker network used by your reverse-proxy container:

```bash
docker network create web
```

3) Make sure your **reverse-proxy nginx container** is attached to that same `web` network.

## Run this site (VPS)

In this repo folder (on the VPS):

```bash
DOCKER_BUILDKIT=1 docker compose -f compose.prod.yml up -d --build
```

`compose.prod.yml` exposes port `8080` to other containers on the `web` network (no host port).

## Wire into your existing nginx proxy

Copy `deploy/nginx/studio.reondev.com.conf` into your proxy project's Nginx config directory (often `./nginx/conf.d/`),
then reload nginx in that proxy project:

```bash
docker compose exec nginx nginx -t
docker compose exec nginx nginx -s reload
```

Notes:
- Update TLS cert paths in the config to match how you manage certs in the proxy project.
- If you use a wildcard cert (`*.reondev.com`), point it here and you’re done.

## Updating (VPS)

```bash
git pull
DOCKER_BUILDKIT=1 docker compose -f compose.prod.yml up -d --build
```

