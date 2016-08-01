// console.log('hello from node!');

// console.log('Arguments : ', process.argv);
// console.log('Process : ', process.memoryUsage());

// FS module is used to access the file system
var fs = require('fs');

// console.log(fs);

fs.readFile('./hello.js', {
	// encoding : 'utf-8'
} ,function(err, data){
	console.log('ERR : ', err);
	console.log('DATA : ', data);

});




