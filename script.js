//Functions for getting the result of the coin toss and roll of the dice

function headsOrTails () {
    let coinToss = Math.floor(Math.random() * 2 + 1 );
    if (coinToss === 1) {
        coinToss = "heads";
    } else {
        coinToss = "tails";
    }
    return coinToss;
}

function diceRoll () {
    let dice = Math.floor(Math.random() * 6 + 1 );
    return dice;
}

let results = [];
let playAgain;

 do {
    
    //Ask the user which game they wish to play?
    const pickGame = prompt("Do you pick coin or dice?");

    if ( pickGame.toLowerCase() === "coin" ) {
        //Code to get users guesses
        const userChoice = prompt("Heads or Tails?");

        if ( headsOrTails() === userChoice.toLowerCase() ) {
            results.push("Coin Toss: You Win!");
        } else {
            results.push("Coin Toss: You Loose!");
        }

    } else {

        const oneToSix = prompt("Choose a number between 1 and 6:");

        if ( diceRoll() === parseInt(oneToSix) ) {
            results.push("Roll Dice: You Win!");
        } else {
            results.push("Roll Dice: You Loose!"); 
        }

    }

    playAgain = prompt("Would to play Chance game?");

} while( playAgain.toLowerCase() === "yes" );

//Display users results
let showResults = `<h3>${results.join(`<br>`)}</h3>`;
document.querySelector("main").innerHTML = showResults;

