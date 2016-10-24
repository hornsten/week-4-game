
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
		power: 15
	},

	oren: {
		name: 'O-ren Ishii',
		url: 'assets/images/oren.jpeg',
		health: 160,
		power: 15
	}
}

$("#b").data({"name":"Beatrix Kiddo","health":180,"power": 8, "url":'assets/images/beatrix.jpeg'});
$("#e").data({"name":"Elle Driver","health":100,"power": 10});	
$("#v").data({"name":"Vernita Green","health":200,"power": 15});	
$("#o").data({"name":"Oren Ishii","health":160,"power": 20});	

// $(".character").click(function(){
// 	alert($(this).data("health"));
// });

var hero, defender, isHeroChosen, isDefenderChosen, heroLoses, defenderLoses, attackDefender;
initializeGame();

function initializeGame() {

	isHeroChosen = false;
	isDefenderChosen = false;
	heroLoses = false;
	defenderLoses = false;


	document.getElementById("beatrix").src = character.beatrix.url;
	document.getElementById("bname").innerHTML = $("#b").data("name");
	document.getElementById("bhealth").innerHTML = $("#b").data("health");
	document.getElementById("vernita").src = character.vernita.url;
	document.getElementById("vname").innerHTML = $("#v").data("name");
	document.getElementById("vhealth").innerHTML = $("#v").data("health");
	document.getElementById("elle").src = character.elle.url;
	document.getElementById("ename").innerHTML = $("#e").data("name");
	document.getElementById("ehealth").innerHTML = $("#e").data("health");
	document.getElementById("oren").src = character.oren.url;
	document.getElementById("oname").innerHTML = $("#o").data("name");
	document.getElementById("ohealth").innerHTML = $("#o").data("health");
}

//Click event to choose hero. Others are moved to the staging row//
//Click event to choose hero. Others are moved to the staging row//
$('.character').on('click', function() {

	if(isDefenderChosen) {
		return;

	} else if(isHeroChosen) {
		$(".defender" ).append($(this));
		$(this).css('background-color', 'black');
		$(this).css('color', 'white');
		isDefenderChosen = true;
		alert($(this).data("health"));
		
	} else {
		$(this).addClass('hero');
		$('.character').not(this).appendTo('.stage');
		$('.character').not(this).css('background-color', 'red');
		isHeroChosen=true;
		alert($(this).data("health"));
	}


});


$('#attack').on('click', function() {

	if (character.elle.health <= 0) {
		document.getElementById("fight status").innerHTML = "You lose."
		return;

	} else if (character.oren.health <=0) {
			isDefenderChosen = false;
			document.getElementById("fight status").innerHTML = "You win!"
		}

	 else {

		character.elle.power += character.elle.power;
	character.elle.health -= character.oren.power;
	console.log("Elle Power: " + character.elle.power);
	document.getElementById("ehealth").innerHTML = character.elle.health;

	character.oren.health -= character.elle.power;
	console.log("Oren Power: " + character.oren.power);
	document.getElementById("ohealth").innerHTML = character.oren.health;
	document.getElementById("fight status").innerHTML = "You have attacked Oren" +
	" for " + character.elle.power + " damage. Oren has attacked you for " +
	character.oren.power + " damage."
	};
	
})

$('#restart').on('click', function() {

	initializeGame();
	
})


});

