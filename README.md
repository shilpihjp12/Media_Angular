## Instructions

1. Make sure you have these installed
  - [node.js](http://nodejs.org/)
  - [git](http://git-scm.com/)

2. Clone this repository into your local machine using the terminal (mac) or Gitbash (PC) 

    `git clone https://github.com/shilpihjp12/Media_Angular.git`
    
3. CD to the folder

    `cd Media_frontEnd`
    
4. Run the following to install the project dependencies:

    `npm install`
    
5. Run the ng serve command to build the code, watch for file changes, and serve up the site locally:

    `ng serve`

6. Navigate to http://localhost:5000. The app will automatically reload if you change any of the source files.

    `http://localhost:5000/`
	
## Angular CLI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## FAQ
If you are getting a list of errors on `npm install` that look like `Cannot find name 'Promise'`, check your `package.json` file and see if the following DevDependencies have a caret in front of the version number (the ^ symbol):
```json
"devDependencies": {
  
  "@types/core-js": "0.9.34",
  "@types/node": "6.0.41"
  
}
```
If the caret is there (would look like `"@types/core-js": "^0.9.34"`) then remove it (or copy the contents of the [package.json](https://github.com/coursefiles/angular2-essential-training/blob/master/package.json) file on the origin repository) and run `npm install` again.
  
## More Stuff
Check out some of my [other courses on LinkedIn Learning](https://www.linkedin.com/learning/instructors/justin-schwartzenberger?u=2125562). 
You can also [follow me on twitter](https://twitter.com/schwarty).
