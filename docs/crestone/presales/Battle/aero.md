---
title: "Crestone vs Aecorsoft"
sidebar_position: 4
slug: "Aecorsoft"
---
import BoxDoc from '@site/src/components/boxdocs';

<div class="padding-vert--sd">
<BoxDoc
  title="Battle Card"
  language="Español"
  format="PDF"
  brand="Crestone"
  titleimg="Battle Card"
  onDownload="https://seidoranalytics-my.sharepoint.com/:b:/r/personal/admin_seidoranalytics_onmicrosoft_com/Documents/INNOVACION/CRESTONE/(100)%20Comercial%20-%20Commercial/Battlecard/UsoInterno/battlecardAecorsoftES.pdf?csf=1&web=1&e=D6JRT6"
>
  Aecorsoft es una plataforma integral diseñada para optimizar las operaciones de mantenimiento, reparación y revisión (MRO) en el sector aeroespacial. La solución centraliza y automatiza todos los procesos clave del ciclo de vida del mantenimiento de aeronaves, desde la planificación y programación hasta la ejecución, gestión de materiales y seguimiento de componentes. 
  <br/>
  Al integrar información crítica de la flota y operaciones de mantenimiento en una única plataforma, Aecorsoft proporciona una visión completa del estado de salud de las aeronaves y mejora la eficiencia operativa de las organizaciones aeroespaciales. 
  <br/>
  <strong>USO INTERNO</strong>
</BoxDoc>


<BoxDoc
  title="Battle Card"
  language="Ingles"
  format="PDF"
  brand="Crestone"
  titleimg="Battle Card"
  onDownload="https://seidoranalytics-my.sharepoint.com/:b:/r/personal/admin_seidoranalytics_onmicrosoft_com/Documents/INNOVACION/CRESTONE/(100)%20Comercial%20-%20Commercial/Battlecard/UsoInterno/battlecardAecorsoftEN.pdf?csf=1&web=1&e=z1zRUh"
>
  Aerospace (Aecorsoft) is a platform for aircraft maintenance, repair, and overhaul (MRO). It integrates all key MRO processes, including aircraft maintenance planning and execution, materials management, and component lifecycle tracking, providing a comprehensive view of fleet health and maintenance operations. 

  <br/>
  <strong>Internal Use</strong>
</BoxDoc>
</div>

## Capacidades de fuente SAP
La siguiente tabla detalla la compatibilidad de mecanismos de extracción y conectividad entre Crestone y Aecorsoft:

| Mecanismos | Crestone | Aecorsoft |
| :--- | :--- | :--- |
| **RFC / BAPI** <br/>(tablas Z incluidas) | ✅ Sí <br/>RFC estándar + BAPI nativo | ✅ Sí <br/>ABAP Turbo Framework (Open SQL) |
| **CDS Views** (S/4HANA) | ✅ Sí | ✅ Sí |
| **OData / SAP Gateway** (SEGW) | ✅ Sí <br/>fuente explícita | ❌ No |
| **Z Reports** / lógica ABAP custom | ✅ Sí <br/>extracción nativa sin capas adicionales | ✅ Sí <br/>ABAP report/T-code extraction |
| **ODP** (extractores estándar delta: 2LIS_\*, 0FI_\*) | ✅ Sí <br/>vía RFC + colas delta (RSA7) | ✅ Sí |
| **Table CDC** (CDHDR/CDPOS) | ✅ Sí <br/>nativo | ❌ No |
| **SAP Business One** (B1) | ✅ Sí <br/>vía OData | ❌ No |
| **SAP ByDesign / S/4HANA Cloud Public** | ✅ Sí <br/>vía OData | ❌ No |
| **SAP ECC + S/4HANA** (ambos) | ✅ Sí <br/>explícito | ✅ Sí |
| **SAP CAR** | ✅ Sí <br/>vía OData | ❌ No |
| **Cumplimiento SAP Note 3255746** <br/>(parche bloqueante jun-2026) | ✅ OData/SEGW y Table-CDC: totalmente conformes. <br/>Delta vía RFC/RSA7: misma exposición que competidores | ✅ Conforme explícito (ABAP Open SQL) |

## Capacidades técnicas y comerciales
La siguiente tabla detalla la comparación de capacidades técnicas y comerciales entre Crestone y Aecorsoft:

| Criterio técnico / comercial | Crestone | Aecorsoft |
| :--- | :--- | :--- |
| **Despliegue On-Premise** | ✅ Sí | ✅ Sí <br/>VM Windows on-prem o cloud |
| **Despliegue SaaS / Cloud** | ✅ Sí | ✅ Sí |
| **Orquestación de JOBS multi-nodo** | ✅ Sí | ⚠️ Scheduling básico incluido |
| **Change Data Capture (CDC)** | ✅ Sí | ✅ Sí |
| **Delta incremental (extractores SAP)** | ✅ Sí | ✅ Sí |
| **Soporte SAP ECC sin S/4HANA** | ✅ Sí | ✅ Sí |
| **Extracción de Z Reports ABAP** | ✅ Sí | ✅ Sí |
| **Nivel técnico requerido** | ✅ Bajo — perfiles de negocio y analytics | ⚠️ Medio — experiencia en BI |
| **Modelo de precios** | ✅ SEIDOR Analytics — soporte local LATAM | ⚠️ Licencia variable o perpetua |
| **Soporte técnico regional** | ✅ SEIDOR Analytics — soporte local LATAM | ❌ Soporte regional limitado |
| **Certificaciones de seguridad** | ✅ ISO 27001 / 27017 / 27018 / 27701 / 42001 (SEIDOR grupo) | ⚠️ No publicadas |
| **Snowflake Marketplace** | ✅ Sí | ⚠️ No |
| **AI / asistente inteligente integrado** | ✅ Sí | ✅ Adaptive intelligence (Aecorsoft) |

## Destinos de datos
La siguiente tabla detalla los destinos de datos soportados por Crestone y Aecorsoft:

| Destino | Crestone | Aecorsoft |
| :--- | :--- | :--- |
| **Snowflake** | ✅ Sí | ✅ Sí |
| **Databricks / Delta Lake** | ✅ Sí <br/>Delta tables nativas | ✅ Sí |
| **AWS S3** | ✅ Sí | ✅ Sí |
| **Azure** <br/>(Synapse / Blob / ADLS) | ✅ Sí | ✅ Sí |
| **Microsoft Fabric / OneLake** | ✅ Sí | ✅ Sí |
| **Google Cloud Storage / BigQuery** | ✅ Sí | ✅ Parcial (GCP storage) |
| **Azure SQL / SQL Server** | ✅ Sí | ✅ Sí |
| **Teradata** | ✅ Sí | ❌ No confirmado |




