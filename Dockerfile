FROM node:18.15.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve Application using Nginx Server
FROM nginx:alpine-slim
COPY --from=build /app/dist/bio-beacon-app/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
