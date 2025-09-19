---
title: 'SAP installation & configuration'
sidebar_position: 2
iconName: "SAP"
useBrand: true
---
import Admonition from '@theme/Admonition';

## Transport orders required for crestone’s proper operation
These transport orders contain the packages necessary for the correct operation of Crestone. This is because Crestone internally executes custom RFCs.

## Import an SAP Transport Request
The following article shows how to import transport requests for custom functions modules.

### Upload SAP Transport Requests to SAP
If you have access to the file system of SAP, you can copy and paste the files of your transport request directly into the data and cofiles folders of your SAP system. If you don’t have access to the file system, follow the steps below to upload the files of your transport request using the SAP function module `ARCHIVFILE_CLIENT_TO_SERVER`:

1. Unzip the transport request provided by the Seidor Analytics team in the installation directory of your product.
2. Open SAP and go to transaction AL11.
3. Find the entry DIR_TRANS in the column Name of Directory Parameter. Note or copy the path shown in the column Directory.

<p align="center">
![a](/img/sapc/config/a.jpeg)
</p>

4. Go to SAP transaction SE37.
5. Enter name of function module ARCHIVFILE_CLIENT_TO_SERVER and click [Test/Execute].
6. In the field PATH you select your request file from from step 1. The name of the file starts with an “R”, e.g., `R900472`.
7. In the field TARGET PATH you construct your target path using the following pattern:
```
{copied path from step 2}\data\{request file name}.
```
8. Enable case-sensitivity and click [Execute]. When prompted, confirm the upload

<p align="center">
![a](/img/sapc/config/b.jpeg)
</p>

9. In the field PATH you select your cofile from from step 1. The name of the file starts with a “K”, e.g., `K900472`.
10. In the field TARGET PATH you construct your target path using the following pattern:
```
{copied path from step 2}\cofiles\{cofile name}.
```

11. Enable case-sensitivity and click [Execute]. When prompted, confirm the upload.

**The files are now available in SAP.**

<Admonition type="note">
Another method for uploading files to SAP is the SAP transaction CG3Z. This transaction is only available on ERP systems.
</Admonition>