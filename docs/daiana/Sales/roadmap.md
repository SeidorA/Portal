---
hide_table_of_contents: true
title: "Roadmap"
sidebar_position: 4
---
import { Cardroad, Kind, Subitle }  from '@site/src/components/cardroad'; 
import { CaralIcon} from 'iconcaral2';

Les compartimos el Roadmap de DAIANA, que marca el rumbo de lo que se viene.


Este plan refleja nuestras principales prioridades, las nuevas funcionalidades y las integraciones que seguirán potenciando la herramienta y abriendo camino a nuevas oportunidades de negocio.

![Crestone Roadmap](/img/crestone/road/portada.png)


Cada avance que verán está pensado para sumar valor real a los usuarios, mejorar la eficiencia del equipo y mantenernos un paso adelante en innovación.



<a href="./Timeline" >
  <div className="timeline">
  Ver Timeline 
  <CaralIcon name="chevronRigth" size={30} />
  </div>
</a>



A continuación, encontrarán un resumen de las principales iniciativas organizadas por trimestre 👇



## Q1 2026
Este trimestre está fuertemente unificar el acceso y autenticación de usuarios corporativos y Mejorar la precisión y relevancia de las respuestas de los asistentes mediante retroalimentación humana.

<div className="boxrroadmap">
  <Cardroad title="Enero | 2026">
    <Kind integration/>
    <Subitle title="LLM Ollama en Enterprise" brand icon="Ollama"/>
    <p>
    Se integrará compatibilidad con Ollama para desplegar LLMs internos, manteniendo la estructura de Daiana sin depender de servicios externos.
    </p>
    
  </Cardroad>

  <Cardroad title="Febrero | 2026">
    <Kind integration />
    <Subitle title="Integración Active Directory" brand icon="Windows"/>
    <p>
    Daiana reconocerá usuarios y grupos provenientes de Active Directory, permitiendo otorgar accesos automáticos según políticas empresariales.
    </p>
   
  </Cardroad>
  
  <Cardroad title="Marzo | 2026">
    <Kind />
    <Subitle title="Feedback Loop" icon="refreshPresentation"/>
    <p>
      Los administradores podrán marcar respuestas como “buenas” o “malas” para reentrenar los embeddings y prompts del asistente automáticamente, aplicable a los asistentes de documentos en entornos Enterprise.
    </p>
    
  </Cardroad>
</div>


## Q2 2026
Para este trimestre, nos enfocaremos en ofrecer una alternativa local y personalizable de modelos LLM dentro de entornos Enterprise, Ampliar las fuentes de conocimiento disponibles y optimizar la atención automatizada dirigiendo las consultas a la persona, área o sistema más adecuado.

<div class="boxrroadmap">
  <Cardroad title="Abril | 2026">
    <Kind integration />
    <Subitle title="Seguridad de SAP"  brand icon="SAP"/>
    <p>
      Se habilitará la sincronización con roles y se lanzará un paquete integrado que combine Daiana con productos de analítica avanzada.
    </p>
    
  </Cardroad>

  <Cardroad title="Mayo | 2026">
    <Kind integration />
    <Subitle title="ORACLE DB en Enterprise" brand icon="Oracle"/>
    <p>
    Se incorporará soporte nativo para conexión segura a Oracle Database dentro de los entornos Enterprise de Daiana.
    </p>
  
  </Cardroad>

  <Cardroad title="Junio | 2026">
    <Kind integration />
    <Subitle title="Enrutamiento inteligente" icon="squareFace"/>
    <p>
    El sistema identificará la complejidad o tipo de solicitud y redirigirá automáticamente la interacción al canal o responsable correspondiente, saliendo del flujo de IA cuando sea necesario.
    </p>
  </Cardroad>

</div>

