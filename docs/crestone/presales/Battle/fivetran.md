---
title: Crestone vs Fivetran
restricted_access: true
sidebar_position: 2
---

Crestone y Fivetran son soluciones para la extracción de datos desde SAP hacia diversas plataformas. Aunque ambos permiten la transferencia de información a diferentes destinos, existen diferencias clave en su enfoque, implementación y funcionalidades adicionales. La siguiente comparación destaca los aspectos más relevantes para evaluar cuál se adapta mejor a las necesidades del equipo técnico.


| Criterio             | Crestone                                                                  | Fivetran                                                                 |
|----------------------|---------------------------------------------------------------------------|----------------------------------------------------------------------------|
| Orígenes soportados         | SAP ABAP (S/4 HANA Y ECC), SAP B1, SAP S/4 Public Edition, SAP HANA, SAP by Design  | Aplicaciones SaaS, bases de datos cloud y on-premise, sistemas empresariales |
| Objetos soportados |  Extractores ODP (SAPI), reportes estándar y custom, BAPIs, tablas, CDC, OData | Tablas y vistas de bases de datos, APIs de aplicaciones SaaS| 
| Destinos | Azure SQL Server, MS SQL Server (On-Premise), Databricks, Google Cloud Storage, Google BigQuery, Fileserver, AWS S3, AWS Redshift, Microsoft Fabric | Data Warehouses y Data Lakes cloud: BigQuery, Snowflake, Redshift, Databricks, Azure Synapse| 
| Automatización | Sincronización programada y en tiempo real. Cargas incrementales basadas en CDC y ODP. | Sincronización continua y automática con replicación incremental |
| Licenciamiento | Basado en cantidad de conexiones y volumen de datos procesados (registros mensuales o nodos) | Basado en volumen de datos sincronizados (consumo) | 
| Soporte | Soporte local con equipo especializado y acompañamiento técnico durante la implementación y operación | Soporte técnico por niveles según plan contratado |
| Ventajas | Amplia cobertura SAP, soporte de objetos estándar y custom, rápida implementación, integración con ecosistemas cloud modernos | Gran cantidad de conectores SaaS, operación totalmente gestionada, ideal para analítica cloud | 