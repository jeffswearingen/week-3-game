var wordList = ["cybermen", "sontarans", "daleks", "gallifrey", "tardis", 
			    "mondas", "nestene", "zygons", "master", "yeti", 
			    "great intelligence", "davros", "skaro", "rassilon" ];
var currentWord = "";
var hiddenWord = [];
var tempWord = "";
var reset = true;
var wins = 0;
var losses = 0;
var guesses = 5;
var guessed = [];
var currentWordConversion = [];
var hiddenWordString = "";

function pickAWord() {
	reset = false;
	hiddenWord = [];
	currentWord = wordList[Math.floor(Math.random() * wordList.length)];
	for (var i = 0; i < currentWord.length; i++) {
		if (currentWord.charAt(i) != ' ') {
			hiddenWord[i] = '-';
		} else {
			hiddenWord[i] = '_';
		}
	}
	for (var k = 0; k < currentWord.length; k++) {
		currentWordConversion[k] = currentWord.charAt(k);
		if (currentWord.charAt(k) == ' ') { 
			currentWordConversion[k] = '_';
		}
	}
	console.log(currentWord);
	console.log(currentWordConversion);
//	document.getElementById('currentWord').innerHTML = currentWord;
	document.getElementById('hiddenWord').innerHTML = hiddenWord.join(' ');
	guessed = [];
	document.getElementById('guessed').innerHTML = guessed.join(' ');
	guesses = 5;
	document.getElementById('guesses').innerHTML = guesses;

}

function setup(reset) {
	if (reset == true) {
		pickAWord();
		guessed = [];
		guesses = 5;

	}
}

function checkForWin() {

	if (hiddenWord == currentWordConversion) {
		wins += 1;
		document.getElementById('wins').innerHTML = wins;
		pickAWord();

	}


}

document.onkeyup = function(event) {
	eventInput = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("eventInput " + eventInput);
	setup(reset);
	// if eventInput is in currentWord, change the hiddenWord array element to match event Input
	for (var j = 0; j < currentWord.length; j++) {
		if (eventInput == currentWord.charAt(j)) {
				hiddenWord[j] = eventInput;			
		}
	}
	// create hidden word string from hidden word for comparison
	hiddenWordString = "";
	for (var c = 0; c < hiddenWord.length; c++) {
		hiddenWordString += hiddenWord[c];
	}
	// add elements to guessed array.  if eventInput not found in currentword, decrease guesses.
	//display guesses and guessed updates
	if (eventInput != " ") {
		if (guessed.indexOf(eventInput) == -1) {
			guessed.push(eventInput);
			if (currentWord.indexOf(eventInput) == -1) {
				guesses--;
				document.getElementById('guesses').innerHTML = guesses;
			}
		document.getElementById('guessed').innerHTML = guessed.join(' ');
		}

	}
	// if guesses is zero, increase losses
	// display losses
	// pick a new word
	if (guesses <= 0) {
		losses++;
		document.getElementById('losses').innerHTML = losses;
		pickAWord();
	}

	// debugging
	console.log(hiddenWordString + " " + currentWord);


	// check for a win
		if (hiddenWordString == currentWord) {
		wins += 1;
		document.getElementById('wins').innerHTML = wins;
		pickAWord();

	}
	// update hidden word for display
	document.getElementById('hiddenWord').innerHTML = hiddenWord.join(' ');

}	
