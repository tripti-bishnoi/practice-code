var fs = require('fs');
var readline = require('readline');
var hashmap = require('hashmap');
var map = new hashmap();

var instream = fs.createReadStream('./adventures-of-sherlock-holmes.txt', 'UTF-8');

var count = 0;
var rl = readline.createInterface(instream);


rl.once('line', (lines) =>{
});

rl.on('line', (lines) => {
	createMap(lines);
});

rl.on('close', ()=> {
	console.log(`Number of Words: ${getNumberOfWords()}`);
	console.log(`Number of unique words: ${map.size}`);
	console.log(`Top Ten Words by Freq:`);
	console.log(topTenWords(map));
});

function createMap(line){
	var words = line.split(/\s+/);

	words.forEach((word) => {
		count = (map.has(word.toLowerCase())) ? (map.get(word.toLowerCase()) + 1) : 1;
		map.set(word.toLowerCase(), count);
	});
}

function getNumberOfWords(){
	var num = 0;
	map.values().forEach((val)=>{
		num += val;
	});
	return num;
}

function topTenWords(wordsMap){
	var finalWordsArray = [];

	wordsMap.forEach((value, key)=>{
		finalWordsArray.push({
			word: key,
			count: value
		});
	});

	finalWordsArray.sort((a, b)=>{
		return b.count - a.count;
	});

	var topTen = finalWordsArray.slice(0,9);
	return topTen;
}


/*

	.number of words
	.number of unique words
	.top ten words by freq --
	.

*/