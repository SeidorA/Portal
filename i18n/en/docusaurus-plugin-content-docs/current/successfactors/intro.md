---
sidebar_label: "Success Factors​"
title: Success Factors​
sidebar_position: 1
iconName: "SAP"
useBrand: true
pdfDoc: 'https://seidoranalytics-my.sharepoint.com/:p:/g/personal/admin_seidoranalytics_onmicrosoft_com/Edhd58uDtvVLu10mEGEn0WABrh8Dr455bTgT2nQxgj2aJw?e=c4IkHi'
---

### What is Act-In for Success Factors?​

**Deep and Extended Analysis**

Act-in | Successfactors Analytics (Act-in SFSF) is a **"Plug and Play"** analytics **solution** that helps HR managers **better understand their business and address challenges** to improve company performance.​

In an era of rapid transformation, employees need to constantly develop new skills, organizations are constantly redesigning themselves to adapt to new business models, and attracting new talent is key to driving success.​

More than ever, the **HR department needs advanced analytical solutions to save time**: it's better to invest in value creation than in tedious administrative tasks.

It provides analysis and insights from the human resources data contained in your SAP SuccessFactors system for more effective decision making.​

It tracks critical human resources performance indicators, including:

- Workforce evolution over time​
- Performance and hiring​
- Historical/total compensation distribution and benchmarking​
- Impact on learning, development, ROI and adoption​
- Employee professional growth and engagement trends...​
- And more

### Why did we develop Act-in SFSF?

<div class="superdic">
<div class="arrrowDown">

#### Challenge
Difficulties in analyzing SAP SuccessFactors information, due to lack of data structure:

- Replication of complex transactional models​
- Lack of historical data view​
- Non-inheritable permissions and security

</div>

![Act-in SFSF development](/img/success/des.png)

<div class="arrrowUP">

#### Our Solution​
Actin | SuccessFactors Analytics, is a solution developed by SEIDOR Analytics, that bridges SAP SuccessFactors and SAP Analytics cloud. It improves:

- Easy access and visualization of all HR data​
- Analyze historical data to identify trends​
- Expandable to integrate with other systems related to corporate performance indicators
</div>

</div>


## Scope
**Strategic and Tactical Dashboards​**

A collection of analytical stories that provide multiple levels of analysis:​

- Easy access and visualization of all human resources data in a simple but flexible user interface​
- Analyzes human resources metrics and relevant performance indicators​
- Analyzes historical data to identify trends​
- Accesses more granular data for in-depth analysis and useful insights​
- Expandable to integrate with non-HR data from ERP and other systems for corporate performance indicators


### Act-In Success Factors Technical Scope
The Act-In SFSF content by module is summarized below:​


#### Employee Central

| Content Type     | Quantity                          |
| --------------- | --------------------------------- |
| Category        | 4 categories / 14 subcategories   |
| Measures        | 49 measures                       |
| Dimensions      | 30 dimensions                     |
| Reports/Boards  | 1                                 |


#### Recruitment

| Content Type     | Quantity        |
| --------------- | --------------- |
| Category        | 4 categories    |
| Measures        | 7 measures      |
| Dimensions      | 10 dimensions   |
| Reports/Boards  | 1               |


#### Performance & Goals

| Content Type     | Quantity        |
| --------------- | --------------- |
| Category        | 4 categories    |
| Measures        | 7 measures      |
| Dimensions      | 10 dimensions   |
| Reports/Boards  | 1               |


#### Learning Management

| Content Type     | Quantity        |
| --------------- | --------------- |
| Category        | 4 categories    |
| Measures        | 7 measures      |
| Dimensions      | 10 dimensions   |
| Reports/Boards  | 1               |

### Employee Central​

| Category                      | Subcategory                                                                                                                                                                                                    | Indicators | Dimensions |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| **Employee Master Data**     | - Count: by gender, age group, nationality<br /> - Turnover <br /> - Separations <br /> - New Recruitment <br /> - Nationalization and diversity <br /> - Employees and managers ratio <br /> - Promotions and transfers | 49         | 30         |
| **Time Management**          | - Holiday accrual: accrual vs consumption <br /> - Absenteeism and attendance <br /> - Extra hours <br /> - Lost time injuries                                                                                        |            |            |
| **Compensation**             | - Payment: basic, bonus, allowances<br /> - Expenses                                                                                                                                                           |            |            |
| **Claims (employee relations)** | - Claims: internal / external, resolutions, types                                                                                                                                                            |            |            |


### Recruitment​

| Category    | Subcategory                                                                                                    | Indicators | Dimensions |
| ----------- | --------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| Recruitment | - Recruitment requisitions <br /> - Recruitment requests <br /> - Recruitment Expenses <br /> - Recruitment Campaigns | 7          | 10         |


### Performance & Goals


| Category           | Subcategory                                                                                                                            | Indicators | Dimensions |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| Performance & Goals | - Results sphere and general objectives <br /> - Career and Development <br /> - Professional performance management <br /> - Goal management | 15         | 10         |


### Learning

| Category           | Subcategory                                                                                    | Indicators | Dimensions |
| ----------------- | ----------------------------------------------------------------------------------------------- | ---------- | ---------- |
| Performance & Goals | - Training and courses content <br /> - Utilization <br /> - Reflection on learning and development | 7          | 9          |


## Architecture 

<div class="row">
<div class="col col--5">

### Lite

**Requirements**
- SuccessFactors **API User** with read permissions​
- **SAP HANA Cloud subscription** to SAP Datawarehouse cloud platform, minimum 45 GB​
- **OData version 2** (with default DWC SSFS connector)​
- **SAP Analytics Cloud for BI (SAC):** SAC platform subscription, minimum 25 users
  
</div>

<div class="col col--7">

![Act-in SFSF development](/img/success/ArquitecturaA.png)
</div>
</div>



<div class="row">
<div class="col col--5">

### Enterprise
**Requirements**
- SuccessFactors **API User** with read permissions​
- **SAP DataWarehouse Cloud (DWC) subscription** to SAP Datawarehouse cloud platform, 256 GB minimum​
- **OData version 2** (with default DWC SSFS connector)​
- **SAP Analytics Cloud for BI (SAC):** SAC platform subscription, minimum 25 users
</div>

<div class="col col--7">

![Act-in SFSF development](/img/success/ArquitecturaB.png)
</div>
</div>


