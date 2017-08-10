  

//this is the array that holds the computer choices for the guessing game
        var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and ties. Wins and losses are set to 0 so that it always begins there.  Guesses are set to 3 because it counts down. 
        var wins = 0;
        var losses = 0;
        var guesses = 9;
//the computer will select a random letter of the alphabet.
        var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
//the user will select a letter 
        document.addEventListener('keyup', function(event) {
            var userGuess = event.key;
 //the userGuess and computerChoice are compared.  If they are the same, the wins increase.  If they are not, the losses increase and guesses decreases     
    if(userGuess == computerChoice){
        wins++;
        guesses--;
        //the code below will print the wins, losses, and guesses to the screen
		document.getElementById('gameOver').innerHTML = "You won!";
        document.getElementById('win').innerHTML = "Wins: " + wins;
        document.getElementById('guesses').innerHTML = "Guesses Left: " + guesses;

	}
    else {
        //this makes the guesses go down every time
        guesses--;
    }
    if (guesses < 1) {
        //display the loss to the screen
        losses++;
        //the code below will print the wins, losses, and guesses to the screen
         document.getElementById('guesses').innerHTML = "Guesses Left: " + guesses;
          document.getElementById('losses').innerHTML = "Losses: " + losses;
    }
    // else{
    //     guesses--;
    // }
    // if (guesses = 0) {
    //     losses++;
    //     document.getElementById('gameOver').innerHTML = "Game over! You lost";   
    // }
    // if (losses <= 9) {
    //     guesses--;
    // }
//once the user has used up 3 guesses, the game over will display and the game will end
    // else if{
        
   
        
    // }
//the code below will print the wins, losses, and guesses to the screen
    
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses Left: " + guesses;
    

})


    