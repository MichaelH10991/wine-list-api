FROM node as node

WORKDIR /usr/src/wine-list-api

COPY index.js .
COPY config.js config.js
COPY api/ api
COPY package.json .
COPY node_modules node_modules

CMD ["npm", "start"]