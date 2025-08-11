---
title: Instalacion
sidebar_position: 4
hide_table_of_contents: true
---

1. Ingresar a EC2 y luego click en **Launch instance from template.**
![supabase](/img/documentos/instalacion/a.jpeg)

2. Seleccionar la plantilla de nombre DaianaTemplate.
![supabase](/img/documentos/instalacion/b.jpeg)

3. En el campo **Number of instances** dejar el valor 1 y luego click en Launch instance.
![supabase](/img/documentos/instalacion/c.jpeg)

4. Confirmar que la instancia se crea correctamente (mensaje de Success)
![supabase](/img/documentos/instalacion/d.jpeg)

5. Click en **EC2 Dashboard**, luego en Instances (running) y buscar la instancia de nombre DAIANA TEMPLATE. Renombrarla por **DAIANA DEMO**.
![supabase](/img/documentos/instalacion/e.jpeg)

6. En este momento la instancia ya está corriendo, pero tiene asignada una IP pública dinámica. Esto significa que cada vez que se reinicie la instancia, se le va a asignar una nueva IP. Para cambiar esto debemos asignar a la instancia una IP pública estática. Para ellos nos vamos a la opción Elastic IPs del menú de la izquierda.
![supabase](/img/documentos/instalacion/f.jpeg)

7. Seleccionar una IP que no tenga instancia asociada y luego click en **Actions > Associate Elastic IP address.**
![supabase](/img/documentos/instalacion/g.jpeg)

8. En el campo Instance seleccionar la instancia recientemente creada y en **Private IP address** selecciona la IP Privada (debería estar disponible solo una). Luego click en Associate.
![supabase](/img/documentos/instalacion/H.jpeg)

9. La IP Pública estática se asignó correctamente.
![supabase](/img/documentos/instalacion/i.jpeg)

10. Crear tres entradas en el DNS de **tipo A** que apunten a la IP asociada en el paso anterior. Se muestra la configuración desde **GoDaddy**.
![supabase](/img/documentos/instalacion/j.jpeg)

11. Ir a EC2, seleccionar la instancia creada y click en Connect. Seguir los pasos indicados en la opción SSH client para conectarse a la instancia. Debe usar un cliente de SSH
![supabase](/img/documentos/instalacion/k.jpeg)

12. Comenzaremos con la instalación de Portainer. Ejecutar el siguiente comando: ```sudo apt-get update```
![supabase](/img/documentos/instalacion/l.jpeg)


13. Ejecutar el siguiente comando: ```sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release```
![supabase](/img/documentos/instalacion/m.jpeg)


1.  Ejecutar el siguiente comando: ```curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg```
![supabase](/img/documentos/instalacion/n.jpeg)

15. Ejecutar el siguiente comando: ```echo \ "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \ $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/nu```
![supabase](/img/documentos/instalacion/o.jpeg)

16. Ejecutar el siguiente comando: ```sudo apt-get update```
![supabase](/img/documentos/instalacion/p.jpeg)


17. Ejecutar el siguiente comando: ```sudo apt-get install docker-ce docker-ce-cli containerd.io```
![supabase](/img/documentos/instalacion/q.jpeg)

18. Ejecutar el siguiente commando (rebootea el servidor): ```sudo reboot```
![supabase](/img/documentos/instalacion/r.jpeg)

19. Volver a conectarse al servidor y ejecutar el siguiente comando:
![supabase](/img/documentos/instalacion/s.jpeg)

20. Ejecutar el siguiente comando: ```sudo systemctl start docker```
![supabase](/img/documentos/instalacion/t.jpeg)

21. Ejecutar el siguiente comando: ```sudo systemctl enable docker```
![supabase](/img/documentos/instalacion/v.jpeg)

22. Ejecutar el siguiente comando: 
```
sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```
![supabase](/img/documentos/instalacion/x.jpeg)

23. Ejecutar el siguiente comando: ```sudo chmod +x /usr/local/bin/docker-compose```
![supabase](/img/documentos/instalacion/y.jpeg)

24. Ejecutar el siguiente comando: ```sudo docker volume create portainer_data```
![supabase](/img/documentos/instalacion/z.jpeg)

25. Ejecutar el siguiente comando: ```sudo docker run -d -p 9000:9000 -p 8000:8000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v /srv/portainer:/data portainer/portainer-ce```
![supabase](/img/documentos/instalacion/a2.jpeg)

