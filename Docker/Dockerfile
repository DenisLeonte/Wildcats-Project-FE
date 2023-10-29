# TO BE USED FOR DEVELOPMENT ONLY
# NEEDS TO BE UPDATED FOR PRODUCTION

FROM node:18.14

WORKDIR /app

COPY package*.json tsconfig.json ./
COPY build ./build
COPY public ./public

RUN npm install 

EXPOSE 3000

CMD ["npm", "start"]