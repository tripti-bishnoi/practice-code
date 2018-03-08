var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var readline = require('readline');

var keyword = getKeyword();
console.log(`keyword is: ${keyword}`);

http.createServer((req, res)=>{
	if(req.url === "/fileupload"){
		var form = new formidable.IncomingForm();
		
		form.parse(req, (err, fields, files)=>{
		
			res.writeHead(200, {'Content-Type' : 'text/html'});

			var oldPath = files.filetoupload.path;
			var newPath = "/Users/triptibishnoi/Desktop/testNodeApp/uploaded/" + files.filetoupload.name;
			fs.rename(oldPath, newPath, (err)=>{});

			var rl = readline.createInterface(fs.createReadStream(newPath, 'UTF-8'));

			rl.once('line',()=>{
				res.write(`<!DOCTYPE html>
					<html>
					<body>
					<div>`);
			});

			rl.on('line', (contents)=>{
				if(keyword !== null) {
					var re = new RegExp(keyword, "gi");
					contents = contents.replace(re, "<b>" + keyword + "</b>");
				}
				res.write(`${contents} <br>`);
			});

			rl.on('close',()=>{
				res.write(`</body>
					</html>`);
				res.end();
				fs.unlink(newPath, (err)=>{});
			});
		});
	}else{
		res.writeHead(200, {'Content-Type' : 'text/html'});
		fs.readFile('./public/index.html', 'UTF-8', (err, contents)=>{
			res.end(`<!DOCTYPE html>
				<html>
				<body>
				<form action="fileupload" method="post" enctype="multipart/form-data">
				<input type="file" name="filetoupload">
				<input type="submit">
				</form>
				</body>
				</html>`);
		});
	}
}).listen(3000);

function getKeyword(){
	var index = process.argv.indexOf('--keyword');
	return (index === -1) ? null : process.argv[index + 1];
}
















/*var fs = require('fs');
var readline = require('readline');

var fileLocation = getFileLocation();
if(fileLocation === 'nan'){
	console.log('no file location specified!');
	process.exit();
}

console.log(fileLocation);
var instream = fs.createReadStream(fileLocation, 'UTF-8');
var outstream = fs.createWriteStream('./output.txt');
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(chunks){
	outstream.write(`${chunks}\n`);
});

rl.on('close', function(){
	console.log("readline closed");
});


function getFileLocation(){
	var index = process.argv.indexOf('--location');
	return (index === -1) ? 'nan' : process.argv[index+1];
}*/