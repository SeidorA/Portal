FROM nginx:alpine
 
# Limpiar contenido default de Nginx
RUN rm -rf /usr/share/nginx/html/*
 
# Copiar el build de Docusaurus
COPY build/ /usr/share/nginx/html
 
# Exponer puerto interno
EXPOSE 80
 
# Correr Nginx en modo foreground
CMD ["nginx", "-g", "daemon off;"]