FROM node:10.19.0-alpine3.11
ADD ./ /source
WORKDIR /source
RUN ["yarn", "install"]
ENTRYPOINT [ "yarn", "start" ]
EXPOSE 3000