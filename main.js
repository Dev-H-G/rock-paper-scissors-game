const choices = ["rock", "paper", "scissors"];

const userchoice = prompt(" choose rock , paper , scissors:");
if (userchoice) {
    alert(`You choose : ${userchoice}`);
} else {
    alert("You cheated!");

}
const computerchoices = Math.floor(Math.random() * 3);
const computerchoice = choices[computerchoices];
alert(`computer choice is :${computerchoice}`);
if (userchoice === computerchoice) {
    alert("No one wins!");
} else if (userchoice === "rock") {
    if (computerchoice === "scissors") {
        alert("You are the winner!");
    } else {
        alert("You are the loser!");
    }
} else if (userchoice === "paper") {
    if (computerchoice === "scissors") {
        alert("You are the winner!");
    } else {
        alert("You are the loser!");
    }
} else if (userchoice === "scissors") {
    if (computerchoice === "paper") {
        alert("You are the winner!");
    } else if (computerchoice === "rock") {
        alert("You are the loser!");
    }
}