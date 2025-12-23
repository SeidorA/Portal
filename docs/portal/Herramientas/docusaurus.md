---
title: Docusaurus
description: Docusaurus
doc_id: docusaurus
sidebar_label: Docusaurus
sidebar_position: 1
---
import Not from "@site/src/components/202";
import Archivos from '@site/src/components/archivos';
import BoxDoc from '@site/src/components/boxdocs';


El Portal de Productos de SEIDOR Analytics utiliza [Docusaurus](https://docusaurus.io/) como base para la documentación. Sobre esta plataforma se incorporaron extensiones funcionales y componentes personalizados que permiten enriquecer el contenido Markdown con metadatos, control de acceso y elementos visuales reutilizables.

El objetivo de estas personalizaciones es:

- Mantener una experiencia editorial consistente.
- Reducir duplicación de contenido.
- Facilitar la gestión de información dinámica.
- Adaptar la documentación a distintos perfiles de usuario.

## Extensiones en la cabecera (Front Matter)

Además de los campos estándar de Docusaurus, se incorporaron propiedades adicionales que modifican el comportamiento de cada página.

### Restricción de acceso

```
restricted_access: true
```

Restringe el acceso al contenido de la página.
- Visible únicamente para usuarios con rol Sales o superior.
- Utilizado principalmente para:
    - Pricing.
    - Battlecards.
    - Material comercial sensible.

---

### Íconos en la cabecera

```
iconName={name}
```

Asocia un ícono visual a la página.
- El ícono se obtiene desde la librería Caralicon.
- Se renderiza con el color institucional carbón.
- Mejora la identificación visual dentro del portal.

:::tip
Se incluye un enlace a una página interna donde se puede consultar el listado completo de íconos disponibles y sus nombres correspondientes.
:::

---

### Logo del producto en la cabecera

```
useBrand: true
```

Convierte el ícono asociado a la página en el logo del producto (cuando esté disponible).
- Se utiliza para páginas principales o de alto nivel.
- Prioriza la identidad visual del producto sobre el ícono genérico.


---

### Ejemplo

Se puede combinar las propiedades anteriores para crear una cabecera personalizada.

```
---
sidebar_label: "Crestone"
title: Crestone
sidebar_position: 1
iconName: "Crestone"
useBrand: true
---
```

## Componentes personalizados en Markdown
Además del contenido estándar en Markdown, el portal incorpora componentes reutilizables que permiten representar estados, documentos, roadmaps y material multimedia.

### Importar componentes

Se debe importar el componente desde la carpeta `src/components`. Por ejemplo:
```
import [componente] from '../../src/components/[componente]';
```

### Uso

Se debe usar el componente dentro del archivo .md. Por ejemplo:
```
<componente />
```

### (202) No se encuentra información

<Not/>


Componente informativo que indica que no existe información disponible para esa sección o página.
- Se utiliza como placeholder explícito.
- Evita ambigüedad frente a secciones incompletas o no aplicables.


```
import Not from "@site/src/components/202"
---
<Not />
```

---

### Archivos

<Archivos source="12"/>

Permite listar archivos asociados a una página.
- ```source```: referencia a un identificador numérico que apunta a un listado alojado en Supabase.
- Los archivos (documentos o videos) se obtienen desde tablas centralizadas en [Supabase](./supabase).
- El contenido físico se encuentra alojado en OneDrive.
- Este componente desacopla la documentación del almacenamiento de archivos.

```
import Archivos from "@site/src/components/Archivos"
---
<Archivos source={number} />
```

### BoxDoc


<BoxDoc title="title" language="language" format="format" brand="brand" titleimg="titleimg" onDownload="onDownload" >
Presentación corporativa lista para exponer, con toda la información clave: funcionalidades, beneficios, casos de uso y ecosistema de integraciones.
</BoxDoc>


Componente para representar documentos descargables o consultables.

Propiedades:

- ```title```: título del documento.
- ```language```: idioma del documento.
- ```format```: formato del archivo (PDF, PPT, etc.).
- ```brand```: ícono o marca asociada.
- ```titleimg```: texto descriptivo de la imagen.
- ```onDownload```: enlace directo de descarga.

**Importar**
```
import BoxDoc from "@site/src/components/BoxDoc"
```

**Uso**
```
<BoxDoc
    title={title}
    language={language}
    format={format}
    brand={brand}
    titleimg={titleimg}
    onDownload={onDownload}
>
    Contenido del documento
</BoxDoc>
```

### Elementos del Roadmap  

los elementos del roadmap son ```CardRoad``` y ```Subtitle``` los cuales se usan de la siguiente manera:

![roadmap](/img/portal/road.png)

#### CardRoad

Utilizado para representar features dentro del roadmap de un producto.
Propiedades:
- ```Kind```: indica si la feature es una integración.
    - Si no se especifica, se considera una funcionalidad.
- ```children```: contenido libre que describe la feature.

Este componente estandariza la visualización del roadmap.

#### Subtitle

Utilizado para representar subtitulos dentro del roadmap de un producto.
Propiedades:
- ```title```: texto del subtítulo.
- ```brand```: reemplaza el ícono por el logo de Caral.
- ```icon```: nombre del ícono a utilizar.

#### uso

```jsx
import { Cardroad, Kind, Subitle }  from '@site/src/components/cardroad'; 
import { CaralIcon} from 'iconcaral2';

<div className="boxrroadmap">
  <Cardroad title="Octubre">
     <Kind />
     <Subitle
        title="Licensing control" 
        icon="newFile"
     />
     <p>
      Contenido de la feature
    </p>
  </Cardroad>
</div>
```


### Webinar

Componente estándar para representar videos, webinars y demos grabadas.

Propiedades:
- ```title```: título del contenido.
- ```img```: imagen de portada.
- ```description```: contenido HTML embebido
Ejemplo:
 ```
<p>Cómo agregar un origen y un destino en <b>Crestone</b></p>
 ```
 - ```duration```: duración del video.
 - ```version```: versión de la plataforma.
 - ```url```: enlace al video.
 - ```lang```: idioma del contenido.

Este componente centraliza la presentación de material audiovisual.

## Documentación oficial de la plataforma

Para información general sobre el uso base de la herramienta (estructura de proyectos, Markdown estándar, navegación, etc.), se recomienda consultar la documentación oficial de [Docusaurus](https://docusaurus.io/docs), la cual sirve como referencia complementaria a las extensiones descritas en esta sección.

