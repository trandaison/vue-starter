FROM node:12.22.1

ENV APP_ROOT /nuxt

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN yarn install
RUN yarn build

ENV HOST 0.0.0.0
