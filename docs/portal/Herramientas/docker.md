---
title: Docker
sidebar_label: Docker
sidebar_position: 4
---

Son requeridos los siguientes archivos en la raíz del proyecto para su correcto funcionamiento: 

- docker-compose.yml
- dockerfile.ylm
- nginx.conf

Estos archivos, sumados a las automatizaciones de GitHub Actions realizan las imágenes a docker hub.


Es importante revisar siempre que en el archivo docker-compose la imagen diga portal:

```yaml
image: cloudseidoranalytics/portal:{SHA}
```

Siempre que se haga un commit en la rama main, se ejecutara el workflow de github actions que creara la imagen y la subira a docker hub.


