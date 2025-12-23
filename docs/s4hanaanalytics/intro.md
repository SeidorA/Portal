---
sidebar_label: "SAP S4HANA analytics​"
title:  SAP S4HANA analytics​
sidebar_position: 1
iconName: "SAP"
useBrand: true
---
import BoxDoc from '../../src/components/boxdocs';

## Material Comercial

<div class="padding-vert--sd">

<BoxDoc
  title="Commercial Presentation ACT IN S4HANA"
  language="Inglés"
  format="PPTX"
  brand="SAP"
  titleimg="S4HANA"
  onDownload="https://seidoranalytics-my.sharepoint.com/:p:/g/personal/admin_seidoranalytics_onmicrosoft_com/EXHUy9ELqpVIj0DLABs_TrwBa38ztr7nHs7PMTdDkozvaA?e=P3DR4T"
>
  Presentación corporativa lista para exponer, con toda la información clave: funcionalidades, beneficios, casos de uso y ecosistema de integraciones.
</BoxDoc>

<BoxDoc
  title="Presentacion comercial ACT IN S4HANA"
  language="Español"
  format="PPTX"
  brand="SAP"
  titleimg="S4HANA"
  onDownload="https://seidoranalytics-my.sharepoint.com/:p:/g/personal/admin_seidoranalytics_onmicrosoft_com/Ef3na5Exb5NOt3fLO7yVDZEBWUfc_5hAfglFJpw6zFbPaw?e=PsIc78"
>
  Presentación corporativa lista para exponer, con toda la información clave: funcionalidades, beneficios, casos de uso y ecosistema de integraciones.
</BoxDoc>

</div>

## ¿Qué es Act·in | SAP S/4HANA analytics?
### Analítica potente y ampliable

- En una era de rápida transformación, las empresas necesitan convertir constantemente el conocimiento de los datos. La mayoría de las empresas han realizado grandes inversiones en soluciones de BI sin obtener buenos resultados.​
- Act∙in | SAP S/4HANA analytics es una solución analítica de vanguardia que ayuda a las empresas a comprender mejor su negocio y a afrontar los retos de forma directa para mejorar el rendimiento de la empresa.​
- La solución Act∙in | SAP S/4HANA analytics, plug & play, es la clave para impulsar el éxito de cualquier organización. Ahora más que nunca, los directivos de alto nivel necesitan soluciones analíticas avanzadas que les ayuden a ahorrar tiempo, un tiempo valioso que puede ser mejor invertido en crear valor en lugar de gastarlo en tediosas tareas administrativas.

### ¿Por qué construimos esta solución?​

- Los requerimientos se repiten proyecto a proyecto, generando **actividades que no agregan valor.​**
- Optimizar los **tiempos de implementación,** buscando respuestas en semanas y no meses.
- La plataforma AWS nos **permite poder empaquetar esos requerimientos** y entregarlos a los usuarios aprovechando economía de escala.
- Empaquetar la solución de forma modular, que cada cliente pueda **armarla a su gusto** y aprovechar lo que mas le sirve.
- Asegurar **buenas prácticas** tanto en materia de extracción de datos como en procesamiento de la información.​
- Lograr una plataforma **segura, flexible y escalable** que estuviera en línea con lo que ha hecho siempre la empresa.



## Arquitectura

![Arquitectura](/img/s4a/arquitectura.png)

**¿Qué incluye la solución?**
- Servicio gestionado de solución AWS para **data y analytics.​**
- Configuración según mejores prácticas y **afinaciones de rendimiento** para aprovechar la plataforma de la mejor manera.
- Buildings Blocks **(Aceleradores)** de contenido para SAP.
- Cobertura funcional de los principales **módulos del ERP.​**
- Integración con **otras soluciones** y/o módulos del ERP no incluidos.
- Acompañamiento especializado para **implementar sus solución de BI.​**
- Más de **20 años de experiencia** en soluciones de analítica.
- Más de **180 consultores especializados** para brindar un servicio de excelencia.​

## Contenido
### ¿Qué modelos contiene?

| **Inventario**                | **Producción**                           | **Mantenimiento**                        |
|--------------------------------|------------------------------------------|------------------------------------------|
| Movimiento material            | Órdenes de producción                    | Órdenes de mantenimiento                 |
| Inventario                     | Rendimientos producción                  | Costo de mantenimiento                   |
|                                | Notificaciones producción                | Eficiencia de planta (OEE)               |
|                                | Mermas                                   |                                          |

