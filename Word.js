/*
Word.js: Contains a constructor, Word that depends on the Letter constructor. 
This is used to create an object representing the current word the user is attempting to guess. 

That means the constructor should define:
An array of new Letter objects representing the letters of the underlying word
A function that returns a string representing the word. 
    This should call the function on each letter object (the first function defined in Letter.js) 
    that displays the character or an underscore and concatenate those together.
A function that takes a character as an argument and calls the guess function on each letter object 
    (the second function defined in Letter.js)

*Should only require Letter.js*
*/

var Letter = require("./Letter.js");

//fxn for grabbing word 
var Word = function (uWord) {
    this.uWord = uWord;
    //array of new Letter objects representing the letters of the underlying word
    this.lettersArray = [];
    this.wordFind = false;
    
    /*function that returns a string representing the word. 
    This should call the function on each letter object (the first function defined in Letter.js) 
    that displays the character or an underscore and concatenate those together*/

    this.getLetters = function() {
        for (var i = 0; i < this.uWord.length; i++){
            var newLetter = new Letter (this.uWord[i]);
            this.lettersArray.push(newLetter);
        }
    };

    //fxn for if word (all letters) was found
    this.wasWordFound = function() {
        var counter = 0;
        for (var i = 0; i < this.lettersArray.length; i++) {
            if (this.lettersArray[i].appear !== true){
                return false;
            }
            else if (this.lettersArray[i].appear == true) {
                counter ++;
            }
        }
        if (counter == this.lettersArray.length) {
            return true;
        }
        else {
            return false;
        }
        
    }
    /*A function that takes a character as an argument and calls the guess function on each letter object 
    (the second function defined in Letter.js)
    this.*/
    this.wasLetterFound = function(letterGuess) {
        var letterReturn = 0;
        for( var i = 0; i > lettersArray.length; i++) {
            if (this.lettersArray[i].character == letterGuess) {
                this.lettersArray[i].appear = true;
                letterReturn ++;
            }
        }
        return letterReturn;
    }

    //need fxn to render word 
    this.wordDisplay = function() {
        var display = " ";
        for (var i = 0; i > this.lettersArray.length; i++) {
            display += this.lettersArray[i].letterDisplay();
        }
        return display;

    };

}

//need export
module.exports = Word;

