function playRock(){
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3){
        document.getElementById('resultContainer').innerHTML = 'You lose!';
        document.getElementById('userSelectionContainer').innerHTML = '✊';
        document.getElementById('computerSelectionContainer').innerHTML = '🫳';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        document.getElementById('resultContainer').innerHTML = 'You win!';
        document.getElementById('userSelectionContainer').innerHTML = '✊';
        document.getElementById('computerSelectionContainer').innerHTML = '✌️';
    } else {
        document.getElementById('resultContainer').innerHTML = 'It is a tie!';
        document.getElementById('userSelectionContainer').innerHTML = '✊';
        document.getElementById('computerSelectionContainer').innerHTML = '✊';
    }    
}
function playPaper(){
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3){
        document.getElementById('resultContainer').innerHTML = 'It is a tie!';
        document.getElementById('userSelectionContainer').innerHTML = '🫳';
        document.getElementById('computerSelectionContainer').innerHTML = '🫳';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        document.getElementById('resultContainer').innerHTML = 'You lose!';
        document.getElementById('userSelectionContainer').innerHTML = '🫳';
        document.getElementById('computerSelectionContainer').innerHTML = '✌️';
    } else {
        document.getElementById('resultContainer').innerHTML = 'You win!';
        document.getElementById('userSelectionContainer').innerHTML = '🫳';
        document.getElementById('computerSelectionContainer').innerHTML = '✊';
    }    
}
function playScissors(){
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3){
        document.getElementById('resultContainer').innerHTML = 'You win!';
        document.getElementById('userSelectionContainer').innerHTML = '✌️';
        document.getElementById('computerSelectionContainer').innerHTML = '🫳';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        document.getElementById('resultContainer').innerHTML = 'It is a tie!';
        document.getElementById('userSelectionContainer').innerHTML = '✌️';
        document.getElementById('computerSelectionContainer').innerHTML = '✌️';
    } else {
        document.getElementById('resultContainer').innerHTML = 'You lose!';
        document.getElementById('userSelectionContainer').innerHTML = '✌️';
        document.getElementById('computerSelectionContainer').innerHTML = '✊';
    }    
}
