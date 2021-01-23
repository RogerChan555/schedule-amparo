FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

CMD ["npm", "start"]