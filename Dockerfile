FROM node:9.6.1-alpine

RUN yarn global add nodemon

WORKDIR /app/auth-service

# Bundle app
COPY src src/
COPY package.json .
COPY yarn.lock .

# Install app dependencies
RUN yarn install --production

CMD ["yarn", "run", "start:dev"]