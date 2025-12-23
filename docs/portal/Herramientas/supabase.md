---
title: Supabase
sidebar_position: 2
---

# Documentación de Supabase

Este documento detalla la integración tecnica y operativa de los servicios de Supabase en el proyecto. Esta guía está destinada a los administradores y desarrolladores encargados del mantenimiento de la plataforma.

## 1. Configuración e Inicialización

El cliente de Supabase se inicializa en el archivo `src/lib/supabaseClient.ts`. La conexión depende de las siguientes variables de entorno que deben estar configuradas en el entorno de despliegue y desarrollo:

- **`SUPABASE_URL`**: Endpoint de la API del proyecto.
- **`SUPABASE_ANON_KEY`**: Clave pública para realizar peticiones desde el cliente (navegador).

> **Nota**: El sistema implementa valores de "fallback" (hardcoded) para desarrollo local rápido, pero se recomienda encarecidamente usar variables de entorno en producción.

## 2. Autenticación y Seguridad (Auth)

El proyecto utiliza **Supabase Auth** para la gestión de sesiones de usuario.

- **Manejo de Sesión**: Se gestiona a través del contexto de React `AuthContext` (`src/context/AuthContext.tsx`).
- **Persistencia**: Supabase mantiene la sesión activa utilizando LocalStorage por defecto.

### Sistema de Roles y Permisos (RBAC)
Se ha implementado una capa personalizada de control de acceso basada en roles sobre la autenticación básica de Supabase.

1. **Tabla `roles`**: Define los roles disponibles (ej. `admin`, `sales`, `user`).
2. **Tabla `user_roles`**: Asigna roles a los usuarios (`user_id` -> `role_id`).
3. **Validación**: El `AuthContext` recupera estos roles al iniciar sesión y provee la función `hasRole('role_name')` para proteger rutas y componentes en el frontend.

## 3. Base de Datos (Database)

A continuación se detalla el esquema de las tablas principales utilizadas por la aplicación.

### 3.1. Gestión de Usuarios y Accesos

| Tabla | Descripción | Campos Clave |
| :--- | :--- | :--- |
| **`profiles`** | Información extendida de los usuarios. | `id` (FK a auth.users), `email`, `last_sign_in_at` |
| **`roles`** | Catálogo de roles del sistema. | `id`, `name` |
| **`user_roles`** | Tabla pivote para asignación de roles. | `user_id`, `role_id`, `roles(name)` (relación) |

*Servicios asociados*: `src/services/adminService.ts` contiene la lógica para asignar y remover roles programáticamente.

### 3.2. Gestión de Contenidos (CMS)

#### Tabla `Planes`
Contiene la configuración de los planes comerciales mostrados en la sección de precios. 
- **Uso en código**: `src/components/planes/planes.tsx` y `getActivePlanes`.
- **Estructura**:
  - `Active` (bool): Controla la visibilidad del plan (Soft Delete).
  - `Name` (text): Nombre del plan.
  - `Price` (text/number): Precio visible.
  - `Price Condition` (text): Sufijo del precio (ej. "/mes").
  - `Short Description` (text): Bajada o subtítulo del plan.
  - `Features` (text): Lista de características separadas por saltos de línea (`\n`).

#### Tabla `Archivos`
Gestión de recursos multimedia y documentos descargables.
- **Uso en código**: ```src/components/archivos/index.tsx```.
- **Estructura**:
  - `id`: Identificador único.
  - `name`: Nombre visible del archivo.
  - `Description`: Descripción del recurso.
  - `MediaType`: Cadena que define el tipo de icono a mostrar (valores comunes detectados: 'pdf', 'docx', 'xlsx', 'video', 'image').
  - `Path`: URL directa al recurso.
  - `Hijos` (jsonb): Estructura para anidar sub-archivos o versiones relacionadas.

## 4. Almacenamiento (Storage)

El sistema referencia archivos a través del campo `Path` en la tabla `Archivos`.
- Actualmente, el sistema consume las URLs almacenadas en la base de datos.
- Si se utiliza Supabase Storage, los buckets deben tener políticas de acceso **público** para permitir la lectura directa desde el componente `window.open(archivo.Path)`.

## 5. Edge Functions y Lógica de Negocio

La lógica de negocio principal reside actualmente en el cliente (Frontend) y en las consultas directas a Supabase.
- **Filtrado de datos**: Se realiza mayormente del lado del cliente o mediante filtros simples (`.eq('Active', true)`).
- **Admin Service**: Las operaciones administrativas (asignar roles) se ejecutan mediante llamadas directas a las tablas de sistema desde `adminService`.

---

**Recomendaciones para el nuevo administrador:**
1. Revisar periódicamente las políticas RLS (Row Level Security) en el panel de Supabase para asegurar que solo los usuarios con rol `admin` puedan escribir en tablas críticas como `Planes` o `user_roles`.
2. Mantener actualizado el catálogo de `MediaType` en la tabla `Archivos` para asegurar que los iconos se rendericen correctamente en el frontend.
