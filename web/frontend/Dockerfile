FROM node:13-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -g @vue/cli; \
    npm install

EXPOSE 3000
CMD [ "npm","run", "serve"]