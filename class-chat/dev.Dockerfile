FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install -D

COPY . .

RUN npm run dev

EXPOSE 3000

CMD ["npm","start"]