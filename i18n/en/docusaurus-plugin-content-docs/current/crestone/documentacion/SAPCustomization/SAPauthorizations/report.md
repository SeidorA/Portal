---
title: "Report authorization"
sidebar_position: 1
iconName: "SAP"
useBrand: true
---


## Report
Necessary SAP authorizations


```
S_RFC RFC_TYPE=FUGR; RFC_NAME=ZXTRACTABAP; ACTVT=16
S_TABU_NAM ACTVT=03; TABLE=TRDIR, TRDIRT, TSTC, VARID
S_GUI ACTVT=61
S_TABU_DIS ACTVT=03; DICBERCLS=&NC&
S_TABU_DIS ACTVT=03; DICBERCLS=SS
S_BTCH_ADM BTCADMIN=Y
S_BTCH_JOB JOBGROUP=*; JOBACTION=RELE
```
<a href="https://helpcenter.theobald-software.com/xtract-is/assets/files/sap_roles/ZXREPORT.SAP" class="button button--primary" download> Download SAP profile for Report </a>

## Download SAP profile for Report
To execute a report with Crestone, the SAP connection user needs explicit authorization to execute the report. Authorization can be granted using one of the following methods:
- Assign the authorization object Z_TS_PROG
- Assign an authorization group

## Create the Custom Authorization Object Z_TS_PROG

The following article shows how to create the Z_TS_PROG authorization object for the custom function module Z_CRES_IS_REMOTE_REPORT.

Crestone Software custom function module **Z_CRES_IS_REMOTE_REPORT** enables the extractions of reports from SAP systems. If no authorization group is assigned to a report, Z_CRES_IS_REMOTE_REPORT uses a custom authorization object Z_TS_PROG to verify whether the SAP user is allowed to extract a report. 

The access to reports is granted based on the name of the report.
Create the Custom Authorization Object Z_TS_PROG

1. Use transaction **SU21** to create a new authorization object.
2. Expand the Create menu and click [Authorization Object]. The window “Create Authorization Object” opens.
<p align="center">
![a](/img/sapc/a.jpeg)
</p>

3. Enter the following values:
```
Object: Z_TS_PROG
```

<p align="center">
![a](/img/sapc/b.jpeg)
</p>

4. Click [Continue] to enable editing of the section Authorization fields.
5. Manually enter S_NAME as the first entry in Authorization fields.
6. Click [Save] to save the authorization object.