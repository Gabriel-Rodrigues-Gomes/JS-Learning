
var scores,roundScore,activePlayer,dice;
document.querySelector('#dice-1').style.display = 'none';

score0 = 0;
score1 = 0;

roundScore = 0;

activePlayer = 0;


//new game function
document.querySelector('.btn-new').addEventListener('click',function () {
    document.querySelector('#score-0').innerHTML = 0;
    document.querySelector('#score-1').innerHTML = 0;
    document.querySelector('#current-0').innerHTML = 0;
    document.querySelector('#current-1').innerHTML = 0;
    score0 = 0;
    score1 = 0;
    document.querySelector('.player-0-panel active').className = 'player-0-panel';
    document.querySelector('.player-1-panel active').className = 'player-1-panel';
});



//'roll dice' button
document.querySelector('.btn-roll').addEventListener('click',function() { 
    var dice = Math.floor( Math.random() * 6) + 1; 

    if(activePlayer == 0) {
        var diceDOM = document.querySelector('#dice-0');
        diceDOM.src = 'dice-' + dice + '.png';
        score0+=dice;
        document.querySelector('#score-0').innerHTML = score0;
        activePlayer = 1;
        document.querySelector('.player-1-panel').className = 'player-1-panel active';
        document.querySelector('.player-0-panel').className = 'player-0-panel';

    }
    else if(activePlayer == 1) {
        var diceDOM = document.querySelector('#dice-1');
        diceDOM.src = 'dice-' + dice + '.png';
        score1+=dice;
        document.querySelector('#score-1').innerHTML = score1;
        activePlayer = 0;
        document.querySelector('.player-0-panel').className = 'player-0-panel active';
        document.querySelector('.player-1-panel active').className = 'player-1-panel';

    }
} );


addEventListener('copy',function(){
    alert('YOU HAVE COPIED THINGS HERE!');

});
addEventListener('drag',function(){
    alert('STOP DRAGGING STUFF, MAN!');
})