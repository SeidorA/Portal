---
title: Timeline
description: Roadmap de Crestone Sales

unlisted: true
---
import { Cardroad, Kind, Subitle, Featurecheck   }  from '@site/src/components/cardroad'; 


La Timeline es una vista cronológica que acompaña al roadmap y permite visualizar de forma clara el estado de cada funcionalidad planificada. En esta página podrás identificar qué features ya fueron implementadas y cuáles aún se encuentran en progreso o pendientes, utilizando indicadores visuales de estado completo o incompleto.

Este espacio está pensado para brindar transparencia sobre la evolución del producto, facilitar el seguimiento de los avances y alinear expectativas sobre lo que ya está disponible y lo que se incorporará en las próximas etapas.


## Q2 2026

<div className="boxrroadtime">
    <h4>Q2 2026</h4>
    <p>Este trimestre nos enfocamos en mejorar la accesibilidad del producto al simplificar el acceso mediante SSO, e implementar control de licenciamiento. Además, incorporamos herramientas de migración automatizada y ampliamos significativamente la conectividad con bases de datos (PostgreSQL, Oracle, Sybase, MySQL, IBM y Dynamics 365).</p>

    <h5 className="month">April | 2026</h5>
    <Featurecheck realization title="SSO in Crestone for Microsoft" icon="lock" description="Enable Single Sign-On with Microsoft accounts, allowing users to access Crestone securely and seamlessly while simplifying authentication and user management." />
    <Featurecheck realization title="Licensing control" icon="squareFace" description="Implementation of a centralized interface for proactive management of the license lifecycle, including expiration alerts and usage tracking to avoid surprises at contract end." />

    

    <h5 className="month">June | 2026</h5>
    <Featurecheck realization title="PostgreSQL Integration" icon="PostgreSQL" description="Enable optimized connection and data extraction with PostgreSQL databases to expand the sources of information supported by the platform." />
    
    <Featurecheck realization title="Oracle Integration" brand icon="Oracle" description="Deep and optimized integration for efficient data extraction and processing to Oracle databases." />
    <Featurecheck realization title="Sybase Integration" brand icon="Sybase" description="Integration of a dedicated connector for Sybase databases, expanding the ecosystem of legacy and critical databases supported by the platform." />
    <Featurecheck realization title="MySQL Integration" brand icon="mySQL" description="Enable MySQL as a destination in Crestone, allowing customers to load extracted data into MySQL databases and support operational or application-based data scenarios." />
    <Featurecheck realization title="IBM Integration" icon="IBMDb2" description="Enable IBM databases such as DB2 or Informix as data sources, ensuring compatibility with large corporate and mission-critical environments." />
    <Featurecheck realization title="Microsoft Dynamics 365 Integration" brand icon="Dynamics" description="Enable Microsoft Dynamics 365 as a destination, allowing Crestone to deliver data into business applications that support sales, service and customer processes." />
</div>


## Q1 2026

<div className="boxrroadtime">
    <h4>Q1 2026</h4>
    <p>Este trimestre nos enfocamos en fortalecer la extracción de datos, la optimización de rendimiento y la expansión de fuentes de datos soportadas, preparando la plataforma para integraciones más complejas y robustas.</p>

    <h5 className="month">January | 2026</h5>
    <Featurecheck realization title="OData in the app" icon="OData" description="More robust attachments, connections, and navigation. Attachments and their target destination can now be configured directly within **OData**, along with improved URL readability and greater stability in connections, endpoint validation, and pagination." />
    <Featurecheck realization title="General improvements" icon="Crestone" brand description="A more consistent end-to-end flow. The complete OData extraction flow with attachments was optimized, with internal adjustments to ensure stronger consistency across configuration, execution, and final destination." />

    <h5 className="month">February | 2026</h5>
    <Featurecheck realization title="End-to-end attachments and better performance" description="The full attachments extraction flow has been implemented, enabling direct delivery to the configured destination, along with automatic generation of a metadata file for traceability. In addition, parallel processing was optimized (default 20 threads) to improve execution times." />

    <h5 className="month">March | 2026</h5>
    <Featurecheck realization title="SQL as a source" icon="AzureSql" description="Enable SQL Server as a data source to extract tables/views, with support for full and (when applicable) incremental loads, plus flexible connection and query configuration." />
    <Featurecheck realization title="Job execution triggers" icon="job" description="Provide a mechanism to automatically trigger jobs based on events/conditions (e.g., completion of a previous job, data availability, external signal, or schedule), reducing manual execution and improving orchestration." />
    <Featurecheck realization title="HANA as a Destination" icon="SAP" description="Load extracted data into SAP HANA, with support for full and, where applicable, incremental loads, along with flexible connection and write configuration options." />
</div>



