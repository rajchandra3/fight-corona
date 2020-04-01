#!/bin/bash

git add .
git commit -m "$1"
git push

#push in the other repo as well
repo="git@github.com:rajchandra3/corona-go.git"
cd ..
echo "moved out of main folder"
rm -rf ./corona-go
echo "removed old repo"
git clone $repo
echo "cloned repo"
cp -a ./fight-corona/. ./corona-go/
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
git remote add origin $repo
# git pull origin master --allow-unrelated-histories
git push --force -u origin master

