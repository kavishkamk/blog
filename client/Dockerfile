FROM node:16.17.1-alpine

# for reslove react bugs in container
ENV CI=true
ENV WDS_SOCKET_PORT=0

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]