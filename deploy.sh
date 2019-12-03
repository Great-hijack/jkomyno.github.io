AUTHOR=jkomyno
REPOSITORY=$AUTHOR.github.io

# This script assumes that node_modules and build folders exist in source branch.
# To create them, just run `npm run deploy`.
git checkout source
git branch -D master

# creates new history-less branch master deleting every tracked file
git checkout --orphan master
git rm -rf .

echo "Populating .gitignore in master" 
# populates gitignore
echo "node_modules/" > .gitignore
echo "deploy.sh" >> .gitignore
echo ".travis.yml" >> .gitignore

# moves build files in place, and copies README.md from source branch
mv build/* .
rm -rf build
git checkout source README.md

echo "Committing into master"
# adds everything and commits to master
git add .
git commit -m "Travis build"
git remote add origin-deploy https://$AUTHOR:$GITHUB_TOKEN@github.com/$AUTHOR/$REPOSITORY.git

echo "Pushing into master"
git push -f --set-upstream origin-deploy master
git checkout source