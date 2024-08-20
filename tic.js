const cell = document.querySelectorAll('.item');
const text = document.querySelector('#statusText');
const restart = document.querySelector('#restart');

const windConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 'X';
let running = false;

initializeGame();

function initializeGame()
{
    cell.forEach(cell => cell.addEventListener('click', cellClicked));
    restart.addEventListener('click', restartGame());
    text.textContent = `${currentPlayer} turn`;
    running = true;
}
function cellClicked()
{
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running)
    {
        return;
    }

    updateCell(this, cellIndex);
    changePlayer();
    checkWinner();
}
function updateCell(cell, index)
{
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer()
{
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    text.textContent = `${currentPlayer}'s turn`;
}
function checkWinner()
{
    let roundOne = false;

    for(let i = 0; i < windConditions.length; i++)
    {
        const condition = windConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA = "" || cellB == "" || cellC == "")
        {
            continue;
        }
        if(cellA == cellB && cellB == cellC)
        {
            roundOne = true;
            break;
        }
    }
    if(roundOne == true)
    {
        text.textContent = `${currentPlayer}'s win`;
        running = false;
    }
    else if(!options.includes(""))
    {
        text.textContent = "Draw!!";
        running = true;
    }
    else
    {
        changePlayer();
    }
}
function restartGame()
{
    currentPlayer = "X";
    options =["", "", "", "", "", "", "", "", ""];
    text.textContent = `${currentPlayer}'s turn`;
    cell.forEach(cell => cell.textContent = "");
    running = true;
}

restart.addEventListener('click', restartGame);
