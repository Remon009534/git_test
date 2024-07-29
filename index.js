function getComputerChoice()
{
    let game = ["rock", "paper", "scissors"];

    console.log(game[Math.floor(Math.random() * game.length)]);
}

function getHumanChoice()
{
    const game = window.prompt("Choose your move:- ");

    console.log(game);
}

var HumanScore = 0;
var ComputerScore = 0;

function PlayRound(HumanChoice, ComputerChoice)
{
    if(HumanChoice === "rock" && ComputerChoice === "rock" ||
        HumanChoice === "paper" && ComputerChoice === "paper" ||
        HumanChoice === "scissors" && ComputerChoice === "scissors"
    )
    {
        return 'draw';
    }
    else if(HumanChoice === "rock" && ComputerChoice === "paper" ||
        HumanChoice === "paper" && ComputerChoice === "scissors" ||
        HumanChoice === "scissors" && ComputerChoice === "rock"
    )
    {
        ComputerScore++;
    }
    else if(HumanChoice === "paper" && ComputerChoice === "rock" ||
        HumanChoice === "scissors" && ComputerChoice === "paper" ||
        HumanChoice === "rock" && ComputerChoice === "scissors"
    )
    {
        HumanScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

for(let i = 0; i <= 5; i++)
{
    getHumanChoice();
    getComputerChoice();
    PlayRound(humanSelection, computerSelection);
}
// PlayRound(humanSelection, computerSelection);

console.log(ComputerScore);
console.log(HumanScore);

function PlayGame()
{
    if(HumanScore > ComputerScore)
    {
        console.log("YOU WON");
    }
    else if(ComputerScore > HumanScore)
    {
        console.log("COMPUTER WON");
    }
    else
    {
        console.log("ITS A DRAW.");
    }
};
