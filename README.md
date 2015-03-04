# React Notes Project Skeleton

## What is it?

This is the example note taking app code that the UI group wrote, repackaged into a typical node project structure. If we want to run tests, we can't just leave our react code in the index.html, but need to have our code in separate script files and exported via module exports.  


This project uses:

* a node server running ecstatic to serve the site.
* jest to test, along with a jsx preprocessor script.
* browserify (with reactify/watchify) to build/translate the code for deployment

Jquery and Bootstrap are included and referenced, but not currently used. If you don't want them, get rid of them!  

One advantage of the node-style structure is that functions/components can be separated out into individual files (as long as you correctly export/require). Currently, everything is in 'public/scripts/main.js'. 

## Instructions

1. Clone this repo.

2. Run ```npm install```.

3. If editing script files, cd to the scripts dir and run ``` watchify public/scripts/main.js -v -o public/scripts/build/main.js```, leave running to update built file on the fly. N.B. You will need to intall watchify globally in order to invoke it ```npm install -g watchify```.

4. To view in local browser, run ```npm start```. (Or install nodemon and use that.)

5. To test, run ```npm test```. (There is a sample function currently being tested)