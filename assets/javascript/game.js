
$(document).ready(function () {



$("#b").data({"name":"Beatrix Kiddo","health":120,"power": 8, "url":'assets/images/beatrix.jpeg',"healthSpanId": "bhealth"});
$("#e").data({"name":"Elle Driver","health":100,"power": 5, "url":'assets/images/elle.jpeg',"healthSpanId": "ehealth"});	
$("#v").data({"name":"Vernita Green","health":150,"power": 20, "url":'assets/images/vernita.jpeg', "healthSpanId": "vhealth"});	
$("#o").data({"name":"Oren Ishii","health":180,"power": 5, "url":'assets/images/oren.jpeg',"healthSpanId": "ohealth"});	

var heroHealth, defenderHealth, heroPower, defenderPower,heroId, defenderId, isHeroChosen, isDefenderChosen, heroLoses, defenderLoses, attackDefender;
initializeGame();


function initializeGame() {

	isHeroChosen = false;
	isDefenderChosen = false;
	heroLoses = false;
	defenderLoses = false;

	$(".character").css('display','inline');
	$(".character").removeClass(".defender hero");
	$('.character').prependTo('.start');
	$('#restart').css('display','none');
	$('.character').css('background-color', 'white');
	$('.character').css('color', 'black');
	document.getElementById("fight status").innerHTML = "";
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
		$(this).addClass('enemy');
		console.log(this);
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

var count = 1;
$('#attack').on('click', function() {
	if ($('.defender').html().length == 0) {
		document.getElementById("fight status").innerHTML = "No enemy here.";
		return;
	}
	else if (heroHealth <= 0) {
		document.getElementById("fight status").innerHTML = "You lose.";
		$('#restart').css('display','block');
			return;

	} else if ( $('.stage').html().length == 0 ) {
		$('#restart').css('display','block');
		document.getElementById("fight status").innerHTML = "You win! Click restart to play again."
		return;
	} else if (defenderHealth <= 0) {
			isDefenderChosen = false;
			$('.enemy').css('display','none');
			document.getElementById("fight status").innerHTML = "You have defeated " + defender + 
			"!  Choose another opponent";
			
		}

	 else {
	 	
	var attack = heroPower * count;
	count++;
	heroHealth -= defenderPower;
	document.getElementById(heroId).innerHTML = heroHealth;

	defenderHealth -= heroPower;
	document.getElementById(defenderId).innerHTML = defenderHealth;
	document.getElementById("fight status").innerHTML = "You have attacked " + defender + " for " + attack + " damage.  " + defender + " has attacked you for " +
	defenderPower + " damage."

	};
	
})


$('#restart').on('click', function() {
$('.character').prependTo('.start');
initializeGame();

})

});

