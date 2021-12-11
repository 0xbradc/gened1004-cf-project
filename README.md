# Gened1004CfProject

## Purpose
This was a project done for my GENED 1004: Darwinism class in the Fall of 2021 at Harvard University. Its topic is on Cystic Fibrosis.

## Posting to GitHub Pages
### Quick Note
In order for anything in the assets folder to show up appropriately, we must first delete all spatial references ("../"). 
Instead of having "../assets/" we would have "assets/". 
This is done according to this StackOverflow post: https://stackoverflow.com/questions/56379595/images-are-not-loading-after-deploying-angular-app-on-github-pages

### Deployment Process
Deployment process was done using this website: https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4

1. Input the following command:
`ng build --prod --base-href "https://bfc02.github.io/gened1004-cf-project/"`

2. Input the following command:
`npx angular-cli-ghpages --dir=dist/gened1004-cf-project`