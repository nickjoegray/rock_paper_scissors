
/* Rock Paper Scissors */
/* a. User makes a choice */
/* b. Computer makes a choice */
/* c. A compare function will determine who wins */
/* Start by first asking the user which option they want to pick. */
/* Will later use this choice in the compare function to determine the winner. */

var userChoice = function() {
    prompt("Do you choose rock, paper or scissors?");
};

/* If computerChoice is between 0 and 0.33, make computerChoice equal to "rock". */
/* If computerChoice is between 0.34 and 0.66, make computerChoice equal to "paper". */
/* If computerChoice is between 0.67 and 1, make computerChoice equal to "scissors". */

var computerChoice = Math.random();
console.log(computerChoice);

if (computerChoice < 0.34) {
    console.log(computerChoice = "rock");
} else if (computerChoice > 0.66) {
    console.log(computerChoice = "scissors");
} else {
    console.log(computerChoice = "paper") ;
}

/* One outcome is that the choice the user makes is equal to the choice the computer makes. */

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return("The result is a tie!");
    }
};

/* a. if choice2 === "scissors", then "rock" wins. */
/* b. if choice2 === "paper", then "paper" wins. */

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return("The result is a tie!");
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return("rock wins");
        } else {
            return("paper wins");
        }
    }
};

/* Final Result */

var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if(computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return("The result is a tie!");
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return("rock wins");
        } else {
            return("paper wins");
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return("rock wins");
        } else {
            return("scissors wins");
        }
    }
};

compare(userChoice, computerChoice);