# Especificando la imagen base
FROM node:18

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# # Crear build de la app Next.js
# RUN npm run build

# # Asegurar que la build sea de produccion
# ENV NODE_ENV production
# ENV NEXT_PUBLIC_SUPABASE_URL https://ofouyycoclzmipiqgfpv.supabase.co

# # Puerto por defecto que usa React
# EXPOSE 3000

# CMD ["npm","start"]

WORKDIR /app

COPY package*.json ./
RUN npm install -D

COPY . .

EXPOSE 3000

CMD ["npm","start"]
