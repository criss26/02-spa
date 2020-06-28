# Multi stage build

#stage 1
FROM node AS my-app-build
COPY . /app
RUN cd /app && npm install && npm run build

#stage 2
FROM nginx:alpine
COPY --from=my-app-build /app/dist/spa /usr/share/nginx/html
EXPOSE 80
