---
title: Crestone vs Fivetran
restricted_access: true
sidebar_position: 2
---
import BoxDoc from '@site/src/components/boxdocs';

<BoxDoc
  title="Battle Card"
  language="Español"
  format="PDF"
  brand="Crestone"
  titleimg="Battle Card"
  onDownload="https://seidoranalytics-my.sharepoint.com/:b:/r/personal/admin_seidoranalytics_onmicrosoft_com/Documents/INNOVACION/CRESTONE/(100)%20Comercial%20-%20Commercial/Battlecard/UsoInterno/BattleCardFivetranES.pdf?csf=1&web=1&e=tY8V0m"
>
  Crestone y Fivetran son soluciones para la extracción de datos desde SAP hacia diversas plataformas. Aunque ambos permiten la transferencia de información a diferentes destinos, existen diferencias clave en su enfoque, implementación y funcionalidades adicionales. La siguiente comparación destaca los aspectos más relevantes para evaluar cuál se adapta mejor a las necesidades del equipo técnico.
  <br/>
  <strong>USO INTERNO</strong>
</BoxDoc>

<box-doc
  title="Battle Card"
  language="English"
  format="PDF"
  brand="Crestone"
  titleimg="Battle Card"
  onDownload="https://seidoranalytics-my.sharepoint.com/:b:/r/personal/admin_seidoranalytics_onmicrosoft_com/Documents/INNOVACION/CRESTONE/(100)%20Comercial%20-%20Commercial/Battlecard/UsoInterno/BattleCardFivetranEN.pdf?csf=1&web=1&e=hKafe0"
>

  Crestone and Fivetran are solutions for data extraction from SAP to various platforms. Although both allow the transfer of information to different destinations, there are key differences in their approach, implementation, and additional features. The following comparison highlights the most relevant aspects to evaluate which one best suits the needs of the technical team.
  <br/>
  <strong>FOR INTERNAL USE ONLY</strong>

</box-doc>


| Criterio             | Crestone                                                                  | Fivetran                                                                 |
|----------------------|---------------------------------------------------------------------------|----------------------------------------------------------------------------|
| Orígenes soportados         | SAP ABAP (S/4 HANA Y ECC), SAP B1, SAP S/4 Public Edition, SAP HANA, SAP by Design  | Aplicaciones SaaS, bases de datos cloud y on-premise, sistemas empresariales |
| Objetos soportados |  Extractores ODP (SAPI), reportes estándar y custom, BAPIs, tablas, CDC, OData | Tablas y vistas de bases de datos, APIs de aplicaciones SaaS| 
| Destinos | Azure SQL Server, MS SQL Server (On-Premise), Databricks, Google Cloud Storage, Google BigQuery, Fileserver, AWS S3, AWS Redshift, Microsoft Fabric | Data Warehouses y Data Lakes cloud: BigQuery, Snowflake, Redshift, Databricks, Azure Synapse| 
| Automatización | Sincronización programada y en tiempo real. Cargas incrementales basadas en CDC y ODP. | Sincronización continua y automática con replicación incremental |
| Licenciamiento | Basado en cantidad de conexiones y volumen de datos procesados (registros mensuales o nodos) | Basado en volumen de datos sincronizados (consumo) | 
| Soporte | Soporte local con equipo especializado y acompañamiento técnico durante la implementación y operación | Soporte técnico por niveles según plan contratado |
| Ventajas | Amplia cobertura SAP, soporte de objetos estándar y custom, rápida implementación, integración con ecosistemas cloud modernos | Gran cantidad de conectores SaaS, operación totalmente gestionada, ideal para analítica cloud | 