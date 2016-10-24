
$(document).ready(function () {

$("#b").data({"name":"Beatrix Kiddo","health":180,"power": 8, "url":'assets/images/beatrix.jpeg',"healthSpanId": "bhealth"});
$("#e").data({"name":"Elle Driver","health":100,"power": 10, "url":'assets/images/elle.jpeg',"healthSpanId": "ehealth"});	
$("#v").data({"name":"Vernita Green","health":200,"power": 15, "url":'assets/images/vernita.jpeg', "healthSpanId": "vhealth"});	
$("#o").data({"name":"Oren Ishii","health":160,"power": 20, "url":'assets/images/oren.jpeg',"healthSpanId": "ohealth"});	

// $(".character").click(function(){
// 	alert($(this).data("health"));
// });

var heroHealth, defenderHealth, heroPower, defenderPower,heroId, defenderId, isHeroChosen, isDefenderChosen, heroLoses, defenderLoses, attackDefender;
initializeGame();

function initializeGame() {

	isHeroChosen = false;
	isDefenderChosen = false;
	heroLoses = false;
	defenderLoses = false;


	document.getElementById("beatrix").src = $("#b").data("url");
	document.getElementById("bname").innerHTML = $("#b").data("name");
	document.getElementById("bhealth").innerHTML = $("#b").data("health");
	document.getElementById("vernita").src = $("#v").data("url");
	document.getElementById("vname").innerHTML = $("#v").data("name");
	document.getElementById("vhealth").innerHTML = $("#v").data("health");
	document.getElementById("elle").src = $("#e").data("url");
	document.getElementById("ename").innerHTML = $("#e").data("name");
	document.getElementById("ehealth").innerHTML = $("#e").data("health");
	document.getElementById("oren").src = $("#o").data("url");
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
		defender = ($(this).data("name"));
		defenderHealth = ($(this).data("health"));
		defenderPower = ($(this).data("power"));
		defenderId = ($(this).data("healthSpanId"));

		
	} else {
		$(this).addClass('hero');
		$('.character').not(this).appendTo('.stage');
		$('.character').not(this).css('background-color', 'red');
		isHeroChosen=true;
		hero = ($(this).data("name"));
		heroHealth = ($(this).data("health"));
		heroPower = ($(this).data("power"));
		heroId = ($(this).data("healthSpanId"));

}
});


$('#attack').on('click', function() {

	if (heroHealth <= 0) {
		document.getElementById("fight status").innerHTML = "You lose."
		return;

	} else if (defenderHealth <= 0) {
			isDefenderChosen = false;
			document.getElementById("fight status").innerHTML = "You win!"
		}

	 else {

		heroPower += heroPower;
	heroHealth -= defenderPower;
	document.getElementById(heroId).innerHTML = heroHealth;

	defenderHealth -= heroPower;
	document.getElementById(defenderId).innerHTML = defenderHealth;
	document.getElementById("fight status").innerHTML = "You have attacked " + defender + " for " + heroPower + " damage.  " + defender + " has attacked you for " +
	defenderPower + " damage."

	};
	
})

$('#restart').on('click', function() {

	initializeGame();
	
})


});

