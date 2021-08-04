FROM node:14-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY backend backend
COPY common common
COPY frontend frontend
RUN npm install -g npm
RUN npm install
RUN npm run build
EXPOSE 1080
CMD [ "node", "./backend/dist/index.js" ]