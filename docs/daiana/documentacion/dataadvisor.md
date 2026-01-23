---
title: Guía para creación de Data Advisor
sidebar_label: Data Advisor
sidebar_position: 1
---
import BoxDoc from '@site/src/components/boxdocs';

## Historial de Revisiones
| Fecha | Version | Descripción | Revisor |
| --- | --- | --- | --- |
| 19/01/2026 | 1.0 | Documento Completo | SEIDOR Analytics |

## Introducción

El presente documento describe una guía técnica para la creación de un Data Advisor utilizando Daiana Studio, orientada a usuarios con conocimientos previos de la herramienta y de los conceptos básicos de agentes, modelos de lenguaje y flujos de orquestación.

El objetivo de esta guía es mostrar cómo implementar un Data Advisor personalizado a partir de un flujo de agentes configurable, haciendo foco en el uso de patrones de orquestación que permiten mayor control sobre el comportamiento del sistema.

Este documento no busca cubrir de forma exhaustiva todas las capacidades de la plataforma ni explicar sus fundamentos teóricos, sino servir como referencia práctica para implementar un caso de uso concreto, basado en una experiencia real de implementación.

## Escenarios de Uso

La plataforma Daiana Studio permite implementar distintos tipos de soluciones basadas en agentes, incluyendo flujos simples, agentes especializados, uso de herramientas externas y acceso a fuentes de conocimiento.

Entre los escenarios de uso generales de la plataforma se encuentran:
- Implementación de asistentes orientados a consultas analíticas o de datos.
- Uso de agentes con acceso a herramientas específicas, como consultas a bases de datos o servicios externos.
- Gestión explícita de contexto entre interacciones mediante mecanismos de memoria.
- Definición de flujos de agentes reutilizables y versionables.

**Alcance de esta guía**

Si bien la plataforma soporta múltiples patrones de implementación, esta guía se enfoca específicamente en un escenario particular: el uso de un agente Supervisor como mecanismo principal de orquestación, encargado de analizar cada consulta recibida y decidir qué Workers especializados son más adecuados para responderla.

El objetivo es mostrar cómo estructurar un flujo en el que distintos agentes especialistas colaboran de forma controlada, bajo la coordinación de un Supervisor, priorizando claridad, mantenibilidad y control del comportamiento.
Otros patrones posibles de uso de la plataforma quedan fuera del alcance de este documento, aun cuando estén soportados por la herramienta.


## Requisitos

Requisitos mínimos:
- **Credenciales del modelo de lenguaje** Acceso a un proveedor de LLM compatible con tool calling.
- **Credenciales de un almacenamiento vectorial** Un vector store operativo (por ejemplo, Qdrant).
- **Document Stores previamente cargados** La documentación que será utilizada por los agentes debe estar indexada con anterioridad en los Document Stores correspondientes.

## Objetos a utilizar en el Agent Flow


![supervisor](/img/daiana/dataad/super.jpeg)
### Supervisor
El **Supervisor** es el nodo responsable de la orquestación general del flujo.

#### Función
- Recibe la entrada inicial del flujo.
- Decide qué Worker debe intervenir.
- Controla la secuencia y finalización del flujo.
- Centraliza las reglas de interacción entre agentes.

#### Configuración

- Nombre del Supervisor.
- Prompt de orquestación.
- Modelo de lenguaje asociado.
- Memoria del agente (opcional).
- Moderación de entrada (opcional).


![supervisor](/img/daiana/dataad/model.jpeg)
### Chat Model
El Chat Model representa el modelo de lenguaje utilizado por el flujo.

#### Función
- Provee la capacidad de razonamiento y generación de respuestas.
- Debe ser compatible con tool calling.
- Puede ser utilizado directamente por el Supervisor y/o compartido con los Workers.

#### Configuración
- Credenciales del proveedor del modelo.
- Modelo de lenguaje a utilizar.
- Parámetros de generación (por ejemplo, temperatura).


