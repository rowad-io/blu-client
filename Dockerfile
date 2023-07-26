FROM node:18-alpine AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest AS ngi

COPY --from=build app/dist/blu /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80
