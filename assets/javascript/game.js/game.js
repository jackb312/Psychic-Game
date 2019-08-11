//Global variables

//variable that defines the array of letters that the computer chooses from
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//variable that defines wins
var wins = 0;
//variable that defines losses
var losses = 0;
//variable that defines the number of guesses available
var numGuesses = 9;
//variable that defines the array of letters that user can choose from
var guessChoices = [];

//function that documents the key pressed
document.onkeyup = function(event) {

  //local variable that documents what key the user presses
  var userGuess = event.key;

  //local variable that has a function that randomly chooses a letter 
  //for the computer from the computer choices array
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  //local variable that defines the array that the user can choose from
  var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
    
  // if loop that returns the index in the user guess array
  if (options.indexOf(userGuess) > -1) {

  //if loop that defines that if user picks same letter as computer 
  //than user wins. Counts number of guesses, and puts guess choices in an array
  if (userGuess === computerGuess) {
    wins++;
    numGuesses = 9;
    guessChoices = [];
  }

  //if loop that pushes user guess choices into the visible user guesses so far array
  if (userGuess != computerGuess) {
    numGuesses --;
    guessChoices.push(userGuess);
  }

  //if loop that defines a loss if user does not pick correcxt letter within 9 guesses
  if (numGuesses === 0) {
  numGuesses = 9;
  losses ++;
  guessChoices = [];
  }

  //variable that displays strings and wins ,losses, number of guesses, and guess
  //choices in the browser 
  var html = 
  "<h1> The Psychic Game </h1>" +
  "<p>Guess what letter I'm thinking of</p>" +
  "<p>Wins: " + wins + "</p>" +
  "<p>Losses: " + losses + "</p>" +
  "<p>Guesses Left: " + numGuesses + "</p>" +
  "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

  //matches the id game in the html with the js file
  document.querySelector("#game").innerHTML = html;
  }
};