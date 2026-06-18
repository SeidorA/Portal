---
title: Crestone vs BigQuery Toolkit for SAP (ABAP SDK – Google)
restricted_access: true
sidebar_position: 3
---
import BoxDoc from '@site/src/components/boxdocs';

<BoxDoc
  title="Battle Card"
  language="Español"
  format="PDF"
  brand="Crestone"
  titleimg="Battle Card"
  onDownload="https://seidoranalytics-my.sharepoint.com/:b:/r/personal/admin_seidoranalytics_onmicrosoft_com/Documents/INNOVACION/CRESTONE/(100)%20Comercial%20-%20Commercial/Battlecard/UsoInterno/BattleCardBigqueryES.pdf?csf=1&web=1&e=BPJE12"
>
  Crestone y BigQuery Toolkit for SAP (ABAP SDK – Google) son soluciones para la extracción de datos desde SAP hacia diversas plataformas. Aunque ambos permiten la transferencia de información a diferentes destinos, existen diferencias clave en su enfoque, implementación y funcionalidades adicionales. La siguiente comparación destaca los aspectos más relevantes para evaluar cuál se adapta mejor a las necesidades del equipo técnico. 
  <br/>
  <strong>USO INTERNO</strong>
</BoxDoc>

<BoxDoc
  title="Battle Card"
  language="English"
  format="PDF"
  brand="Crestone"
  titleimg="Battle Card"
  onDownload="https://seidoranalytics-my.sharepoint.com/:b:/r/personal/admin_seidoranalytics_onmicrosoft_com/Documents/INNOVACION/CRESTONE/(100)%20Comercial%20-%20Commercial/Battlecard/UsoInterno/BattleCardBigqueryEN.pdf?csf=1&web=1&e=NEcbk1"
>
  Crestone and BigQuery Toolkit for SAP (ABAP SDK – Google) are solutions for data extraction from SAP to various platforms. Although both allow the transfer of information to different destinations, there are key differences in their approach, implementation, and additional features. The following comparison highlights the most relevant aspects to evaluate which one best suits the needs of the technical team.
  <br/>
  <strong>FOR INTERNAL USE ONLY</strong>
</BoxDoc>

| Criterio             | Crestone                                                                  | BigQuery Toolkit for SAP (ABAP SDK – Google)                                                                 |
|----------------------|---------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| Orígenes soportados | SAP ABAP (S/4 HANA Y ECC), SAP B1, SAP S/4 Public Edition, SAP HANA, SAP by Design | SAP ECC, SAP S/4HANA, SAP BW (sobre sistemas ABAP). |
| Objetos soportados | Extractores ODP (SAPI), reportes estándar y custom, BAPIs, tablas, CDC, OData | Tablas SAP, vistas, extractores desarrollados en ABAP, datos custom (Z), lógica ABAP propia. |
| Destinos | Azure SQL Server, MS SQL Server (On-Premise), Databricks, Google Cloud Storage, Google BigQuery, Fileserver, AWS S3, AWS Redshift, Microsoft Fabric | Solo Google BigQuery. |
| Automatización |Sincronización programada y en tiempo real. Cargas incrementales basadas en CDC y ODP. | Ejecuciones batch programadas mediante jobs ABAP y planificación en SAP. Cargas incrementales posibles mediante desarrollo específico. |
| Licenciamiento | Basado en cantidad de conexiones y volumen de datos procesados (registros mensuales o nodos) | Toolkit sin costo de licencia. Costos asociados al consumo de Google Cloud (BigQuery, almacenamiento, procesamiento). |
| Soporte | Soporte local con equipo especializado y acompañamiento técnico durante la implementación y operación |Soporte a través de Google Cloud y SAP. Requiere equipo técnico ABAP interno o partner para mantenimiento. | 
| Ventajas | Amplia cobertura SAP, soporte de objetos estándar y custom, rápida implementación, integración con ecosistemas cloud modernos | Integración nativa SAP → BigQuery, sin herramientas intermedias. Ideal para clientes con estrategia definida en Google Cloud y foco en analítica avanzada. | 