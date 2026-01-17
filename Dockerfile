# Usa una imagen base de Node.js compatible con la versión requerida (>=18.20.8)
FROM node:18-alpine AS base

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala todas las dependencias (incluyendo devDependencies para el build)
RUN npm ci

# Copia el código fuente
COPY . .

# Construye la aplicación
RUN npm run build

# Etapa de producción: usa Nginx para servir archivos estáticos
FROM nginx:alpine AS production

# Copia los archivos construidos al directorio de Nginx
COPY --from=base /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando por defecto de Nginx
CMD ["nginx", "-g", "daemon off;"]
