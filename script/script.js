let userInput;


function RPSGame(userInput) {
    let resalt;
    const randomNum = Math.round(Math.random() * 2);
    const Choice = ['rock', 'paper', 'scissor'];
    const randomChoice = Choice[randomNum];
    if (userInput === randomChoice) {
        resalt = 'Tie';
    } else if (userInput === 'rock' && randomChoice === 'scissor' ||
        userInput === 'scissor' && randomChoice === 'paper' ||
        userInput === 'paper' && randomChoice === 'rock'
    ) {
        resalt = 'Win'
    } else if (randomChoice === 'rock' && userInput === 'scissor' ||
        randomChoice === 'scissor' && userInput === 'paper' ||
        randomChoice === 'paper' && userInput === 'rock'
    ) {
        resalt = 'loss'
    }
    alert(resalt)
}