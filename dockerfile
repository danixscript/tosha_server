FROM node:17-alpine
WORKDIR /server

COPY package*.json .

RUN npm install
COPY . .
EXPOSE 3030

CMD ["npm", "run", "start"] 