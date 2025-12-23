---
title: GitHub y GitHub Actions
sidebar_label: GitHub
sidebar_position: 3
---

# GitHub y Estrategia CI/CD

Esta plataforma utiliza **GitHub** no solo como repositorio de código fuente, sino también como una herramienta activa de gestión de contenido (CMS) y automatización de despliegues.

## Gestión de Contenido Integrada

Aprovechamos la interfaz nativa de GitHub para permitir la edición de contenido sin necesidad de herramientas externas complejas.

- **Repositorio como Editor**: Los archivos de documentación (Markdown `.md`) pueden editarse directamente desde la interfaz web de GitHub.
- **Flujo de Publicación**: Al editar un archivo y hacer clic en **"Commit changes"**, se inicia automáticamente el proceso de actualización del sitio. No se requiere intervención técnica manual.

### Paso a Paso






![Editar](/img/portal/github/editaren%20pagina.png)
1. Busque al final de la pagina la opcion `Editar esta página`

![Editar](/img/portal/github/edit.png)

2. Edite la pagina o todas las que desee

![Editar](/img/portal/github/edit2.png)

3.  haga clic en `Commit changes`

![Editar](/img/portal/github/edit3.png)

4. Asignar un mensaje descriptivo al commit

5. Hacer clic en `Commit changes`


o 


![Editar](/img/portal/github/portal.png)


1. Acceder a la sección de `Repositorio de Portal` en GitHub.
2. Navegar hasta la sección de `Docs`.
3. busque la o las paginas que desee editar.
3.  haga clic en `Commit changes`



## Pipeline de Automatización (GitHub Actions)

Cada vez que se realiza un *commit* en la rama principal (`main`), se dispara un flujo de trabajo de integración y despliegue continuo (CI/CD) definido en `.github/workflows/build.yml`.

### Etapas del Proceso

El flujo de trabajo, que toma aproximadamente **5 minutos** en completarse, ejecuta los siguientes pasos secuenciales:

![flow](/img/portal/github.png)

1. **Compilación (Build)**:
   - Se procesan los archivos Markdown nuevos o modificados.
   - Se genera la versión estática del sitio utilizando Docusaurus/React.

2. **Dockerización**:
   - Se crea una nueva imagen de Docker con la última versión del código y contenido.
   - La imagen se etiqueta con el identificador único del commit (`SHA`) y se sube a **Docker Hub** (`cloudseidoranalytics/portal`).

3. **Actualización de Versión**:
   - El sistema actualiza automáticamente el archivo `docker-compose.yml` en el repositorio para apuntar a la nueva versión de la imagen recién creada.
   - *Nota: Verás un commit automático del "github-actions[bot]" realizando esta tarea.*

4. **Despliegue (Portainer)**:
   - Finalmente, se invoca un **Webhook de Portainer**.
   - Portainer descarga la nueva imagen y reinicia los contenedores automáticamente para reflejar los cambios en el sitio en vivo.

### ¿Como editar estas acciones?

El archivo `build.yml` se encuentra en la carpeta `.github/workflows/`, en este archivo se definen las acciones que se realizan cuando se hace un commit en la rama principal (`main`).

### Esquema de Tiempos

| Acción | Duración Est. | Resultado |
| :--- | :--- | :--- |
| **Commit en GitHub** | Instantáneo | Inicia el Workflow |
| **Build & Docker** | ~4 min | Imagen disponible en la nube |
| **Despliegue** | ~1 min | Sitio actualizado para usuarios finales |
| **Total** | **~5 min** | |
