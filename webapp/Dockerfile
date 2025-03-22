FROM node:lts-alpine

WORKDIR .
COPY package*. .
RUN npm i

COPY . .
RUN npm run build
CMD npm run start