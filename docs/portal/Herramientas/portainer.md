---
title: Portainer
sidebar_label: Portainer
sidebar_position: 5
---

## Configuración de Despliegue Automático en Portainer

El despliegue de la aplicación se gestiona de forma automática utilizando **GitHub Actions** en conjunto con **Portainer**. Este flujo asegura que cada cambio en la rama principal (`main`) se refleje automáticamente en el entorno productivo.

## Flujo de Trabajo (CI/CD)

El proceso está definido en el archivo `.github/workflows/build.yml` y consta de los siguientes pasos principales:

### 1. Construcción (Build)
El código se compila y se generan los artefactos necesarios (`build/`, `package.json`, `dockerfile`, `nginx.conf`) utilizando `npm run build`.

### 2. Creación de Imagen Docker
- Se descarga el artefacto de la construcción.
- Se construye una nueva imagen de Docker con una etiqueta única basada en el SHA del commit:  
  `cloudseidoranalytics/portal:${{ github.sha }}`
- Esta imagen se sube (push) al registro de **Docker Hub**.

### 3. Actualización de Versión
- El flujo modifica automáticamente el archivo `docker-compose.yml` en el repositorio para apuntar a la nueva imagen (`SHA`).
- Realiza un commit y push de este cambio a la rama `main` para asegurar que la definición del despliegue en código coincida con lo que se va a desplegar.

### 4. Despliegue (Webhook)
Como paso final, se dispara el **Webhook de Portainer**:
- El workflow realiza una petición HTTP POST a la URL configurada en el secreto `PORTAINER_WEBHOOK_URL`.
- **Acción**: Al recibir esta señal, Portainer descarga la nueva imagen desde Docker Hub y actualiza el servicio o stack correspondiente, reiniciando el servidor con la nueva versión.

## Configuración Requerida

Para habilitar este flujo, se han configurado los siguientes **Secretos** en el repositorio de GitHub (Settings > Secrets and variables > Actions):

| Nombre del Secreto | Descripción |
| :--- | :--- |
| `DOCKER_USERNAME` | Nombre de usuario de la cuenta de Docker Hub. |
| `DOCKER_PASSWORD` | Token de acceso o contraseña para autenticar en Docker Hub. |
| `PORTAINER_WEBHOOK_URL` | URL del Webhook generada en la configuración del servicio/stack en Portainer. |
