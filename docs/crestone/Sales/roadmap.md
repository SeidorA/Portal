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


<div className="boxrroadmap">
  <Cardroad title="January | 2026">
    <Kind />
    <Subitle  title="OData in the app" icon="OData"/>
    <p>
      More robust attachments, connections, and navigation
      <br />
      Attachments and their target destination can now be configured directly within **OData**, along with improved URL readability and greater stability in connections, endpoint validation, and pagination.
    </p>
    <hr />
      <Subitle title="General improvements" brand icon="Crestone"/>
      <p>
      The complete OData extraction flow with attachments was optimized, with internal adjustments to ensure stronger consistency across configuration, execution, and final destination.
      </p>
  </Cardroad>

  <Cardroad title="February | 2026">
    <Kind  />
    <Subitle title="End-to-end attachments and better performance" />
    <p>
    The full attachments extraction flow has been implemented, enabling direct delivery to the configured destination, along with automatic generation of a metadata file for traceability. In addition, parallel processing was optimized (default 20 threads) to improve execution times.
    </p>
    
  </Cardroad>
  
  <Cardroad title="March | 2026">
    <Kind />
    <Subitle title="Licensing control" icon="squareFace"/>
    <p>
      Implementation of a centralized interface for proactive management of the license lifecycle, including expiration alerts and usage tracking to avoid surprises at contract end.
    </p>
      <hr />
      <Subitle title="Job execution triggers"  icon="job"/>
      <p>
        Provide a mechanism to automatically trigger jobs based on events/conditions (e.g., completion of a previous job, data availability, external signal, or schedule), reducing manual execution and improving orchestration.
      </p>
    <hr />
    <Subitle title="Crestone available on Snowflake Marketplace"  crenstonplus brand icon="Snowflake"/>
    <p>
      Crestone will be available for customers to obtain directly from Snowflake Marketplace, simplifying access and purchasing within the Snowflake ecosystem and improving product discoverability.
    </p>
    <hr/>
    <Kind integration />
      <Subitle title="SQL as a source"  icon="AzureSql"/>
      <p>
        Enable SQL Server as a data source to extract tables/views, with support for full and (when applicable) incremental loads, plus flexible connection and query configuration.
      </p>
  </Cardroad>
</div>


## Q2 2026


<div class="boxrroadmap">
  <Cardroad title="April | 2026">
    <Kind  />
    <Subitle title="AI assistant" icon="squareFace"/>
    <p>
    Integration of a dedicated connector for Sybase databases, expanding the ecosystem of legacy and critical databases supported by the platform.
    </p>
    <hr/>
    <Kind integration />
    <Subitle title="ACT·in powered by Crestone (standard extraction layer)" brand icon="Crestone"/>
    <p>
       act·in solutions will use Crestone as the underlying engine for data extractions and delivery, standardizing connectivity and scheduling while improving reliability and traceability end-to-end.
    </p>
     <hr />
    <Subitle title="Crestone available on Microsoft Marketplace" crenstonplus brand icon="Windows"/>
    <p>
   Crestone will be available for customers to obtain directly from Microsoft Marketplace, simplifying access and purchasing within the Microsoft/Azure ecosystem and improving product discoverability.
    </p>

  </Cardroad>

  <Cardroad title="May | 2026">
    <Kind />
    <Subitle title="Theobald to Crestone migrator" brand  icon="Crestone"/>
      <p>
        Provide a mechanism to automatically trigger jobs based on events/conditions (e.g., completion of a previous job, data availability, external signal, or schedule), reducing manual execution and improving orchestration.
      </p>
      <hr />
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

  <Cardroad title="June | 2026">
    <Kind integration />
    <Subitle title="PostgreSQL Integration" brand icon="PostgreSQL"/>
    <p>
       Enable optimized connection and data extraction with PostgreSQL databases to expand the sources of information supported by the platform.
    </p>
     <hr />
    <Subitle title="SAP Business Data cloud" brand icon="SAP"/>
    <p>
    Incorporation of an automated channel for delivering CSV files, simplifying daily operations, reducing manual intervention, and ensuring up to date and reliable data for analysis. Additionally, it offers flexible shipping configuration and status tracking, improving operational efficiency and user experience.
    </p>
    <hr/>
    <Kind />
    <Subitle title="Crestone available on Databricks Marketplace" crenstonplus brand icon="Databricks"/>
    <p>
    Crestone will be available for customers to obtain directly from Databricks Marketplace, simplifying access and purchasing within the Databricks ecosystem and improving product discoverability.
    </p>
    
  </Cardroad>

</div>


## Q3 2026

<div class="boxrroadmap">
  <Cardroad title="July | 2026">
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
  <Cardroad title="August | 2026">
    <Kind  integration />
    <Subitle title="Integrations SAP BW" brand icon="SAP"/>
    <p>
    Implementation of an advanced connection with SAP BW for efficient data extraction from InfoProviders, DSOs, and Cubes, consolidating BI analytical capabilities.
    </p>
    <hr />
    <Subitle title="Sybase Integration" brand icon="Sybase"/>
    <p>
    Integration of a dedicated connector for Sybase databases, expanding the ecosystem of legacy and critical databases supported by the platform.
    </p>
  </Cardroad>  

  <Cardroad title="September | 2026">
    <Kind  integration />
    <Subitle title="IBM Integration" brand icon="IBMDb2"/>
    <p>
    Integration with IBM databases (DB2 or Informix), ensuring compatibility with large corporate and mission critical environments.
    </p>
   
  </Cardroad>  
</div>

## Q4 2026


<div class="boxrroadmap">
  <Cardroad title="October | 2026">
    <Kind integration />
    <Subitle title="Cloudera Integration" brand icon="Cloudera"/>
    <p>
    Native and optimized integration with the Cloudera ecosystem for the extraction, processing, and management of large volumes of data, facilitating Big Data analysis.
    </p>
    
  </Cardroad>


  <Cardroad title="November | 2026">
    <Kind />
    <Subitle title="ETL capabilities" brand icon="Crestone"/>
    <p>
    Extend Crestone from extraction to an end-to-end ETL platform by adding built-in transformations and orchestration, enabling data cleansing and standardization before delivery to the target system and reducing reliance on external tools.
    </p>
    <hr />
    <Subitle title="Crestone available on Google Cloud" brand icon="GoogleStorage"/>
    <p>
    Enable Crestone deployment on Google Cloud, allowing customers to accelerate implementation without changing their cloud strategy and standardize their data operations in GCP.
    </p>
  </Cardroad>
    <Cardroad title="December | 2026">
    <Kind />
    <Subitle title="Crestone available on AWS" brand icon="AWS"/>
    <p>
    Enable Crestone deployment on AWS, allowing customers to run it in their own cloud environment, aligned with their IT standards and with greater control over data and operations.
    </p>
    <hr />
    <Subitle title="Crestone available on Microsoft Azure" brand icon="Azure"/>
    <p>
    Enable Crestone deployment on Azure to facilitate adoption for Microsoft-centric organizations and keep the solution within the cloud ecosystem they already use.
    </p>
    
  </Cardroad>

</div>
