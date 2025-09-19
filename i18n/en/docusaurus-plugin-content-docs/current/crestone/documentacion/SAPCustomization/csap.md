---
title: 'Configuration in SAP'
sidebar_position: 5
iconName: "SAP"
useBrand: true
---
## Connection Creation TCP/IP
To enable communication between SAP and the crestone, a TCP/IP connection must be configured in SAP using transaction SM59.


### How to configure it?
1. Access the SM59 transaction.
2. Create a new TCP/IP type connection.
3. In the ‘Destination name’ field, enter: CRESTONE_SERVER.

<p align="center">
![a](/img/sapc/csas/a.jpeg)
</p>

4. Select the ‘Connection Type’ as TCP/IP.
5. Set the gateway host and TCP service to sapgw00.

<p align="center">
![a](/img/sapc/csas/b.jpeg)
</p>

### Security Configuration in SAP Gateway

To enable the CRESTONE_SERVER program to communicate with SAP, it is necessary to configure access in SAP Gateway using transaction SMGW.
1. Access the SMGW transaction.
<p align="center">
![a](/img/sapc/csas/b.jpeg)
</p>

2. Go to -> Expert Functions -> External Security -> Maintain ACL Files.
<p align="center">
![a](/img/sapc/csas/c.jpeg)
</p>
<p align="center">
![a](/img/sapc/csas/c2.jpeg)
</p>

3. Add the standard in secinfo file and define the following parameters:
<p align="center">
![a](/img/sapc/csas/g.jpeg)
</p>

4. Add the other standard in Reginfo file
<p align="center">
![a](/img/sapc/csas/h.jpeg)
</p>
