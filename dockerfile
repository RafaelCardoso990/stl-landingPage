FROM node:18

WORKDIR /app

COPY . .

RUN npm i && npm run build || true

RUN mkdir -p /var/www/html

RUN mv build/* /var/www/html

WORKDIR /

RUN rm -rf /app
