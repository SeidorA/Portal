---
title: Timeline
description: Roadmap de Crestone Sales

unlisted: true
---
import { Cardroad, Kind, Subitle, Featurecheck   }  from '@site/src/components/cardroad'; 


La Timeline es una vista cronológica que acompaña al roadmap y permite visualizar de forma clara el estado de cada funcionalidad planificada. En esta página podrás identificar qué features ya fueron implementadas y cuáles aún se encuentran en progreso o pendientes, utilizando indicadores visuales de estado completo o incompleto.

Este espacio está pensado para brindar transparencia sobre la evolución del producto, facilitar el seguimiento de los avances y alinear expectativas sobre lo que ya está disponible y lo que se incorporará en las próximas etapas.


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


## Q4 2025
<div className="boxrroadtime">
    <p>Este trimestre nos enfocamos en fortalecer la base de nuestra plataforma mediante la integración con ecosistemas de datos clave y la implementación de herramientas para una gestión de licenciamiento transparente y proactiva.</p>

    <h5 className="month">Octubre | 2025</h5>
    <Featurecheck  realization title="Licensing control"  icon="newFile" description="Implementación de una interfaz centralizada para la gestión proactiva del ciclo de vida de la licencia, incluyendo alertas de vencimiento y uso para evitar sorpresas al finalizar el contrato." />

    <h5 className="month">Noviembre | 2025</h5>
    

    <Featurecheck  realization title="Integración con PostgreSQL"  icon="PostgreSQL" brand description="Habilitar la conexión y extracción de datos optimizada con bases de datos PostgreSQL para ampliar las fuentes de información soportadas por la plataforma." /> 


    <Featurecheck   title="Integración con Saleforce"  icon="Saleforce" brand description="Estableceremos una integración profunda para sincronizar datos clave de Sales Cloud, Service Cloud y Marketing Cloud." /> 

    

    <h5 className="month">Diciembre | 2025</h5>

    <Featurecheck realization  title="Integración con Fabric"  icon="Fabric" brand description="Habilitar la conexión y extracción de datos optimizada con bases de datos Fabric para ampliar las fuentes de información soportadas por la plataforma." /> 

    <Featurecheck   title="Integración con SAP Datasphere"  icon="SAP" brand description="Incorporación de un canal automatizado para la entrega de archivos CSV, que simplifica la operación diaria, reduce la intervención manual y asegura datos actualizados y confiables para el análisis. Además, ofrece configuración flexible de envíos y seguimiento del estado, mejorando la eficiencia operativa y la experiencia de los usuarios." /> 

</div>
