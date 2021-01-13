# docker_project_2

- Its an express app which will count the number of visitors visited via redis
- DockerFile and docker-compose file are added too..

### DockerFile

```
FROM node:alpine

WORKDIR /usr/app

COPY package.json ./
RUN npm install

COPY . .

CMD [ "npm", "start" ]

```

### docker-compose.yml

```
version: "3"

services:
  webapp :
    build: .
    ports:
    - "8080:80"

  redis :
    image: redis

```

### Screenshot

![image](https://github.com/teddcp2/docker_project_2/blob/master/screenshot.JPG)

Thanks for Reading :)
Tedd