---
| **Ventas**                     | **Finanzas**                              | **Compras**                              |
|--------------------------------|-------------------------------------------|------------------------------------------|
| Facturación                    | Contabilidad General (Saldos)             | Solped                                   |
| Notas de Crédito               | Cuentas por Cobrar                        | Orden de compra                          |
| Pedidos de Ventas              | Cuentas por Pagar                         | Recepción de Mercadería                  |
| Entregas                       | Controlling Contabilidad CeCo.            | Imputación OC                            |
| Devoluciones                   | Controlling Contabilidad CeBe.            | Facturación Proveedor                    |
| Backlog                        | Contabilidad General (Movimientos)        | Cuentas a Pagar Proveedores              |
| Nivel de Servicio (OTIF)       | Flujo de Caja (método Indirecto)          | Eficiencia de Proveedores                |
|                                | Activo Fijo                               | Lead times                               |
|                                | Indicadores Financieros                   |                                          |


### Cronograma - Alcance estándar

| Actividad                         | W1  | W2  | W3  | W4  | W5  | W6  |
|-----------------------------------|-----|-----|-----|-----|-----|-----|
| **act-in connector for S4**     |     |     |     |     |     |     |
| Setup & Configuration             | ✔️  |     |     |     |     |     |
| **act-in flexiDM for S4**       |     |     |     |     |     |     |
| Ventas – Activación               |     | ✔️  |     |     |     |     |
| Finanzas – Activación             |     |     | ✔️  |     |     |     |
| Compras – Activación              |     |     |     | ✔️  |     |     |
| Security Model                    |     |     |     |     | ✔️  |     |
| Rollout to Business Users         |     |     |     |     |     | ✔️  |


### ¿Qué contiene cada modelo?

|  Tipo de contenido| escripciones | Cantidad  |
|-------------------|-------------------------------|---------------------------------------------------------|
| Datos Maestros / Dimensiones | Son las caracterización de los datos, nos permiten apertura los indicadores, algunos datos maestros pueden ser: cliente, producto.            | De acuerdo a los relacionados al proceso a modelar.     |
| Modelo de Datos​ | Es la información numérica del proceso, la cual cruzada con los elementos del punto anterior nos permitirán explicar y entender el proceso. | 1 |
| Consultas Athena | Permitirán construir diferentes consultas para la extracción y entendimiento de los datos.​ | 3 | 
| Reportes/Dashboards | Salidas de Información que permiten consultar los datos del modelo. | 1 de complejidad media, a definir durante la implementación.​ |


## Inversión

### Contenido Act·in | SAP S/4HANA analytics

| Concepto                               | 1 Módulo   | 2 Módulos  | 3 Módulos  | 4 o más Módulos |
|----------------------------------------|------------|------------|------------|-----------------|
| Suscripción Mensual                    | 3.845 USD  | 4.970 USD  | 6.495 USD  | 7.616 USD       |
| Horas Hombre Soporte / Mejora Incluidas| 24         | 40         | 64         | 80              |
| Licencias Tableau (viewer)             | 5          | 10         | 15         | 20              |
| Valor Hora Adicional                   | 45 USD     | 45 USD     | 45 USD     | 45 USD          |
| Formación                              | 16 horas de capacitación en Tableau - Máximo 8 participantes | | | |


*Notas*
- Este escenario de inversión asume que el cliente utiliza su propia cuenta de AWS para aprovisionar los servicios.​
- Valores expresados en dólares americanos, no contienen impuestos ni retenciones.​
- Propiedad Intelectual de SEIDOR Analytics, contrato de suscripción por 1 año de suscripción, con facturación mensual adelantada.​
- No se incluyen gastos de transporte, viaje o estadía.​
- La formación será impartida por única vez al momento de la contratación inicial, en caso de necesitarse más capacitación el cliente podrá contratarla.


### Contenido Act·in | SAP S/4HANA analytics

| Concepto                                | 1 Módulo   | 2 Módulos  | 3 Módulos  | 4 o más Módulos |
|-----------------------------------------|------------|------------|------------|-----------------|
| Suscripción Mensual                     | 3.845 USD  | 4.970 USD  | 6.495 USD  | 7.616 USD       |
| Suscripción Mensual Plataforma AWS      | 1.300 USD  | 1.500 USD  | 1.700 USD  | 2.000 USD       |
| Horas Hombre Soporte / Mejora Incluidas | 24         | 40         | 64         | 80              |
| Licencias Tableau (viewer)              | 5          | 10         | 15         | 20              |
| Valor Hora Adicional                    | 45 USD     | 45 USD     | 45 USD     | 45 USD          |
| Formación                               | 16 horas de capacitación en Tableau - Máximo 8 participantes | | | |


*Notas*
- Este escenario de inversión asume que el cliente no utiliza su propia cuenta de AWS para aprovisionar los servicios.​
- Valores expresados en dólares americanos, no contienen impuestos ni retenciones.​
- Propiedad Intelectual de SEIDOR Analytics, contrato de suscripción por 1 año de suscripción, con facturación mensual adelantada.​
- No se incluyen gastos de transporte, viaje o estadía.​
- La formación será impartida por única vez al momento de la contratación inicial, en caso de necesitarse más capacitación el cliente podrá contratarla.​