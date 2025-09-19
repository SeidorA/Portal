---
title: "Table authorization"
sidebar_position: 3
iconName: "SAP"
useBrand: true
---

Necessary SAP authorizations

```
S_RFC    ACTVT=16;
RFC_TYPE=FUGR;
RFC_NAME=SDTX, SDIFRUNTIME,Z_CRESTONE, Z_CRESTONE_READ_TABLE
S_TABU_DIS      ACTVT=03;
DICBERCLS=XXXX
S_TABU_NAM      ACTVT=03;
TABLE=DD02V, DD17S, DD27S, ENLFDIR S_DSAUTH     ACTVT=16;
```

XXXX (stands for a placeholder) is the authorization group for the table. 

To determine, which authorization group belongs to which table, check the table TDDAT - Maintenance Areas for Tables. If the table is not listed, the authorization group is &NC&. For authorizing specific tables use authorization object S_TABU_NAM instead of S_TABU_DIS.