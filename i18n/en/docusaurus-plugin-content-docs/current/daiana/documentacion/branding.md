---
title: Implementación de Branding Dinámico 
sidebar_label: Branding Dinámico
sidebar_position: 5
---

El branding dinámico permite personalizar elementos clave de la interfaz de la aplicación para diferentes "tenants" (clientes o grupos) de manera dinámica. En este caso, el branding se configura usando la tabla tenants de la base de datos, donde tenant con id 1 puede tener su propio logo, nombre de aplicación, favicon, enlace, y otros valores personalizados. 

## Propósito del Documento 
El objetivo de esta documentación es proporcionar una guía clara y detallada sobre la implementación del branding dinámico en la aplicación de Daiana. La documentación explica cómo personalizar elementos visuales clave, como el logo, el nombre de la aplicación, el favicon, y otros atributos, según los diferentes tenants (clientes o grupos) a través de la configuración dinámica almacenada en la base de datos. 


El propósito es asegurar que los desarrolladores comprendan cómo: 

1. Configurar y actualizar los valores de branding en la tabla tenants de la base de datos. 
2. Implementar un sistema dinámico que permita modificar el aspecto de la aplicación sin tener que realizar cambios en el código cada vez que se personalizan los elementos para un nuevo tenant.
3. Cargar y gestionar estos valores dinámicamente usando un manejador de estado en la página de inicio de sesión, lo que permite que los cambios se reflejen automáticamente en la interfaz. 

En resumen, esta documentación facilita el mantenimiento y expansión del sistema de branding dinámico, permitiendo personalizar la apariencia de la aplicación de manera eficiente y flexible. 

## Audiencia Objetivo 

Esta documentación está dirigida a desarrolladores y miembros del equipo técnico interno que trabajen en el mantenimiento y desarrollo de la aplicación de Daiana. Está diseñada para aquellos que tengan experiencia previa con tecnologías como **React, Redux, y Supabase**, y que necesiten implementar o ajustar el sistema de branding dinámico de la aplicación. La audiencia incluye tanto a desarrolladores responsables de la personalización de la interfaz de usuario para diferentes tenants, como a aquellos que gestionen la infraestructura de la aplicación. 

# Configuración en la Tabla tenants

## Descripción General 
El branding dinámico está relacionado con la tabla tenants, particularmente con el tenant cuyo idTenant es 1. Los valores de branding para este tenant se definen en la columna settings, que es un JSON que puede contener los siguientes valores:  


```:json
{ 
   "link": "https://www.seidor.com/", 
   "logo": "/img/bot-removebg-preview.png", 
   "appname": "db2 for i Assistant", 
   "company": "Seidor",  
    "favicon": "https://iwgtpqrkuxyyhbmgdjqd.supabase.co/storage/v1/object/public/docs/daiana_docs/favicon.ico" 
}
```

![supabase](/img/documentos/branding/a.jpeg)
> Así se verían los cambios después de aplicada la configuración del tenant

![supabase](/img/documentos/branding/b.jpeg)
![supabase](/img/documentos/branding/c.jpeg)

Estos valores pueden cambiar para cada tenant. Si no se proveen ciertos valores, se tomarán los valores por defecto.
- **link**: URL de la empresa o sitio principal del tenant.
- **logo**: Ruta de la imagen del logo que se muestra en la aplicación.
- **appname**: Nombre de la aplicación que se muestra.
- **company**: Nombre de la compañía asociada al tenant.
- **favicon**: URL del favicon que se utiliza en el navegador.

### Comportamiento Predeterminado
Si los valores en ```settings``` no están definidos o están vacíos, la aplicación utilizará los valores por defecto. Esto garantiza que la interfaz funcione correctamente incluso cuando no se haya personalizado el tenant.

## IMPLEMENTACIÓN DEL BRANDING DINÁMICO
En la página de inicio de sesión (login), se implementa un manejador de estado para cargar y actualizar el branding dinámico cuando la página se inicia. Si la página ya está cargada y los datos de branding no han sido configurados en la tabla tenants, se debe recargar la información para que los cambios se reflejen.

### Manejador de Estado en la Página de Login
El siguiente código en **React y Redux** maneja la actualización del branding dinámico al momento de cargar la página de inicio de sesión:

<p align="center">
![supabase](/img/documentos/branding/d.jpeg)
</p>

**Descripción del Código**
1. **useAppSelector y useAppDispatch**: Se utilizan para acceder al estado global de la aplicación y despachar acciones en Redux.
2. **React.useEffect**: Este hook se ejecuta cuando la página se carga por primera vez. Dentro de él, se llama a la función fetchData para obtener la configuración de branding desde la tabla tenants.
3. **fetchData**: Esta función realiza una consulta a la base de datos usando supabase para obtener los valores de la columna settings del tenant con idTenant = 1.
4. **dispatch(setDynamicBranding)**: Si se encuentran datos en settings, se actualiza el estado global de la aplicación con los nuevos valores de branding dinámico, lo que permitirá que estos se reflejen en la interfaz.

### Librerías Necesarias
![supabase](/img/documentos/branding/e.jpeg)

El Dashboard es la pantalla principal que proporciona una vista resumida y analítica de la actividad y los datos gestionados en la plataforma. Está diseñado para ofrecer una visión rápida y clara del estado de los documentos, asistentes virtuales, equipos, y mensajes recibidos.

**Consideraciones**
- Siempre se deben usar las llaves que están en el ejemplo (link, logo, appname, company, favicon), ya que la aplicación espera estas propiedades para renderizar correctamente los elementos de la interfaz.
- Si un valor no está presente, se usará su valor por defecto para evitar errores en la visualización.


## CONCLUSIÓN

El **branding dinámico** permite personalizar la apariencia de la aplicación para diferentes tenants sin necesidad de cambios manuales en el código. La implementación de este sistema mediante React, Redux, y Supabase asegura que los valores de branding se puedan cargar dinámicamente, ofreciendo flexibilidad y facilidad de uso.