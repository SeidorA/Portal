---
title: Herramientas y Plataformas
sidebar_label: Herramientas
sidebar_position: 4
description: Herramientas de la Plataforma
---

El Portal de Productos de SEIDOR Analytics se apoya en un conjunto de herramientas y plataformas que, en conjunto, permiten ofrecer una experiencia de documentación moderna, segura y escalable. Cada tecnología cumple un rol específico dentro del ecosistema de la plataforma.

Esta sección describe dichas herramientas desde una visión de producto, explicando para qué se utilizan y por qué forman parte de la solución.

## Docusaurus y React

![Docusaurus](/img/portal/docusaurus-my-site.png)

El portal está construido sobre [Docusaurus](https://docusaurus.io/), un framework especializado en la creación de sitios de documentación, basado en [React](https://reactjs.org/).

Desde una perspectiva funcional, esta combinación permite:

- Organizar la documentación de forma estructurada y jerárquica.
- Ofrecer una navegación clara y consistente entre productos y secciones.
- Mantener una experiencia de usuario moderna, rápida y responsive.
- Facilitar la escalabilidad del portal a medida que se incorporan nuevos productos o contenidos.


Docusaurus actúa como la base del sitio de documentación, mientras que React permite extender y personalizar la experiencia cuando es necesario.

<button className="button button--primary">Ver más</button>

## Supabase


![Supabase](/img/portal/visualizer.png)

Supabase cumple el rol de plataforma de soporte para funcionalidades dinámicas del portal.

A nivel general, se utiliza para:

- **Gestión de usuarios y autenticación**: control del acceso a la plataforma según roles definidos.
- **Almacenamiento de información estructurada**: tablas que contienen referencias a videos y documentos utilizados en el portal.
- **Soporte a contenido dinámico**: contenido que no forma parte directa de la documentación estática(Documentos, videos, etc).

Supabase permite desacoplar la documentación del manejo de usuarios y contenidos asociados, aportando flexibilidad y control.

<button className="button button--primary">Ver más</button>


## OneDrive

El portal se integra con OneDrive como repositorio de documentos y materiales multimedia.

En términos funcionales:

- Los documentos y videos se almacenan en OneDrive.
- El portal consume esta información a través de referencias gestionadas desde Supabase.
- Esto permite centralizar los archivos en una herramienta corporativa conocida, manteniendo el portal como punto único de acceso.

Esta integración facilita la actualización de materiales sin necesidad de modificar directamente la estructura del sitio.


## GitHub y GitHub Actions

![GitHub](/img/portal/github.png)

GitHub es la plataforma central de versionado y colaboración del proyecto.

En conjunto con GitHub Actions, permite:

- Gestionar el código fuente y la documentación como un repositorio versionado.
- Controlar cambios mediante flujos de revisión.
- Automatizar procesos de construcción y despliegue del portal.
- Asegurar consistencia entre entornos mediante pipelines automatizados.

<button className="button button--primary">Ver más</button>


## Docker y Portainer

Docker se utiliza para empaquetar y ejecutar la plataforma de forma consistente, independientemente del entorno.

Portainer es la herramienta de gestión de contenedores que permite administrar y monitorear los contenedores de forma centralizada proporcionando: 

- Una interfaz visual para la gestión de contenedores.
- Control operativo del estado de los servicios.
- Facilidad para tareas de monitoreo y mantenimiento básico.


Esta combinación simplifica la operación diaria y reduce la dependencia de configuraciones manuales.

<button className="button button--primary">Ver más</button>