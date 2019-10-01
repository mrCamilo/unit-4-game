// Variables
var totalScore = 0;
var numWins = 0;
var numLosses = 0;

// Use a function to initialize game
//function resetTheGame() 
//{
    // Random number between 1 and 12 for each button
    var randomRubyValue = Math.floor(Math.random() * (+12 - + 1)) + +1;
    var randomEmeraldValue = Math.floor(Math.random() * (+12 - + 1)) + +1;
    var randomSapphireValue = Math.floor(Math.random() * (+12 - + 1)) + +1;
    var randomCrystalValue = Math.floor(Math.random() * (+12 - + 1)) + +1;

    computerPick = Math.floor(Math.random() * (+120 - + 19)) + +19;
//}

// Computer picks a random number greater than or equal to 19 and less than 120

//resetTheGame();

// display for total score, computer pick, wins, and losses
document.getElementById("totalScoreDisplay").innerHTML = totalScore;
document.getElementById("lossesDisplay").innerHTML = "Losses: " + numLosses;
document.getElementById("winsDisplay").innerHTML = "Wins: " + numWins;
document.getElementById("computerPickDisplay").innerHTML = "Your Target Score: " + computerPick;

// on click event
$(document).ready(function () {
    $(".btn").on("click", function () {
        if ($(this).hasClass("ruby")) {
            totalScore += randomRubyValue;
            document.getElementById("totalScoreDisplay").innerHTML = totalScore;            
        }
        else if ($(this).hasClass("emerald")) {
            totalScore += randomEmeraldValue;
            document.getElementById("totalScoreDisplay").innerHTML = totalScore;

        }
        else if ($(this).hasClass("crystal")) {
            totalScore += randomCrystalValue;
            document.getElementById("totalScoreDisplay").innerHTML = totalScore;

        }
        else if ($(this).hasClass("sapphire")) {
            totalScore += randomSapphireValue;
            document.getElementById("totalScoreDisplay").innerHTML = totalScore;
        }   

        // Increment losses and wins and restart the game
        if (totalScore > computerPick) {
            numLosses++;
            document.getElementById("lossesDisplay").innerHTML = "Losses: " + numLosses;
            alert("That's a loss.")
            //Reset!! and initialize
            //resetTheGame();
        }
        else if (totalScore === computerPick)
        {
            numWins++;
            document.getElementById("winsDisplay").innerHTML = "Wins: " + numWins;
            alert("That's a W!");
            // Reset!! and initialize
            //resetTheGame();
        }
    });
});