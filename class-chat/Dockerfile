# Especificando la imagen base
FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Crear build de la app Next.js
RUN npm run build

# Asegurar que la build sea de produccion
ENV NODE_ENV production

# Puerto por defecto que usa React
EXPOSE 3000

CMD ["npm","start"]
