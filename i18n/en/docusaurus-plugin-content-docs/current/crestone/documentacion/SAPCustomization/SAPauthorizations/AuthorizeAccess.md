---
title: "Authorize Access"
sidebar_position: 3
iconName: "SAP"
useBrand: true
---

The following article shows how to set up access to reports by assigning authorization groups to reports.
Access is then granted through the S_PROGRAM authorization object, see: [SAP Note](https://launchpad.support.sap.com/#/notes/338177)

Set Up Access to Specific Reports

1. Set Up Access to Specific Reports Log into SAP and use transaction code SE38 to open the ABAP Edito
1. Enter the name of the report you want to access and select Attributes as the Subobjects.
1. Click [Change]. A window that contains the program attributes opens.
1. Assign an authorization group.

<p align="center">
![a](/img/sapc/c.jpeg)
</p>

5. Edit or create a user role you want to grant access to (transaction code PFCG).
6. Manually assign the authorization object S_PROGRAM to the user role
<p align="center">
![a](/img/sapc/d.jpeg)
</p>

7. Select the actions SUBMIT and `BTCSUBMIT` in the S_PROGRAM object field P_ACTION.
8. Assign the same authorization group that is assigned to the report to the `S_PROGRAM object field P_GROUP.`
9. Save and generate the authorization.
10. Assign the user role to users.