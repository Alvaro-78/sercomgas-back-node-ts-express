#! /bin/bash

Green='\033[0;33m'
Yellow='\033[1;33m'

echo -e "${Green}Running ${Yellow} sercomgas"

docker-compose down

docker rm -f node-app postgres pgadmin

npm install

docker-compose up --build 