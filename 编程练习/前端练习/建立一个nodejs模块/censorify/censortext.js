var censoredWords = ["sad","bad","mad"];
var customCensoreWords = [];
function censor(inStr){
	for(idx in censoredWords){
		inStr = inStr.replace(censoredWords[idx],"****");
	}
	for(idx in customCensoredWords){
		inStr = inStr.replace(customCensoredWords[idx],"****");
	}
	return inStr;
}
function addCensoredWord(word){
	customCensoredWords.push(word);
}
function getCensoredWords(){
	return consoredWords.concat(customCensoreWords);
}
exports.censor = censor;
exports.addCensoreWord = addCensoredWord;
exports.getCensoreWords = getCensoredWords;