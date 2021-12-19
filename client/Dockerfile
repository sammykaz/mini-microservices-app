FROM node:16.13.1-alpine

ENV CI=true

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

RUN echo "NODE Version:" && node --version
RUN echo "NPM Version:" && npm --version

CMD ["npm", "start"]