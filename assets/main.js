  
  
    var AlphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 13;
    var guessedLetters = []; //Array to capture user letter inputs
    document.onkeyup = function(event) {
      var yourGuess = event.key; //variable to capute user's guess
      guessedLetters.push(yourGuess); //This will capture letters entered by the user    
      var ComputerAns = AlphabetArr[Math.floor(Math.random() * AlphabetArr .length)];
      
      //If your guess matches the computer's guess,
      //a point is added to the "Wins" tally and the guesses tally substrats
      if (yourGuess === ComputerAns) {
        wins++;
        guessesLeft--;
      }
      //If letter does not not match the computer guess, your number of guesses remaining are deducted.
      else {
        losses++;
        guessesLeft--;
      }
      //If the guesses remaining equals 0, the game is over and values are reset
      if (guessesLeft === 0) {
          guessesLeft = 13;
          guessedLetters = [];
          losses=0;
          wins=0;
      }
       
      var html= "<p>Guess what letter I'm thinking of:</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Loses: " + losses + "</p>" +
        "<p>Guesses Remaining: " + guessesLeft + "</p>" +
        "<p>Guessed Letter: " + guessedLetters.join(', ') + "</p>" ;
      
        document.getElementById("results").innerHTML = html;
        
    }