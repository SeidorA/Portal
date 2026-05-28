---
title: Act·in | Finance
sidebar_position: 1
description: Act-in Fabric
---

## Contexto 

Las organizaciones que utilizan SAP ERP buscan cada vez más habilitar plataformas analíticas modernas que les permitan explotar sus datos operacionales para analítica avanzada, reporting y toma de decisiones.​

En este contexto, la integración entre SAP y plataformas de datos en la nube como Microsoft Fabric permite consolidar información empresarial y habilitar capacidades analíticas más escalables.​

Act∙in | Finance es una solución analítica de vanguardia que ayuda a las empresas a comprender mejor su negocio y a afrontar los retos de forma directa para mejorar el rendimiento de la empresa.​

La solución Act∙in | Finance, plug & play, es la clave para impulsar el éxito de cualquier organización. Ahora más que nunca, los directivos de alto nivel necesitan soluciones analíticas avanzadas que les ayuden a ahorrar tiempo, un tiempo valioso que puede ser mejor invertido en crear valor en lugar de gastarlo en tediosas tareas administrativas.

## ¿Por qué construimos esta solución?   ​

- Los requerimientos se repiten proyecto a proyecto, generando **actividades que no agregan valor**
- Optimizar los **tiempos de implementación**, buscando respuestas en semanas y no meses.
- La plataforma MS Fabric nos permite poder empaquetar esos requerimientos y entregarlos a los usuarios aprovechando economía de escala.
- Empaquetar la solución de forma modular, que cada cliente pueda armarla a su gusto y aprovechar lo que mas le sirve.
- Asegurar buenas prácticas tanto en materia de extracción de datos como en procesamiento de la información.
- Lograr una plataforma segura, flexible y escalable que estuviera en línea con lo que ha hecho siempre la empresa.


## Arquitectura​
### ¿Qué incluye la solución?   
- Microsoft Fabric es una plataforma de análisis integral "todo en uno" basada en la nube (SaaS) que unifica servicios de datos, ingeniería, almacenamiento, ciencia de datos e inteligencia empresarial (Power BI) en un solo entorno.
- Configuración según mejores prácticas y **afinaciones de rendimiento** para aprovechar la plataforma de la mejor manera.
- CRESTONE es una innovadora herramienta de integración y replicación de datos en tiempo real, diseñada para sincronizar, transformar y transferir información entre sistemas.
- Solución intuitiva, sin código, que permite a usuarios no técnicos gestionar flujos de datos sin desarrollos costosos.
- Buildings Blocks **(Aceleradores)** de contenido para SAP.
- Cobertura funcional de los principales **módulos del ERP.**
- Posibilidad de **ampliar la solución** según la necesidad.
- Integración con **otras soluciones y/o módulos** del ERP no incluidos.


## Arquitectura referencial

![alt text](/img/finance/arq.png)


## Contenido​

### ¿Qué contiene Contabilidad general?​

#### Dashboard

- Contabilidad General (Saldos). 
- Cuentas por Cobrar.
- Cuentas por Pagar.
- Controlling Contabilidad CeCo. 
- Controlling Contabilidad CeBe.

#### Indicadores (GL)

- Debit Amount in Local Currency​
- Crebit Amount in Local Currency​
- Amount in Local Currency with Signs​
- Debit Amount in Document Currency​
- Crebit Amount in Document Currency​
- Amount in Document Currency with Signs​
- Debit Amount in Second Local Currency​
- Crebit Amount in Second Local Currency​
- Amount in Second Local Currency with Signs​
- Debit Amount in Third Local Currency​
- Crebit Amount in Third Local Currency​
- Amount in Third Local Currency with Signs 

#### Atributos 

- Fiscal Period​
- Ledger​
- Company​
- Business Area​
- Cost element​
- Char of Accounts​
- Currencia Type​
- Cost Center​
- Account​
- Controlling área​
- Version​
- Plant​
- Value Type​
- Profit Center

## Alcance de la POC​

La presente Prueba de Concepto (PoC) se enfocará en validar la extracción, carga y consumo analítico de datos provenientes de SAP ERP hacia Microsoft Fabric, utilizando Crestone como herramienta de integración.​

La prueba de concepto contempla:

- ​Configuraciónn ambiente CRESTONE​

- Conexión CRESTONE con SAP ERP​

- Configuración ambiente Microsoft Fabric​

- Extracción de hasta 32 datos maestros (Dimensiones)​

- Extracción de datos transaccionales (GL, AR, AP, Costos CECO, COSTOS CEBE)​

- Creación de dimensiones y modelos de datos​
- Activación de Dashboard Finanzas (Contabilidad General (Saldos), Cuentas por Cobra, Cuentas por Pagar. Controlling Contabilidad CeCo, Controlling Contabilidad CeBe.)


### Resultados y entregables​

Al finalizar la Prueba de Concepto (PoC), se entregarán los siguientes resultados y artefactos, los cuales permitirán validar técnica y funcionalmente la integración entre SAP ERP y la plataforma analítica seleccionada, así como el flujo de ingesta, transformación y consumo de los datos:

- Pipelines de extracción e ingesta configurados mediante Crestone para la carga de datos desde SAP ERP hacia la plataforma analítica seleccionada.

- Conjunto de datos del modelo seleccionado cargados y disponibilizados en la plataforma analítica Microsoft Fabric, preparados para su consumo analítico.

- Dashboard Finanzas​

- Validación técnica de la integración y del flujo de datos entre SAP ERP y la plataforma destino Microsoft Fabric.​

- Recomendaciones para una implementación productiva, incluyendo consideraciones de arquitectura y escalabilidad.


## Criterios de Exito​

La Prueba de Concepto (PoC) se considerará exitosa si se cumplen los siguientes criterios:​

- Extracción correcta de los objetos o tablas del modelo seleccionado, utilizando Crestone como herramienta de integración.

- Carga exitosa de los datos en la plataforma analítica seleccionada Microsoft Fabric.

- Disponibilidad de los datos en la plataforma destino para su consulta y análisis.

- Aplicación de transformaciones básicas de datos, permitiendo generar una estructura analítica simple a partir de la información extraída.​

- Validación exitosa del dashboard basado en los datos procesados.​

- Validación conjunta con el cliente del flujo de datos, desde la extracción en SAP ERP hasta su disponibilidad en la plataforma analítica.


## Exclusiones

La presente Prueba de Concepto tiene como objetivo validar la integración técnica y el flujo de datos entre SAP ERP y la plataforma analítica seleccionada. En este contexto, quedan fuera del alcance de la PoC las siguientes actividades:​

- Implementación de modelos de datos complejos o data warehouses completos.​

- Desarrollo de dashboards productivos o reportes analíticos avanzados, más allá del reporte de demostración definido en el alcance.

- Implementación de modelos de machine learning o analítica avanzada sobre los datos extraídos.

- Extracción de tablas adicionales a las definidas dentro del alcance de la PoC.

- Implementación de procesos de gobierno de datos, calidad de datos o catalogación.

- Integración con fuentes de datos distintas a SAP ERP.

- Implementación de automatizaciones productivas o pipelines de operación continua.

- Modificaciones o desarrollos en el sistema SAP ERP, incluyendo configuraciones, cambios en estructuras de datos, extractores o desarrollo de objetos ABAP.

- Solo se extraerá información del año en curso.


## Cronograma y Equipo de trabajo

![alt text](/img/finance/crono.png)


