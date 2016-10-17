var wordList = ["cybermen", "sontarans", "daleks", "gallifrey", "tardis", 
			    "mondas", "nestene", "zygons", "master", "yeti", "great intelligence" ];
var currentWord = "";
var hiddenWord = "";
var tempWord = "";
var reset = true;
function pickAWord() {
	reset = false;
	hiddenWord = "";
	currentWord = wordList[Math.floor(Math.random() * wordList.length)];
	for (var i = 0; i < currentWord.length; i++) {
		if (currentWord.charAt(i) != ' ') {
			hiddenWord += '_';
		} else {
			hiddenWord += ' ';
		}
	}
	document.getElementById('currentWord').innerHTML = currentWord;
	document.getElementById('hiddenWord').innerHTML = hiddenWord;
	console.log(currentWord + " " + hiddenWord + " " + reset);
}

function setup(reset) {
	if (reset == true) {
		pickAWord();
	}
}

document.onkeyup = function(event) {
	eventInput = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("eventInput " + eventInput);
	setup(reset);
	for (var j = 0; j < currentWord.length; j++) {
		if (eventInput == currentWord.charAt(j)) {
			tempWord += eventInput;
		} else if (hiddenWord.charAt(j) != "_") {
			tempWord += hiddenWord.charAt(j);
		} else {
			tempWord += "_";
		}
	}
	
	hiddenWord = tempWord;
	tempWord = "";
	document.getElementById('hiddenWord').innerHTML = hiddenWord;
}	
