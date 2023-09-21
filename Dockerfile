FROM node:20-alpine3.17 as builder

WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

#NGINX for server
FROM nginx:alpine
COPY --from=builder app/dist/back-yard-emissions /usr/share/nginx/html/
EXPOSE 4200
