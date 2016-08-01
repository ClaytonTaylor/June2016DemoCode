// CHALLENGE 2
// Write a node file that uses the `fs` module to COPY a file.  You should specify the filepath for the file to be copied as well as the destination file in the command line.

// node copy.js "./hello.js" "./copy-hello.js"

var fs = require('fs');

var originalFile = process.argv[2];
var newFile 	 = process.argv[3];

fs.readFile(originalFile, function(err, data){
	fs.writeFile(newFile, data, function(err, data){
	});
});
