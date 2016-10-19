var wordList = ["cybermen", "sontarans", "daleks", "gallifrey", "tardis", 
			    "mondas", "nestene", "zygons", "master", "yeti", 
			    "great intelligence", "davros", "skaro", "rassilon" ];
var currentWord = "";
var hiddenWord = [];
var tempWord = "";
var reset = true;
var wins = 0;
var guesses = 5;
var guessed = [];
function pickAWord() {
	reset = false;
	hiddenWord = [];
	currentWord = 'great intelligence';
//	currentWord = wordList[Math.floor(Math.random() * wordList.length)];
	for (var i = 0; i < currentWord.length; i++) {
		if (currentWord.charAt(i) != ' ') {
			hiddenWord[i] = '-';
		} else {
			hiddenWord[i] = '_';
		}
	}
	document.getElementById('currentWord').innerHTML = currentWord;
	document.getElementById('hiddenWord').innerHTML = hiddenWord.join(' ');
	console.log(currentWord + " " + hiddenWord + " " + reset);
	guessed = [];
	guesses = 5;
}

function setup(reset) {
	if (reset == true) {
		pickAWord();
		guessed = [];
		guesses = 5;

	}
}

function checkForWin() {
	var currentWordConversion = [];
	for (var k = 0; k < currentWord.length; k++) {
		currentWordConversion[k] = currentWord.charAt(k);
	}
	if (hiddenWord === currentWordConversion) {
		wins += 1;
		document.getElementById('wins').innerHTML = wins;
		pickAWord();

	}


}

document.onkeyup = function(event) {
	eventInput = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("eventInput " + eventInput);
	setup(reset);
	for (var j = 0; j < currentWord.length; j++) {
		if (eventInput == currentWord.charAt(j)) {
			hiddenWord[j] = eventInput;
//			tempWord += eventInput;
		}// else if (hiddenWord.charAt(j) != "_") {
//			tempWord += hiddenWord.charAt(j);
//		} else {
//			tempWord += "_";
//		}

	}
	if (eventInput != " ") {
		console.log("test");
		console.log(eventInput);
		console.log(guessed);
		if (guessed.indexOf(eventInput) == -1) {
			guessed.push(eventInput);
			if (currentWord.indexOf(eventInput) == -1) {
				guesses--;
				document.getElementById('guesses').innerHTML = guesses;
			}
		document.getElementById('guessed').innerHTML = guessed.join(' ');
		}

	}
	if (guesses <= 0) {
		document.getElementById('alert').innerHTML = "Game Over";
		pickAWord();
	}
//	hiddenWord = tempWord;
//	tempWord = "";
	document.getElementById('hiddenWord').innerHTML = hiddenWord.join(' ');
	checkForWin();
}	
