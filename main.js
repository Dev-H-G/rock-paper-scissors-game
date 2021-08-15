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
