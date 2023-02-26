#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# 部署到 https://Cathy7485.github.io
# git push -f git@github.com:Cathy7485/Cathy7485.github.io.git master

# 部署到 https://Cathy7485.github.io/vue_hw_w6
git push -f https://github.com/Cathy7485/vue_hw_w6.git master:gh-pages

cd -

