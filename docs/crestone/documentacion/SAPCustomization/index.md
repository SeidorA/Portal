---
sidebar_position: 1
iconName: "SAP"
useBrand: true
title: "SAP Customization"
---



<div class="row">
  <div class="col col--9">
  This page covers installation and configuration issues in an SAP environment for the correct integration and operation of CRESTONE.
  </div>  
  <div class="col col--3">
    <a href="/pdf/Crestone.pdf" class="button button--primary" download>
      <span>Download PDF guide</span>
    </a>
  </div>
</div>

## Requirements
### SAP System Types
The following SAP Systems are supported:
- All SAP ABAP based systems that provide RFC connectivity are supported (all communication with SAP is performed via the RFC protocol).
- SAP ABAP Systems on any database are supported (including HANA). The database used by the SAP system is irrelevant, because the integration occurs at SAP application server level.
- SAP Releases 4.6C and newer are supported.
- All operating systems are supported.
### Unsupported
- SAP systems that do not run **ABAP.**
- SAP systems without **RFC connectivity.**
### Required Ports

| SAP NetWeaver component | Port |
|----------|----------|
| SAP Application Server | ```33<NN>``` |
| Message Server | ```36<NN>``` |
| Secure Network Communication (SNC) | ```48<NN>``` |
| SAP-Router | ```3299``` |