26. Ejecutar el siguiente comando: ```sudo docker ps -a```
![supabase](/img/documentos/instalacion/b2.jpeg)

27. Portainer se ejecuta en el puerto 9000. Navegue por la dirección IP de su servidor con el puerto 9000 en el navegador y cree un usuario. Establezca el nombre y contraseña del usuario administrador del Portainer.
![supabase](/img/documentos/instalacion/c2.jpeg)

28. Una vez creado el usuario se accede al dashboard de Portainer.
![supabase](/img/documentos/instalacion/d2.jpeg)

29. Click en **Get Started** y seleccionar el environment Local.
![supabase](/img/documentos/instalacion/e2.jpeg)

30. Ahora vamos a instalar **Supabase** en el servidor. Primero debemos loguearnos al servidor y ejecutar el siguiente comando:  ```sudo su```
![supabase](/img/documentos/instalacion/f2.jpeg)

31. Debemos crear la siguiente estructura de carpetas. Utilizaremos los comandos mkdir para crear las carpetas y cd para movernos entre carpetas:
```
/containers 
    /supabase
        /volumes
            /logs
            /api
            /db
            /functions
            /storage
```

![supabase](/img/documentos/instalacion/g2.jpeg)

32. Dentro de la carpeta **logs** ejecutar el siguiente comando para descargar el archivo **vector.yml** ```wget https://raw.githubusercontent.com/supabase/supabase/54e0fcc7195c337492ea080a1a1e589de109e6f7/docker/volumes/logs/vector.yml```
![supabase](/img/documentos/instalacion/h2.jpeg)

33. Dentro de la carpeta **api** ejecutar el siguiente comando para descargar el archivo **kong.yml** ```wget https://raw.githubusercontent.com/supabase/supabase/5458fa4f32247edbe57d0dbaa80a180afa1809cc/docker/volumes/api/kong.yml```
![supabase](/img/documentos/instalacion/i2.jpeg)


34. Dentro de la carpeta db ejecutar los siguientes comandos para descargar los archivos jwt.yml, logs.sql, realtime.sql, roles.sql, webhooks.sql.

```
wget https://raw.githubusercontent.com/supabase/supabase/5458fa4f32247edbe57d0dbaa80a180afa1809cc/docker/volumes/db/jwt.sql

wget https://raw.githubusercontent.com/supabase/supabase/5458fa4f32247edbe57d0dbaa80a180afa1809cc/docker/volumes/db/logs.sql

wget https://raw.githubusercontent.com/supabase/supabase/5458fa4f32247edbe57d0dbaa80a180afa1809cc/docker/volumes/db/realtime.sql

wget https://raw.githubusercontent.com/supabase/supabase/5458fa4f32247edbe57d0dbaa80a180afa1809cc/docker/volumes/db/roles.sql 

wget https://raw.githubusercontent.com/supabase/supabase/5458fa4f32247edbe57d0dbaa80a180afa1809cc/docker/volumes/db/webhooks.sql

```

![supabase](/img/documentos/instalacion/j2.jpeg)

35. Ingresar a **Portainer**, ir al menú **Stacks** y luego click en **Add stack**. Asignar un nombre al stack.
![supabase](/img/documentos/instalacion/k2.jpeg)


36. Crear el **stack** de supabase utilizando los archivos **.env.base y supabase.docker-compose.yml.** Hacer las adaptaciones necesarias al archivo .env.base en función de la instalación. Los archivos están alojado en el repositorio de Github de Daiana en la carpeta compose.
![supabase](/img/documentos/instalacion/l2.jpeg)

37. Crear el stack de **daiana** utilizando el archivo **daianabase.docker-compose.yml.** Hacer las adaptaciones necesarias al archivo en función de la instalación
![supabase](/img/documentos/instalacion/m2.jpeg)

38. Conectarse a la base de datos desde la consola de **supabase**. Ir al **menú Database > Extensions y habilitar** la extensión vector en el schema public.
![supabase](/img/documentos/instalacion/n2.jpeg)

39. Conectarse a la base de datos desde la consola de **supabase** y correr el comando G**RANT supabase_admin TO postgres.**
40. Conectarse a la base de datos y correr el script **DAIANABASE20240415.sql.**
41. Crear las entradas en el nginx proxy.
![supabase](/img/documentos/instalacion/o2.jpeg)
