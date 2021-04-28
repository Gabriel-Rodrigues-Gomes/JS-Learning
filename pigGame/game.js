
var roundScore,activePlayer,dice;

p0Panel = document.querySelector('.player-0-panel')
p1Panel = document.querySelector('.player-1-panel')
roundScore = 0;
activePlayer = 0;


//new game function
document.querySelector('.btn-new').addEventListener('click',newGame);


function newGame() {
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    
    score0 = 0;
    score1 = 0;
    
    p0Panel.className = 'player-0-panel';
    p1Panel.className = 'player-1-panel';

    document.querySelector('#dice-0').style.display = 'none';
    activePlayer = 0;
    roundScore = 0;
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
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

    }


});
//hold button
//document.querySelector('.btn-hold').addEventListener('click',);
