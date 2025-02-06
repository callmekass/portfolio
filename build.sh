#!/bin/bash
# get path variables
MVN_DIR=$(pwd)
NG_DIR=$(pwd)"/"$(ls | grep angular-)

# build angular project
cd $NG_DIR
rm -rf node_modules && npm install
ng build --configuration production

# build spring boot project
cd $MVN_DIR
mvn clean install


