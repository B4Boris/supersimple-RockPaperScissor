
function getComputerSelection(){
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3){
        return "Rock";
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playGame(playerSelection){
    const computerSelection = getComputerSelection();
    
    if (playerSelection === "Rock"){
        if (computerSelection === "Rock"){
            document.getElementById('resultContainer').innerHTML = 'It is a tie!';
            document.getElementById('userSelectionContainer').innerHTML = '✊';
            document.getElementById('computerSelectionContainer').innerHTML = '✊';
        } else if (computerSelection === "Paper"){
            document.getElementById('resultContainer').innerHTML = 'You lose!';
            document.getElementById('userSelectionContainer').innerHTML = '✊';
            document.getElementById('computerSelectionContainer').innerHTML = '🫳';
        } else {
            document.getElementById('resultContainer').innerHTML = 'You win!';
            document.getElementById('userSelectionContainer').innerHTML = '✊';
            document.getElementById('computerSelectionContainer').innerHTML = '✌️';
        }
    }
    if (playerSelection === "Paper"){
        if (computerSelection === "Rock"){
            document.getElementById('resultContainer').innerHTML = 'You win!';
            document.getElementById('userSelectionContainer').innerHTML = '🫳';
            document.getElementById('computerSelectionContainer').innerHTML = '✊';
        } else if (computerSelection === "Paper"){
            document.getElementById('resultContainer').innerHTML = 'It is a tie!';
            document.getElementById('userSelectionContainer').innerHTML = '🫳';
            document.getElementById('computerSelectionContainer').innerHTML = '🫳';
        } else {
            document.getElementById('resultContainer').innerHTML = 'You lose!';
            document.getElementById('userSelectionContainer').innerHTML = '🫳';
            document.getElementById('computerSelectionContainer').innerHTML = '✌️';
        }
    }
    if (playerSelection === "Scissors"){
        if (computerSelection === "Rock"){
            document.getElementById('resultContainer').innerHTML = 'You lose!';
            document.getElementById('userSelectionContainer').innerHTML = '✌️';
            document.getElementById('computerSelectionContainer').innerHTML = '✊';
        } else if (computerSelection === "Paper"){
            document.getElementById('resultContainer').innerHTML = 'You win!';
            document.getElementById('userSelectionContainer').innerHTML = '✌️';
            document.getElementById('computerSelectionContainer').innerHTML = '🫳';
        } else {
            document.getElementById('resultContainer').innerHTML = 'It is a tie!';
            document.getElementById('userSelectionContainer').innerHTML = '✌️';
            document.getElementById('computerSelectionContainer').innerHTML = '✌️';
        }
    }
}