/*
Letter.js: Contains a constructor, Letter. 
This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), 
depending on whether or not the user has guessed the letter. 

That means the constructor should define:
A string value to store the underlying character for the letter
A boolean value that stores whether that letter has been guessed yet
A function that returns the underlying character if the letter has been guessed, 
    or a placeholder (like an underscore) if the letter has not been guessed
A function that takes a character as an argument and checks it against the underlying character, 
    updating the stored boolean value to true if it was guessed correctly


*Should not require any other files*
*/

//function for creating underlying character
var Letter = function(character) {
    //string value to store the underlying character for the letter
    this.character = character;
    //boolean value that stores whether that letter has been guessed yet
    this.beenGuessed = false;
    //function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.showGuess = function() {
        if (this.beenGuessed) {
            this.beenGuessed = true;
            //**** maybe use RETURN */
            return this.character;
            //console.log(this.character);
        }
        else {
            return ("_");
            //console.log("_");

        }
    };

};

module.exports = Letter;
