/*
index.js: The file containing the logic for the course of the game, which depends on Word.js and:


Randomly selects a word and uses the Word constructor to store it
Prompts the user for each guess and keeps track of the user's remaining guesses

*/

var inquirer = require ("inquirer");
var Word = require ("./Word.js");
var Letter = require("./Letter.js");


//fxn for getting word object
var getWord = function() {
    //create word bank, then randomize 
    this.wordBank = ["octopus","squid","flounder","shark","mermaid","tuna","submarine"];
    this.randomWord = wordBank[Math.floor(Math.random( )* wordBank.length)];
    this.word = new Word(randomWord);
    return word;
};

//variables for in game
var guessesLeft = 10;
var lettersGuessed = [];
var currentWord = null;


//START GAME FXN
startGame();





    


