FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY server.js ./
COPY package.json ./
COPY public ./public

RUN mkdir -p data

EXPOSE 4040

CMD ["npm", "start"]