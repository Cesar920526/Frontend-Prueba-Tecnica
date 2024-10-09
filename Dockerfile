# Usa una imagen de Nginx para servir los archivos estáticos
FROM nginx:alpine

# Copia los archivos del frontend a la carpeta que usa Nginx para servir el contenido
COPY . /usr/share/nginx/html
