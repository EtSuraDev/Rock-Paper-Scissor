let userInput;




function RPSGame(userInput) {

    let score = JSON.parse(localStorage.getItem('score'))
    let resalt;
    const randomNum = Math.round(Math.random() * 2);
    const Choice = ['rock', 'paper', 'scissors'];
    const randomChoice = Choice[randomNum];
    if (userInput === randomChoice) {
        resalt = 'tie';
        score.tie += 1;
    } else if (userInput === 'rock' && randomChoice === 'scissors' ||
        userInput === 'scissors' && randomChoice === 'paper' ||
        userInput === 'paper' && randomChoice === 'rock'
    ) {
        resalt = 'you win';
        score.win += 1;
    } else if (randomChoice === 'rock' && userInput === 'scissors' ||
        randomChoice === 'scissors' && userInput === 'paper' ||
        randomChoice === 'paper' && userInput === 'rock'
    ) {
        resalt = 'you loss';
        score.loss += 1;
    }

    if (userInput === "reset score") {
        score.loss = 0;
        score.tie = 0;
        score.win = 0;
        resalt = 'you reset score';
    }
    localStorage.setItem('score', JSON.stringify(score))

    document.querySelector('.first').innerHTML = resalt
    document.querySelector('#f').innerHTML = `you pick <img src="image/${userInput}-emoji.png" alt="">  ,
    <img src="image/${randomChoice}-emoji.png" alt="">  computer pick.`;
    document.querySelector('.third').innerHTML = `Win: ${score.win}, Loss: ${score.loss}, Tie: ${score.tie}`;

}