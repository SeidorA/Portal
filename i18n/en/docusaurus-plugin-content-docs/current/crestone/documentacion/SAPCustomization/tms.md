---
title: 'Import SAP Transport Requests'
sidebar_position: 2
iconName: "SAP"
useBrand: true
---

## Set up 
Follow the steps below to add the transport requests to the import queue and
import them:
1. Go to SAP transaction STMS to open the transport management system.
2. Click [Import Overview] ( icon).

<p align="center">
![a](/img/sapc/tms/a.jpeg)
</p>

3. Double click on the import queue in which you want to load the transport
request into

<p align="center">
![a](/img/sapc/tms/b.jpeg)
</p>

4. Open the transport request selection dialog via More > Extras > Other Requests > Add.
5. Select the transport request and confirm. If prompted, confirm the import.

<p align="center">
![a](/img/sapc/tms/c.jpeg)
</p>


6. Select your transport request from the list and click [Import Request] (icon). The window “Import Transport Request” opens.
7. Enter the target client. If the version of the SAP system where the transport request was created differs from your SAP system version, select the option Ignore Invalid Component Version

<p align="center">
![a](/img/sapc/tms/d.jpeg)
</p>

8. Confirm your settings.


### The transport request is imported.
Check the Status of Transport Requests
The import overview of the transport management system (transaction STMS) lists all transport requests.
The status of the transport requests is displayed in the column “RC”. A green bar indicates that the import was successful. In case of warnings or errors, double click on the icon to view the error messages.

<p align="center">
![a](/img/sapc/tms/e.jpeg)
</p>