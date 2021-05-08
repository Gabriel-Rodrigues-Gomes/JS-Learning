
var scores,roundScore,activePlayer,dice,init,running,prevDice,winningScore;

p0Panel = document.querySelector('.player-0-panel')
p1Panel = document.querySelector('.player-1-panel')

newGame();

//new game function
document.querySelector('.btn-new').addEventListener('click',newGame);



//'roll dice' button
document.querySelector('.btn-roll').addEventListener('click',function() { 
    if(running){
    dice = Math.floor( Math.random() * 6) + 1; 

        if(prevDice === 6 && dice === 6){
            scores[activePlayer] = 0;
            roundScore = 0;

            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            document.querySelector('#dice-0').src = 'dice-' + dice + '.png';
            
            document.querySelector('#dice-0').style.display = 'block';
            return;
    }
    document.querySelector('#dice-0').src = 'dice-' + dice + '.png';
    document.querySelector('#dice-0').style.display = 'block';

        if(dice !== 1){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        }/*else{
            nextPlayer();
    
    }*/

    prevDice = dice;
}});


//hold button
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(running){

    activePlayer === 0 ? scores[activePlayer] += roundScore : scores[activePlayer] +=roundScore;
    checkWinner();

    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    nextPlayer();
}});


//Set score button
document.querySelector('.btn-setscore').addEventListener('click',function(){
    if(running){
    winningScore = parseInt(document.querySelector('.final-score').value);
    }
});


function newGame(){
    roundScore = 0;
    activePlayer = 0;
    
    scores = [0,0];
    running = true;

    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;

    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    document.querySelector('#name-' + activePlayer).textContent = 'Player ' + (activePlayer + 1);
    p0Panel.className = 'player-0-panel active';

    p1Panel.className = 'player-1-panel';
    document.querySelector('#dice-0').style.display = 'none';

   
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
    if (scores[activePlayer] >= winningScore){
        running = false;
        alert('player ' + (activePlayer + 1) + ' won the game!');

        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        nextPlayer();
        

    }
}
