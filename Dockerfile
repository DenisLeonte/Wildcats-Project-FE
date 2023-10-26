FROM node:20-alpine as builder
WORKDIR /Wildcats-Project-FE
COPY public/ /Wildcats-Project-FE/public
COPY package.json /Wildcats-Project-FE/
RUN npm install
CMD ["npm","start"]