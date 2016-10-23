
$(document).ready(function () {

var character = {

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

//Click event to choose hero. Others are moved to the staging row//
$('.character').one('click', function() {
		

		$('.character').not(this).appendTo('.stage');
		$(this).removeClass('character');
		

});

$('.stage').on('click',function() {

	$(event.target).appendTo('.defender');
})

// call initializeGame to prepare game for play
    initializeGame();
});

