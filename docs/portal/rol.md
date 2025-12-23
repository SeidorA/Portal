---
title: Roles y Permisos de la Plataforma
sidebar_label: Roles
sidebar_position: 3
description: Roles y Permisos de la Plataforma
---


El **Portal de Productos de SEIDOR Analytics** define un esquema de roles claro y jerárquico, cuyo objetivo es controlar el acceso a la información, proteger contenido sensible y asegurar una correcta gobernanza del portal a lo largo del tiempo.

Cada usuario accede a la plataforma con un rol asignado, el cual determina sus capacidades de visualización, edición y administración.


## Administrador (Admin)

El rol de Administrador tiene control total sobre la plataforma.

Sus responsabilidades incluyen:

- Acceso completo a todo el contenido, sin restricciones.
- Administración de usuarios y asignación de roles.
- Creación, modificación y eliminación de páginas y secciones.
- Configuración general de la plataforma.
- Gestión de contenidos marcados como acceso restringido.
- Definición de lineamientos y estructura global del portal.

Este rol está pensado para un grupo reducido de personas responsables de la gobernanza y continuidad de la herramienta.


## Editor

El rol de Editor está orientado a la gestión activa de contenidos.

Además de contar con los mismos permisos de visualización que el rol Sales, el Editor puede:

- Crear nuevas páginas.
- Editar contenido existente.
- Eliminar páginas o secciones bajo su responsabilidad.

Limitaciones del rol:
- No puede asignar roles.
- No puede nombrar nuevos editores ni administradores.
- No administra la configuración global de la plataforma.

Este rol es ideal para equipos de Producto, Documentación o Marketing que mantienen el contenido actualizado de forma continua.


## Sales

El rol Sales está diseñado para equipos comerciales y de preventa.

Permite:

Acceso a contenido comercial sensible, incluyendo:

- Pricing.
- Battlecards.
- Material marcado como restricted_access: true.
- Consulta de documentación general del producto necesaria para el proceso comercial.

Este rol no permite:

- Crear, editar o eliminar contenido.
- Acceder a configuraciones internas de la plataforma.


## Usuario (User)

El rol Usuario corresponde al nivel de acceso estándar.

Características:

- Acceso únicamente a contenido público o no restringido.
- Visualización de información general de productos.
- Sin permisos de edición ni acceso a material comercial sensible.

Este rol está pensado para:

- Usuarios internos que requieren información general.
- Audiencias de consulta sin responsabilidades de mantenimiento o venta.


## Consideraciones generales sobre los roles

- Los roles están diseñados para minimizar riesgos, evitando accesos innecesarios a información sensible.
- El uso de la marca ```restricted_access: true``` permite controlar de forma granular qué contenido es visible para determinados perfiles.
- La correcta asignación de roles es clave para mantener la coherencia, seguridad y confiabilidad del portal.