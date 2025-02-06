#!/bin/bash
MVN_DIR=$(pwd)
NG_DIR=$(pwd)"/"$(ls | grep angular-)

cd $NG_DIR
rm -rf node_modules && npm install
ng build --configuration production

cd $MVN_DIR
mvn clean install


