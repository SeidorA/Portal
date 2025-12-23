---
title: Crestone vs BigQuery Toolkit for SAP (ABAP SDK – Google)
restricted_access: true
sidebar_position: 3
---


Crestone y BigQuery Toolkit for SAP (ABAP SDK – Google) son soluciones para la extracción de datos desde SAP hacia diversas plataformas. Aunque ambos permiten la transferencia de información a diferentes destinos, existen diferencias clave en su enfoque, implementación y funcionalidades adicionales. La siguiente comparación destaca los aspectos más relevantes para evaluar cuál se adapta mejor a las necesidades del equipo técnico.

| Criterio             | Crestone                                                                  | Xtract Universal                                                                 |
|----------------------|---------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| Orígenes soportados | SAP ABAP (S/4 HANA Y ECC), SAP B1, SAP S/4 Public Edition, SAP HANA, SAP by Design | SAP ECC, SAP S/4HANA, SAP BW (sobre sistemas ABAP). |
| Objetos soportados | Extractores ODP (SAPI), reportes estándar y custom, BAPIs, tablas, CDC, OData | Tablas SAP, vistas, extractores desarrollados en ABAP, datos custom (Z), lógica ABAP propia. |
| Destinos | Azure SQL Server, MS SQL Server (On-Premise), Databricks, Google Cloud Storage, Google BigQuery, Fileserver, AWS S3, AWS Redshift, Microsoft Fabric | Solo Google BigQuery. |
| Automatización |Sincronización programada y en tiempo real. Cargas incrementales basadas en CDC y ODP. | Ejecuciones batch programadas mediante jobs ABAP y planificación en SAP. Cargas incrementales posibles mediante desarrollo específico. |
| Licenciamiento | Basado en cantidad de conexiones y volumen de datos procesados (registros mensuales o nodos) | Toolkit sin costo de licencia. Costos asociados al consumo de Google Cloud (BigQuery, almacenamiento, procesamiento). |
| Soporte | Soporte local con equipo especializado y acompañamiento técnico durante la implementación y operación |Soporte a través de Google Cloud y SAP. Requiere equipo técnico ABAP interno o partner para mantenimiento. | 
| Ventajas | Amplia cobertura SAP, soporte de objetos estándar y custom, rápida implementación, integración con ecosistemas cloud modernos | Integración nativa SAP → BigQuery, sin herramientas intermedias. Ideal para clientes con estrategia definida en Google Cloud y foco en analítica avanzada. | 