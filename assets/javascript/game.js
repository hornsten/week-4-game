
$(document).ready(function () {

var character = {

	beatrix: {
		name: 'Beatrix Kiddo',
		url: 'assets/images/beatrix.jpeg',
		health: 180,
		power: 8
	},

	elle: {
		name: 'Elle Driver',
		url: 'assets/images/elle.jpeg',
		health: 100,
		power: 10
	},

	vernita: {
		name: 'Vernita Green',
		url: 'assets/images/vernita.jpeg',
		health: 200,
		power: 5
	},

	oren: {
		name: 'O-ren Ishii',
		url: 'assets/images/oren.jpeg',
		health: 160,
		power: 15
	}
}


var hero, defender, isHeroChosen, isDefenderChosen, heroLoses, defenderLoses, attackDefender;
initializeGame();

function initializeGame() {

	isHeroChosen = false;
	isDefenderChosen = false;
	heroLoses = false;
	defenderLoses = false;

	$('.defender,.stage').empty();

	document.getElementById("beatrix").src = character.beatrix.url;
	document.getElementById("elle").src = character.elle.url;
	document.getElementById("vernita").src = character.vernita.url;
	document.getElementById("oren").src = character.oren.url;

}

//Click event to choose hero. Others are moved to the staging row//
$('.character').on('click', function() {

	if(isHeroChosen) {
		$(".defender" ).append($(this)); 
		
	} else {
		$(this).addClass('hero');
		$('.character').not(this).appendTo('.stage')//.addClass('enemies');
		isHeroChosen=true;
	}
});


});

