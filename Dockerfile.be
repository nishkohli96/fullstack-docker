FROM node:17-alpine3.14 as phase1

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

RUN yarn server:prod

CMD ["node","./packages/server/dist/main.js"]