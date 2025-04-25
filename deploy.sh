#!/bin/bash

# Build the Next.js project
npm run build

# Create .nojekyll file to prevent GitHub Pages from using Jekyll
touch out/.nojekyll

# Add and commit the changes
git add out/
git commit -m "Deploy to GitHub Pages"

# Push the out directory to the gh-pages branch
git subtree push --prefix out origin gh-pages

echo "Deployment complete! Your site will be available at https://urghurt.github.io/portfolio-website/"
