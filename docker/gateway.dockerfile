FROM node:9.4.0-alpine

ARG YARN_VERSION=1.2.1
RUN npm install -g "yarn@${YARN_VERSION}"

RUN apk update \
    && apk upgrade \
    && apk add --no-cache git bash python make g++

COPY . /usr/src/app/

WORKDIR /usr/src/app/gateway
RUN yarn install --frozen-lockfile \
    && yarn check --integrity \
    && yarn cache clean

RUN yarn build

WORKDIR /usr/src/app/
RUN yarn install --frozen-lockfile \
    && yarn check --integrity \
    && yarn cache clean

CMD ["bash", "docker/run_server.sh"]
