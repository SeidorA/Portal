# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

This project no longer uses GitHub Pages. To deploy the site you can build and publish the `build/` output with your preferred hosting (Docker, S3, Netlify, etc.). Example using Docker image defined in the repo:

```powershell
npm run build; docker build -t portal .; docker tag portal cloudseidoranalytics/portal:latest; docker push cloudseidoranalytics/portal:latest
```

## CMS (Decap)

- Acceso: visitar `/admin/` en el sitio (se sirve desde `static/admin`).
- Configuración: `static/admin/config.yml` usa backend `github` y la rama `CMS` para los cambios de contenido.
- Medios: los archivos se guardan en `static/img` y se publican en `/img`.

### Desarrollo local

1. Instala dependencias y levanta el sitio:
   ```powershell
   npm install
   npm run start
   ```
2. Inicia el proxy de Decap CMS (para `local_backend: true`):
   ```powershell
   npx decap-cms-proxy-server
   ```
3. Abre `http://localhost:3000/admin/` y autentica con el proxy.

### Producción (OAuth GitHub)

- Crea una GitHub OAuth App y despliega un pequeño servicio OAuth compatible con Decap CMS (por ejemplo, `decap-oauth`).
- Actualiza `static/admin/config.yml` con tu repositorio (`repo: <org>/<repo>`), y los endpoints del servicio OAuth si corresponde (`base_url`, `auth_endpoint`).

### CI/CD

- El workflow de `Build and Deploy` se disparará en `main` y `CMS`. Si trabajas en la rama `CMS`, el job de actualización de `docker-compose.yml` empuja cambios a `main` con `[skip ci]` para evitar bucles.
