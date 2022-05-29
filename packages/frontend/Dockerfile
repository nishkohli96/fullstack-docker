# Base Image
FROM node:17-alpine3.14 as phase1

WORKDIR /app

# To prevent the "command tsc not found" issue
RUN npm i -g typescript

# Run yarn only if package.json changes
COPY package.json .
RUN npm install
COPY . .

# Phase 1 - Build our app
RUN yarn shared-ui:build
RUN yarn build

# Phase 2 - Get the Build and host on nginx
FROM nginx:1.21.6-alpine
COPY --from=phase1 /app/packages/frontend/build /usr/share/nginx/html
