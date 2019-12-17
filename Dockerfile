FROM node:carbon AS builder

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

COPY --from=builder ${WORKING_DIR} ${WORKING_DIR}

ENTRYPOINT ["npm", "start"]
