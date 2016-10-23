$(document).ready(function () {

var characters = {

	guyA: {
		name: 'Guy A',
		health: 180,
		power: 8
	},

	guyB: {
		name: 'Guy B',
		health: 100,
		power: 10
	},

	guyC: {
		name: 'Guy C',
		health: 200,
		power: 5
	},

	guyD: {
		name: 'Guy D',
		health: 160,
		power: 15
	}
}

var hero, isHeroChosen, isDefenderChosen, heroLoses, defenderLoses, attackDefender;

function initializeGame() {

	isHeroChosen = false;
	isDefenderChosen = false;
	attackDefender = false;
	heroLoses = false;
	defenderLoses = false;

	$('.defender,.stage').empty();
}

//Click event to choose hero. Apply id hero to chosen image//
$('.character').on('click', function() {

		alert(this.id);
		//$('.character').applyId('#hero');
		//$('.start').appendTo('.stage');
		//console.log("it is done");
})

// call initializeGame to prepare game for play
    initializeGame();
});