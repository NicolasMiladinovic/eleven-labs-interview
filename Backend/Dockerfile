FROM node:16

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY . .

EXPOSE 1234

CMD ["npm", "start"]