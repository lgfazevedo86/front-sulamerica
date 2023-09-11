FROM node:16.19 as build

WORKDIR /usr/local/app

RUN npm install -g @angular/cli

COPY . /usr/local/app/

RUN npm install

RUN ng build

FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY --from=build /usr/local/app/dist/sulamerica-app /usr/share/nginx/html
COPY ./nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
