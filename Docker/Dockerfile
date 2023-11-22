# TO BE USED FOR DEVELOPMENT ONLY
# NEEDS TO BE UPDATED FOR PRODUCTION

FROM node:18.14

WORKDIR /app

RUN apt-get update && apt-get install -y inotify-tools rsync netcat

COPY package*.json tsconfig.json ./
COPY ./Scripts/startup.sh ./Scripts/startup.sh
RUN chmod +x ./Scripts/startup.sh
RUN chmod +x ./Scripts/build_cont.sh

RUN npm install 



EXPOSE 3000