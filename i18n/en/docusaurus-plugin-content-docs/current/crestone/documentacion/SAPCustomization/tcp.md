---
title: 'TCP/IP CONFIGURATION and ACL FILES'
sidebar_position: 4
iconName: "SAP"
useBrand: true
---
## Set up

Why is this configuration required?
SAP needs to define communication destinations that allow integration with external systems, such as our microservice Crestone, developed in Java and using SAP JCo. The TCP/IP Destination configuration in transaction SM59 is essential because:

- SAP cannot communicate with external applications without an explicit target definition.
- Allows Crestone Microservice to register with SAP as a valid point of communication.
- Establishes a secure and authenticated channel for the execution of RFC (Remote Function Call) functions.

SAP requires the implementation of access control files (ACL) that regulate which programs can register and run in SAP Gateway, that is why we must configure the RegInfo and SecInfo files to enable the registration of the CRESTONE_SERVER programID.

The configuration of TCP/IP Destination in SAP together with the correct management of the access control files (Reginfo and Secinfo) in SAP Gateway is essential for

<p align="center">
![a](/img/sapc/tcp.jpeg)
</p>


### How to configure it?
1. Access the SM59 transaction.
2. Create a new TCP/IP type connection.
3. In the ‘Destination name’ field, enter: CRESTONE_SERVER.
<p align="center">
![a](/img/sapc/tcpa.jpeg)
</p>


4. Select the ‘Connection Type’ as TCP/IP.
5. Set the gateway host and TCP service to sapgw00.

<p align="center">
![a](/img/sapc/tcpb.jpeg)
</p>
