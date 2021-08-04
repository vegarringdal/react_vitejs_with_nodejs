FROM node:14-alpine
WORKDIR /usr/src/app

# copy files we need
COPY package*.json ./
COPY config_defaults.ts ./

# copy main folders
COPY backend backend
COPY common common
COPY frontend frontend

# make sure we have newest npm
RUN npm install -g npm

## install/build and expose/test run
RUN npm install
RUN npm run build
EXPOSE 1080
CMD [ "node", "./backend/dist/index.js" ]