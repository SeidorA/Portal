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
