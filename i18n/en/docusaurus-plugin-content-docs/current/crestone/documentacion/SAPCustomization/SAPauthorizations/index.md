---
title: "Object authorization"
sidebar_position: 2
iconName: "SAP"
useBrand: true
---

## Object authorization

To use Crestone, you need an SAP connection user with the necessary authorization. Authorizations are assigned via authorization objects in SAP.

Please refer to this page to your SAP Basis administrators to obtain thecorresponding authorization objects for your SAP connection user.

The authorizations in the “General Authorization Objects” section are required to establish an SAP connection to the SAP application server.

The required authorizations for each component are detailed in its corresponding section.

Crestone collected and combined the required authorizations for all components into SAP roles. You can download the SAP profiles and upload them to your SAP system:

## Supported
The following authorization objects are required to establish a connection to SAP.

```
S_RFC  RFC_TYPE=FUGR; RFC_NAME=SYST; ACTVT=16
S_RFC  RFC_TYPE=FUGR; RFC_NAME=SRFC; ACTVT=16
S_RFC  RFC_TYPE=FUGR; RFC_NAME=RFC1; ACTVT=16

```
<a href="/configsap/ZXREPORT.SAP" class="button button--primary" download> Download SAP profile for general authorization </a>



