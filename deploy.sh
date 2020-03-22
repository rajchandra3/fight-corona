#!/bin/bash

git add .
git commit -m "$1"
git push

#push in the other repo as well
cd ..
rm -rf ./corona-go
mkdir ./corona-go
cp -a ./fight-covid19/. ./corona-go/
cd ./corona-go
echo "corona-go.info" > ./CNAME
git init
git add .
git commit -m "$1"
git remote add origin git@github.com:rajchandra3/corona-go.git
git push -u origin master

