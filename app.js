


var scores, roundScore, activePlayer, gamePlaying;

init()

function btn () {

    if (gamePlaying) {

           // 1. Generate a Random Number
    var dice = Math.floor(Math.random() * 6) + 1
    //display the result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'

    //Update the round score if the rolled number is not a 1

    if (dice !== 1) {
        // Add score
        roundScore += dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore
    } else {
        //Next Player
        nextPlayer()
    }
    }
}

function hold () {

    if (gamePlaying) {
        // Add current score to global score
    scores[activePlayer] += roundScore
    // Update UI
    document.querySelector('#score-' + activePlayer ).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = "Winner!!!"
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
        gamePlaying = false
    } else {
        nextPlayer()
    }
    }
    
}

function nextPlayer () {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0
        document.getElementById('current-0').textContent = '0'
        document.getElementById('current-1').textContent = '0'
        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')
        document.querySelector('.dice').style.display = 'none'
}

document.querySelector('.btn-roll').addEventListener('click', btn )
document.querySelector('.btn-hold').addEventListener('click', hold)
document.querySelector('.btn-new').addEventListener('click', init)

function init () {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = "Player 1"
    document.getElementById('name-1').textContent = "Player 2"
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
}