### Agent Memory
El Agent Memory permite mantener el hilo de la conversación entre interacciones consecutivas.
- Almacena lo que el usuario preguntó previamente.
- Permite dar continuidad a la conversación.


![worker](/img/daiana/dataad/worker.jpeg)
### Worker
El **Worker** representa un agente especializado en un dominio específico.

#### Función
- Responde únicamente dentro de su ámbito de conocimiento.
- No toma decisiones de orquestación.
- Ejecuta tareas delegadas por el Supervisor.
- Puede utilizar herramientas para recuperar información.

#### Configuración
- Nombre del Worker.
- Prompt que define su rol, alcance y comportamiento.
- Supervisor asociado.
- Herramientas disponibles.

![tool](/img/daiana/dataad/tool.jpeg)
### Retriever Tool
El **Retriever Tool** expone un mecanismo de recuperación de información al Worker.

#### Función
- Conecta un Worker con un Document Store.
- Define qué tipo de información puede recuperar el agente.
- Limita explícitamente la fuente de conocimiento accesible.

#### Configuración 
- Nombre del retriever.
- Descripción del contenido que recupera.
- Document Store asociado.
- Retorno del documento fuente(Booleano).

![documentstore](/img/daiana/dataad/doc.jpeg)
### Document Store
El **Document Store** es el objeto que contiene la documentación indexada.

#### Función
- Almacena los documentos vectorizados.
- Permite búsquedas semánticas.
- Puede reutilizarse en distintos flujos o agentes.

#### Configuración

- Almacenamiento vectorial utilizado.

::::tip
Se recomienda preconfigurar el Document Store antes de integrarlo al Agent Flow, 
::::

los principales aspectos a configurar son:

- **Usage:** Define cómo se procesa la documentación cargada. En la mayoría de los casos se recomienda un esquema de un documento por archivo, de modo que cada archivo conserve su identidad lógica dentro del store.

- **Segmentación de documentos (Text Splitting):**   Determina cómo se divide el contenido en fragmentos (chunks) que luego serán consumidos por los agentes. Para documentación estructurada, se recomienda:

  - Utilizar un **Character Text Splitter** o equivalente.
  - Definir separadores explícitos que representen cortes lógicos del contenido.

- **Chunk Size** Define el tamaño máximo de cada fragmento generado.
    - Debe ser lo suficientemente grande como para contener una unidad semántica completa.
    - Si el Chunk Size es demasiado grande con relación al contenido, los separadores pueden no aplicarse correctamente en algunos chunks.

- **Chunk Overlap**  Define cómo se completa un fragmento cuando, al alcanzar el límite Chunk Size, el contenido restante no alcanza para formar un nuevo chunk coherente. En la práctica, el overlap se utiliza para:

    - Extender el fragmento anterior incorporando el contenido restante cuando este es demasiado corto o no constituye una unidad semántica independiente.
    - Completar el chunk actual antes de realizar una nueva división, evitando generar fragmentos residuales.
    - Ajustar documentos con secciones de tamaño irregular, donde los separadores no coinciden exactamente con los límites del chunk.


A continuación, se incluyen imágenes representativas como referencia visual.

![docstore](/img/daiana/dataad/flow.jpeg)

![docstore](/img/daiana/dataad/chuck.jpeg)


## Creación de agent flow

**Relación entre los objetos**
- El Modelo de Lenguaje se asocia al Supervisor y define las capacidades de generación y tool calling del flujo.
- El Supervisor se conecta a uno o más Workers y es el único nodo con capacidad de decidir cuál se ejecuta.
- Cada Worker depende de un Supervisor y no puede operar de forma autónoma.
- Las herramientas que utiliza un Worker deben estar explícitamente conectadas a dicho Worker.
- El acceso a documentación siempre está mediado por un Retriever Tool.

**Dependencias necesarias**

