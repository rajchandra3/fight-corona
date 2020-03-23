#!/bin/bash

git add .
git commit -m "$1"
git push

#push in the other repo as well
cd ..
echo "moved out of main folder"
rm -rf ./corona-go
echo "removed old repo"
mkdir ./corona-go
echo "made a new folder"
cp -a ./fight-covid19/. ./corona-go/
echo "copied the files to new folder"
cd ./corona-go
echo "entered new folder"
echo "corona-go.info" > ./CNAME
echo "changed cname"
rm -rf .git
echo "removed .git"

git init
git add .
git commit -m "$1"
git pull
git add .
git commit -m "deploy to production"
git remote add origin git@github.com:rajchandra3/corona-go.git
git push -u origin master

