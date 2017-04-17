FROM node:7.7-alpine

MAINTAINER Gerson Pardo Gamez <jeral17@gmail.com>

WORKDIR /www

RUN apk add --no-cache git 

ENTRYPOINT ["node"]
