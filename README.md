#Poject Boilerplate
A simple starter repo for new projects. Uses a variety of tools including:

* React
* Browserify
* Sass
* Gulp

##Getting Started
* Clone the repo: `git clone https://github.com/davydka/react-init`
* Enter your repo's directory: `cd react-init`

```
npm install
gulp
```
##Building as a new Repo
First steps are to checkout the boilerplate and link it to your own git repo.

* Clone the repo: `git clone https://github.com/davydka/init.git folder-name`
* Enter your repo's directory: `cd folder-name`
* Remove this init from the git remote: `git remote rm origin`
* If needed, create your new github repo from the command line: `curl -u 'USER' https://api.github.com/user/repos -d '{"name":"repo"}'`
	* replace USER with your username and REPO with your repository/application name!
* Add your remote: `git remote add origin git@github.com:user/repo.git`
* Push to your new remote repo: `git push origin master`

You've now checked out the boilerplate and linked it to your own repo. You can now begin local development.