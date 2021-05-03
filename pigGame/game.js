
var scores,roundScore,activePlayer,dice;

p0Panel = document.querySelector('.player-0-panel')
p1Panel = document.querySelector('.player-1-panel')

roundScore = 0;
activePlayer = 0;

scores = [0,0];

//new game function
document.querySelector('.btn-new').addEventListener('click',newGame);


function newGame() {
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;

    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    document.querySelector('#name-' + activePlayer).textContent = 'Player ' + (activePlayer + 1);
    p0Panel.className = 'player-0-panel active';

    p1Panel.className = 'player-1-panel';
    document.querySelector('#dice-0').style.display = 'none';

    activePlayer = 0;
    roundScore = 0;

    scores = [0,0];
}
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        p0Panel.classList.toggle('active');
        p1Panel.classList.toggle('active');
}
function checkWinner(){
    if (scores[activePlayer] >= 100){
        alert('player ' + (activePlayer + 1) + ' won the game!');
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        nextPlayer();
    }
}

//'roll dice' button
document.querySelector('.btn-roll').addEventListener('click',function() { 
    dice = Math.floor( Math.random() * 6) + 1; 
    document.querySelector('#dice-0').src = 'dice-' + dice + '.png';
    document.querySelector('#dice-0').style.display = 'block';

    if(dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        nextPlayer();
    }


});
//hold button
document.querySelector('.btn-hold').addEventListener('click',function(){

    activePlayer === 0 ? scores[activePlayer] += roundScore : scores[activePlayer] +=roundScore;
    checkWinner();

    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    nextPlayer();
});