- El Supervisor requiere un modelo de lenguaje configurado para poder operar.
- Un Worker debe estar asociado a un único Supervisor.
- Un Retriever Tool depende de un Document Store previamente cargado.
- La Memoria del Agente, cuando se utiliza, se asocia al Supervisor para mantener el contexto conversacional.

![agentflow](/img/daiana/dataad/agentflow.jpeg)

La imagen anterior muestra una implementación de referencia de un Agent Flow configurado con un Supervisor central y múltiples Workers especializados, cada uno con acceso a su correspondiente Retriever Tool y Document Store.

Se incluye únicamente como apoyo visual para ilustrar las relaciones entre los distintos nodos descriptas en la sección anterior.

## Recomendaciones
Las siguientes recomendaciones están orientadas a la configuración práctica de los nodos que componen un Agent Flow en Daiana Studio, basadas en la experiencia de implementación.

### Supervisor
- Mantener el prompt del Supervisor enfocado en la coordinación del flujo, evitando que asuma responsabilidades propias de los agentes especializados.
- Definir criterios de delegación explícitos y no superpuestos entre Workers, de modo que cada consulta tenga un único destino claro.
- Configurar el flujo para que el Supervisor delegue a un solo Worker por interacción.
- Considerar agregar un Worker “guía” para manejar consultas ambiguas, introductorias o sin un dominio claramente identificado.

### Worker
- Configurar cada Worker con un alcance funcional claramente delimitado.
- Reflejar ese alcance de forma explícita en su prompt, evitando que el agente responda consultas fuera de su dominio.
- Diseñar la salida del Worker de forma consistente y predecible, explicitando estilo, estructura y nivel de detalle esperado.



### Document Store
- Mantener un Document Store por dominio funcional siempre que sea posible.
- Al momento de cargar la documentación, segmentar los contenidos utilizando separadores claros (por ejemplo, caracteres especiales o delimitadores explícitos) para asegurar que los chunks resultantes estén listos para su consumo por los agentes.
- Incluir un índice o estructura inicial en cada documento Se recomienda que cada documento cargado en el Document Store comience con un índice, listado de secciones o estructura general. Esto permite que el Worker tenga una visión global del contenido, facilite la localización de la información relevante y mejore la precisión de las búsquedas durante la recuperación de fragmentos.

### Retriever Tool
- Asociar cada Retriever Tool a un único dominio funcional.
- Evitar reutilizar el mismo retriever para dominios conceptualmente distintos.

::::info 
Worker guía: se refiere a un agente auxiliar cuyo objetivo es orientar al usuario cuando la consulta es ambigua, incompleta o no corresponde claramente a un dominio funcional específico. 

Este tipo de Worker no resuelve consultas de negocio, sino que ayuda a encauzar la interacción hacia el módulo adecuado.
::::


## Conclusión

Daiana Studio permite construir Data Advisors mediante flujos de agentes configurables, ofreciendo control explícito sobre la orquestación, la especialización de agentes y el acceso a la información.

El enfoque presentado en esta guía muestra cómo utilizar los distintos componentes de la plataforma para implementar un Agent Flow basado en un patrón **Supervisor–Workers**, priorizando claridad de responsabilidades, mantenibilidad y comportamiento predecible.

A partir de esta base, cada implementación puede adaptar los flujos, agentes y documentación según sus necesidades específicas, reutilizando la estructura común que provee la plataforma.



## Documentación comercial

<BoxDoc
  title="SEIDOR Data Advisor - Uso Interno"
  language="Español"
  format="PPTX"
  brand="Daiana"
  titleimg="SEIDOR Data Advisor."
  onDownload="https://seidoranalytics-my.sharepoint.com/:p:/g/personal/admin_seidoranalytics_onmicrosoft_com/IQB1TCd1ZRDGQ6tg_MyE14F-AZkX7bZ57YE45TM3KSQ1KYI?e=PpXUWj"
>
  Incluye un asistente como parte del proyecto para que el equipo cuente con un consultor virtual disponible en todo momento. ​

</BoxDoc>