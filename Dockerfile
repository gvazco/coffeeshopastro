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

# Etapa de producción: imagen más ligera
FROM node:18-alpine AS production

# Establece el directorio de trabajo
WORKDIR /app

# Copia las dependencias de producción desde la etapa base
COPY --from=base /app/package*.json ./
COPY --from=base /app/node_modules ./node_modules

# Copia los archivos construidos
COPY --from=base /app/dist ./dist

# Expone el puerto (por defecto 4321 en Astro SSR)
EXPOSE 4321

# Comando para ejecutar la aplicación
CMD ["npm", "start"]