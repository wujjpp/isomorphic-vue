FROM node:6.10.2-alpine

# Copy application files
COPY ./build /usr/local/app/
WORKDIR /usr/local/app/

RUN npm install && npm cache clean

CMD ["node", "server.js" ]
