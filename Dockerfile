FROM node:carbon-slim AS builder

LABEL maintainer="github.com/wombolo"

ENV WORKING_DIR=/usr/app/src/

WORKDIR ${WORKING_DIR}

COPY package*.json ${WORKING_DIR}

RUN npm install

COPY . ${WORKING_DIR}

RUN npm run-script build

FROM node:carbon-slim AS runner

ENV WORKING_DIR=/usr/app/src/

WORKDIR ${WORKING_DIR}

COPY package*.json ${WORKING_DIR}

COPY --from=builder ${WORKING_DIR}build/ ${WORKING_DIR}build/

RUN npm install -g serve

ENTRYPOINT ["npm"]

