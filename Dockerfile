FROM node:0.12.17
CMD node app.js
COPY package.json .
RUN npm install
ADD app.js .
