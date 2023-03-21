FROM node:14-alpine
WORKDIR /usr/app
COPY ./package.json ./package.json
COPY ./index.js ./index.js
RUN npm install
CMD ["npm", "start"]
