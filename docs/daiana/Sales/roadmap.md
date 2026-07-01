---
hide_table_of_contents: true
title: "Roadmap"
sidebar_position: 4
---
import { Cardroad, Kind, Subitle }  from '@site/src/components/cardroad'; 
import { CaralIcon} from 'iconcaral2';

Les compartimos el Roadmap de DAIANA, que marca el rumbo de lo que se viene.


Este plan refleja nuestras principales prioridades, las nuevas funcionalidades y las integraciones que seguirán potenciando la herramienta y abriendo camino a nuevas oportunidades de negocio.

![Crestone Roadmap](/img/daiana/road.png)


Cada avance que verán está pensado para sumar valor real a los usuarios, mejorar la eficiencia del equipo y mantenernos un paso adelante en innovación.



<a href="../Timeline" >
  <div className="timeline">
  Ver Timeline 
  <CaralIcon name="chevronRigth" size={30} />
  </div>
</a>



A continuación, encontrarán un resumen de las principales iniciativas organizadas por trimestre 👇





## Q3 2026

<div className="boxrroadmap">
  <Cardroad title="Julio | 2026">
    <Kind />
    <Subitle title="Autenticación de asistentes compartidos" icon="lock"/>
    <p>
      Se incorpora un nuevo esquema de autenticación para asistentes compartidos, permitiendo reemplazar el acceso abierto mediante links públicos por un modelo de acceso más controlado y verificable.
      <br/>
      Esto permite:
      <ul>
        <li>Validar la identidad de los usuarios que acceden al asistente</li>
        <li>Restringir el acceso a perfiles autorizados</li>
        <li>Proteger información sensible</li>
        <li>Mantener trazabilidad de uso</li>
      </ul>
      Esta evolución permite utilizar asistentes en contextos corporativos con mayor nivel de seguridad, habilitando casos de uso internos y externos sin comprometer la gobernanza de la información.
    </p>
  </Cardroad>

  <Cardroad title="Agosto | 2026">
    <Kind />
    <Subitle title="Instalador automatizado" icon="gear"/>
    <p>
      Permite desplegar DAIANA de forma rápida, simple y estandarizada en entornos del cliente.
      <br/><br/>
      Beneficios principales:
      <ul>
        <li>Reducción significativa de tiempos de implementación</li>
        <li>Menor dependencia de configuraciones manuales</li>
        <li>Estandarización del proceso de despliegue</li>
        <li>Mayor autonomía para equipos técnicos del cliente</li>
      </ul>
      Esto facilita la adopción de la plataforma y acelera la puesta en marcha en entornos on-premise.
    </p>
  </Cardroad>

  <Cardroad title="Septiembre | 2026">
    <Kind />
    <Subitle title="Modelo Local" icon="network"/>
    <p>
      Incorpora la capacidad de operar con modelos de lenguaje locales (LLM), permitiendo ejecutar casos de IA sin depender exclusivamente de servicios externos.
      <br/>
      Esto permite:
      <ul>
        <li>Mantener los datos dentro de la infraestructura del cliente</li>
        <li>Cumplir con requerimientos de privacidad y regulación</li>
        <li>Reducir dependencia de proveedores externos</li>
        <li>Optimizar costos en escenarios de alto volumen</li>
      </ul>
      Esta capacidad habilita escenarios donde la seguridad, la soberanía del dato y la eficiencia operativa son críticos, ampliando el alcance de DAIANA.
    </p>
  </Cardroad>
</div>
