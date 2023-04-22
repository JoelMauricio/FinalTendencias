# Especificando la imagen base
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install -D

COPY . .

# Asegurar que la build sea de produccion
ENV NODE_ENV production

# Crear build de la app Next.js
RUN npm run build

# Puerto por defecto que usa React
EXPOSE 3000

CMD ["npm","start"]

