FROM node:8.4

# Copy application files
COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock
WORKDIR /usr/src/app

# Install Yarn and Node.js dependencies
RUN rm -rf node_modules &&  npm install --production
COPY ./ /usr/src/app

EXPOSE 3000

CMD [ "npm", "run", "start" ]
