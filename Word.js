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
    this.letters = [];
    this.wordFind = false;
    
    /*function that returns a string representing the word. 
    This should call the function on each letter object (the first function defined in Letter.js) 
    that displays the character or an underscore and concatenate those together*/

    this.getLetters = function() {
        for (var i = 0; i < this.uWord.length; i++){
            var newLetter = new Letter (this.uWord[i]);
            this.letters.push(newLetter);
        }
    };

    this.wasWordFound = function() {
        
    }





}

