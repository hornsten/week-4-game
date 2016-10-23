
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


	document.getElementById("beatrix").src = character.beatrix.url;
	document.getElementById("elle").src = character.elle.url;
	document.getElementById("vernita").src = character.vernita.url;
	document.getElementById("oren").src = character.oren.url;

}

//Click event to choose hero. Others are moved to the staging row//
$('.character').on('click', function() {

	if(isDefenderChosen) {
		return;

	} else if(isHeroChosen) {
		$(".defender" ).append($(this));
		isDefenderChosen = true;
		console.log(this.valueOf());
		
	} else {
		$(this).addClass('hero');
		$('.character').not(this).appendTo('.stage')//.addClass('enemies');
		isHeroChosen=true;
		console.log(this.valueOf());
	}


});

$('#attack').on('click', function() {

	if (character.elle.health <= 0) {
		return;
	} else if (character.oren.health <=0) {
			isDefenderChosen = false;
		}

	 else {

		character.elle.power += character.elle.power;
	character.elle.health -= character.oren.power;
	console.log("Elle Power: " + character.elle.power);
	console.log("Elle Health: " + character.elle.health);

	character.oren.health -= character.elle.power;
	console.log("Oren Power: " + character.oren.power);
	console.log("Oren Health: " + character.oren.health);
	console.log("_______________________________________");
	};
	
})

$('#restart').on('click', function() {

	initializeGame();
	
})


});

