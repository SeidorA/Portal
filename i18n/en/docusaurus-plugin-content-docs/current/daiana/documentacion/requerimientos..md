---
title: Requerimientos técnicos
sidebar_position: 3
---

Asegurar una correcta implementación para su normal funcionamiento es esencial, especialmente por el trabajo realizado en cada proceso lleva adelante **la inteligencia artificial.** A continuación, te enumeramos los requerimientos mínimos necesarios para la etapa de implementación: 

## Máquina virtual en Azure o AWS | Tipos: 
- **Azure:** Familia de Proceso Optimizado (F-series) o Familia de Memoria Optimizada (Eseries). 
- **AWS:** Instancias de cómputo optimizado (C-series) o Instancias de memoria optimizada (R-series). 

## Tamaño:
- **Azure:** F-series - F16 o superior; (E-series) - E16, E20, y E32 o superior. 
- **AWS:** t3.xlarge o superior. 

## Sistema Operativo | Versión: 
- **Azure:** Ubuntu Server 22.04 LTS. 
- **AWS:** Ubuntu 22.04 o superior. 

## Apertura de los siguientes puertos: 

- **5432:** Servicio de base de datos PostgreSQL.
- **9000:** Servicio de hosting basado en contenedores para todos los servicios.
- **80, 81 y 443:** Nginx Proxy Maganer – Manejo de las URL públicas y redes internas.
- **8000:** Servicio web. Puerto de acceso a Daiana.
- **22:** Servicio de Secure Shell (SSH).

## Permisos de usuario: 
- Usuario con permisos de root al SO.