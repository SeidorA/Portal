---
title: Timeline
description: Roadmap de Crestone Sales

unlisted: true
sidebar_position: 5
---
import { Cardroad, Kind, Subitle, Featurecheck   }  from '@site/src/components/cardroad'; 


La Timeline es una vista cronológica que acompaña al roadmap y permite visualizar de forma clara el estado de cada funcionalidad planificada. En esta página podrás identificar qué features ya fueron implementadas y cuáles aún se encuentran en progreso o pendientes, utilizando indicadores visuales de estado completo o incompleto.

Este espacio está pensado para brindar transparencia sobre la evolución del producto, facilitar el seguimiento de los avances y alinear expectativas sobre lo que ya está disponible y lo que se incorporará en las próximas etapas.

## Q2 2026

<div className="boxrroadtime">
    <p>Este trimestre nos enfocamos en avanzar hacia una plataforma de IA abierta e interoperable, con la incorporación del soporte para Model Context Protocol (MCP), orquestación multimodal de contenidos y sistemas multiagente avanzados con supervisión humana.</p>

    <h5 className="month">Abril | 2026</h5>
    <Featurecheck realization title="Plataforma Interoperable (MCP Ready)" icon="command" description={<span>
      DAIANA evoluciona hacia un modelo abierto capaz de integrarse con herramientas externas bajo estándares modernos.
      <br/>
      Esto permite:
      <ul>
        <li>Extender capacidades sin desarrollos adicionales</li>
        <li>Integrarse con ecosistemas existentes</li>
        <li>Construir arquitecturas distribuidas de IA</li>
        <li>Escalar de forma modular</li>
      </ul>
    </span>} />

    <h5 className="month">Mayo | 2026</h5>
    <Featurecheck realization title="Orquestación Multimodal" icon="network" description={<span>
      Incorporación de capacidades para combinar texto, documentos, imágenes y audio dentro de un mismo flujo.
      <br/>
      Casos de valor:
      <ul>
        <li>Asistentes con entrada por voz</li>
        <li>Análisis documental enriquecido</li>
        <li>Procesamiento visual integrado</li>
        <li>Experiencias conversacionales más avanzadas</li>
      </ul>
    </span>} />

    <h5 className="month">Junio | 2026</h5>
    <Featurecheck realization title="Sistema Multiagente con Human-in-the-Loop" icon="squareFace" description={<span>
      DAIANA incorpora orquestación avanzada entre múltiples agentes especializados.
      <br/>
      Capacidades:
      <ul>
        <li>Asignación dinámica según contexto</li>
        <li>Decisiones condicionales automatizadas</li>
        <li>Escalamiento inteligente</li>
        <li>Intervención humana cuando el proceso lo requiera</li>
      </ul>
      <br/>
      Impacto estratégico:
      <ul>
        <li>Automatización de procesos complejos</li>
        <li>Reducción de carga operativa</li>
        <li>Mayor control y supervisión</li>
        <li>IA alineada a procesos críticos de negocio</li>
      </ul>
    </span>} />
</div>


## Q1 2026

<div className="boxrroadtime">
    <p>Este trimestre nos enfocamos en expandir la plataforma DAIANA con organización escalable mediante Workspaces, fortalecer la seguridad con controles avanzados de acceso, optimizar el rendimiento computacional y acelerar la creación de flujos a través de lenguaje natural.</p>

    <h5 className="month">January | 2026</h5>
    <Featurecheck realization  title="Organización por Workspaces" icon="usersWifi" description="Incorporación de una nueva forma de organizar y gestionar tus desarrollos con IA para trabajar de manera ordenada y aislada por cuenta. Esto permite a las organizaciones separar desarrollos por equipos de trabajo o áreas, escalar la adopción sin perder control, y ordenar entornos bajo estándares corporativos." />
    <Featurecheck realization title="Entorno de Evaluación y Testing" icon="editFile" description="Se habilita un sistema de evaluación controlado para validar asistentes y flujos antes de su salida a producción. Beneficios: reducción de riesgos en despliegues, optimización de costos (tokens, performance), mejora continua basada en métricas, y mayor confiabilidad operativa." />

    <h5 className="month">February | 2026</h5>
    <Featurecheck realization title="Seguridad y Control de Accesos" icon="lock" description="Refuerzo de la arquitectura de seguridad de DAIANA Studio con gestión avanzada de roles y permisos, control de acceso por Workspace, aislamiento seguro entre proyectos y mayor trazabilidad y gobernanza. Los permisos configurados desde Studio garantizan que la información no se comparta entre perfiles sin autorización." />
    <Featurecheck realization title="Gestión de Aceleración de Cómputo" icon="gear" description="**DAIANA** permite configurar el tipo de procesamiento según la infraestructura disponible. Impacto: mejor performance en tareas intensivas, mayor eficiencia en consumo de recursos, adaptabilidad a distintos entornos tecnológicos y optimización de costos operativos." />

    <h5 className="month">March | 2026</h5>
    <Featurecheck realization title="Control de Licenciamiento" icon="refreshPresentation" description="Implementación de un sistema centralizado de gestión del ciclo de vida de licencias. Beneficios: alertas de vencimiento, seguimiento de uso, control de consumo por entorno y mayor previsibilidad presupuestaria." />
    <Featurecheck realization title="Generación de Flujos mediante Lenguaje Natural" icon="jobs" description="La plataforma acelera la construcción de flujos descriptos en lenguaje natural generando la estructura básica a través de la propia IA. Impacto: reducción de barrera técnica, aceleración en el desarrollo y mayor autonomía de equipos funcionales." />
</div>

## Q4 2025

<div className="boxrroadtime">
    
    <p>Este trimestre nos enfocamos en presentar la nueva versión de la plataforma Daiana con mejoras en interfaz, rendimiento y gestión de asistentes, permitir la interacción directa con los asistentes de Daiana desde entornos colaborativos corporativos y Fortalecer la seguridad y control de acceso sobre los asistentes compartidos dentro y fuera de la organización.</p>

    <h5 className="month">Octubre | 2025</h5>
    <Featurecheck  realization title="Chat enriquecido para Daiana Studio"  icon="Daiana" brand description="Se incorporará una nueva experiencia de interacción con los agentes creados en Studio, que permitirá respuestas más dinámicas, con elementos visuales, botones y acciones integradas dentro del chat, como interacción por voz." />

    <h5 className="month">Noviembre | 2025</h5>
    

    <Featurecheck  realization title="Integracion de DB a MS Teams"  icon="Teams" brand description="Estableceremos una integración profunda para sincronizar datos clave de Sales Cloud, Service Cloud y Marketing Cloud." /> 


    

    <h5 className="month">Diciembre | 2025</h5>

    <Featurecheck realization  title="Asistentes compartidos"  icon="key" brand description="Se permitirá compartir el acceso a un asistente mediante un link seguro, para garantizar la seguridad y control de acceso en escenarios donde un asistente se comparte con usuarios externos o grupos limitados, sin exponerlo públicamente" /> 


</div>
