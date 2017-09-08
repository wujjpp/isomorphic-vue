FROM git.qixin007.com:5009/docker/node:6.11.2.5

# Copy application files
COPY ./build /usr/local/app/
WORKDIR /usr/local/app/

RUN npm install && npm cache clean

CMD ["node", "server.js" ]
