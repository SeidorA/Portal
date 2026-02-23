---
hide_table_of_contents: true
title: "Roadmap"
sidebar_position: 3
---
import { Cardroad, Kind, Subitle }  from '@site/src/components/cardroad'; 
import { CaralIcon} from 'iconcaral2';

Nos complace compartir con ustedes nuestro emocionante roadmap de producto para el próximo año. Este plan estratégico describe nuestras prioridades clave, las funcionalidades que entregaremos y las integraciones que nos permitirán fortalecer nuestra plataforma y alcanzar nuevos hitos.

![Crestone Roadmap](/img/crestone/road/portada.png)


Hemos diseñado este roadmap con el objetivo de maximizar el valor para nuestros usuarios, optimizar la eficiencia operativa y mantenernos a la vanguardia en el mercado. A continuación, encontrarán un resumen detallado por trimestre:

<a href="./Timeline" >
  <div className="timeline">
  Ver Timeline 
  <CaralIcon name="chevronRigth" size={30} />
  </div>
</a>





## Q1 2026
Este trimestre está fuertemente enfocado en la Inteligencia Artificial y en la conectividad crítica en tiempo real con sistemas SAP y bases de datos clave, lo cual generará un salto cualitativo en la eficiencia de nuestros usuarios.

<div className="boxrroadmap">
  <Cardroad title="Enero | 2026">
    <Kind />
    <Subitle title="OData in the app" icon="OData"/>
    <p>
      Attachments and their target destination can now be configured directly within **OData**, along with improved URL readability and greater stability in connections, endpoint validation, and pagination.
    </p>
    <hr />
    <Kind integration />
      <Subitle title="General improvements" brand icon="Crestone"/>
      <p>
      The complete OData extraction flow with attachments was optimized, with internal adjustments to ensure stronger consistency across configuration, execution, and final destination.
      </p>
  </Cardroad>

  <Cardroad title="Febrero | 2026">
    <Kind integration />
    <Subitle title="End-to-end attachments and better performance" />
    <p>
    The full attachments extraction flow has been implemented, enabling direct delivery to the configured destination, along with automatic generation of a metadata file for traceability. In addition, parallel processing was optimized (default 20 threads) to improve execution times.
    </p>
    
  </Cardroad>
  
  <Cardroad title="Marzo | 2026">
    <Kind />
    <Subitle title="Licensing control" icon="squareFace"/>
    <p>
      Implementation of a centralized interface for proactive management of the license lifecycle, including expiration alerts and usage tracking to avoid surprises at contract end.
    </p>
    <hr />
      <Subitle title="SQL as a source"  icon="AzureSql"/>
      <p>
        Enable SQL Server as a data source to extract tables/views, with support for full and (when applicable) incremental loads, plus flexible connection and query configuration.
      </p>
      <hr />
      <Subitle title="Job execution triggers"  icon="job"/>
      <p>
        Provide a mechanism to automatically trigger jobs based on events/conditions (e.g., completion of a previous job, data availability, external signal, or schedule), reducing manual execution and improving orchestration.
      </p>
  </Cardroad>
</div>


## Q2 2026
Este plan estratégico describe nuestras prioridades clave, las funcionalidades que entregaremos y las integraciones que nos permitirán fortalecer nuestra plataforma y alcanzar nuevos hitos.

<div class="boxrroadmap">
  <Cardroad title="Abril | 2026">
    <Kind />
    <Subitle title="PostgreSQL Integration" brand icon="PostgreSQL"/>
    <p>
       Enable optimized connection and data extraction with PostgreSQL databases to expand the sources of information supported by the platform.
    </p>
     <hr />
    <Subitle title="SAP Datasphere" brand icon="SAP"/>
    <p>
    Incorporation of an automated channel for delivering CSV files, simplifying daily operations, reducing manual intervention, and ensuring up to date and reliable data for analysis. Additionally, it offers flexible shipping configuration and status tracking, improving operational efficiency and user experience.
    </p>
  </Cardroad>

  <Cardroad title="Mayo | 2026">
    <Kind integration />
    <Subitle title="Salesforce Integration" brand icon="Saleforce"/>
    <p>
    We will establish a deep integration to synchronize key data from Sales Cloud, Service Cloud, and Marketing Cloud.
    </p>
    <hr />
    <Subitle title="Oracle Integration" brand icon="Oracle"/>
    <p>
    Deep and optimized integration for efficient data extraction and processing to Oracle databases.
    </p>
  </Cardroad>

  <Cardroad title="Junio | 2026">
    <Kind integration />
    <Subitle title="Sybase Integration" brand icon="Sybase"/>
    <p>
    Integration of a dedicated connector for Sybase databases, expanding the ecosystem of legacy and critical databases supported by the platform.
    </p>
    <hr />
    <Subitle title="AI assistant" icon="squareFace"/>
    <p>
    Integration of a dedicated connector for Sybase databases, expanding the ecosystem of legacy and critical databases supported by the platform.
    </p>
  </Cardroad>

</div>


## Q3 2026
Este trimestre nos enfocamos en fortalecer la base de nuestra plataforma mediante la integración con ecosistemas de datos clave y la implementación de herramientas para una gestión de licenciamiento transparente y proactiva.

<div class="boxrroadmap">
  <Cardroad title="Julio | 2026">
    <Kind />
    <Subitle title="Real time connection"  icon="clock"/>
    <p>
       In addition to traditional transfer scheduling, the ability to operate in real time is added, thus completing a flexible palette of options that adapts to different business scenarios and data volumes.
    </p>
    <hr />
    <Subitle title="Query Designer" icon="code"/>
    <p>
    Incorporation of a visual environment for query design, simplifying the creation and validation of extraction rules without the need for advanced technical knowledge, optimizing user experience and result accuracy.
    </p>

  </Cardroad>
  <Cardroad title="Agosto | 2026">
    <Kind  integration />
    <Subitle title="Integrations SAP BW" brand icon="SAP"/>
    <p>
    Implementation of an advanced connection with SAP BW for efficient data extraction from InfoProviders, DSOs, and Cubes, consolidating BI analytical capabilities.
    </p>
    <hr />
    <Subitle title="MySQL Integration" brand icon="mySQL"/>
    <p>
    Integration of a dedicated and optimized connector for data extraction and management from MySQL databases, covering one of the most widely used open source systems. 
    </p>
  </Cardroad>  

  <Cardroad title="Septiembre | 2026">
    <Kind  integration />
    <Subitle title="IBM Integration" brand icon="IBMDb2"/>
    <p>
    Implementation of an advanced connection with SAP BW for efficient data extraction from InfoProviders, DSOs, and Cubes, consolidating BI analytical capabilities.
    </p>
    <hr />
    <Subitle title="SAP BTP Integration" brand icon="SAP"/>
    <p>
    Expansion of connection capabilities by incorporating native support for the SAP Business Technology Platform (BTP), consolidating interoperability with critical enterprise ecosystems.
    </p>
  </Cardroad>  
</div>

## Q4 2026


<div class="boxrroadmap">
  <Cardroad title="Octubre | 2026">
    <Kind />
    <Subitle title="Cloudera Integration" brand icon="Cloudera"/>
    <p>
    Native and optimized integration with the Cloudera ecosystem for the extraction, processing, and management of large volumes of data, facilitating Big Data analysis.
    </p>
    <hr />
    <Subitle title="Harbinger Alerts" brand icon="Harbinger"/>
    <p>
    Extension of monitoring capabilities through notifications via WhatsApp or SMS, so you are always informed about the status of your jobs and potential incidents, even outside the work environment.
    </p>
  </Cardroad>

</div>
