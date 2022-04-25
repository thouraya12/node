var fs = require('fs');
var path = require('path');
// var extension = RegExp('.' + process.argv[3]);
var extension = '.' + process.argv[3];
fs.readdir(process.argv[2], function(err, files) {
	if (err) throw err;

	for (var i = 0; i < files.length; i++) {
		/*if (extension.test(files[i])) {
			console.log(files[i]);
		}*/
		if (path.extname(files[i]) === extension) {
			console.log(files[i])
		}
	}
})