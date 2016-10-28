$(document).ready(function() {

    $("#b").data({
        "name": "Beatrix Kiddo",
        "health": 120,
        "power": 12,
        "url": 'assets/images/beatrix.jpeg',
        "healthSpanId": "bhealth",
        "music": "assets/audio/beatrix.mp3"
    });
    $("#e").data({
        "name": "Elle Driver",
        "health": 100,
        "power": 11,
        "url": 'assets/images/elle.jpeg',
        "healthSpanId": "ehealth",
        "music": "assets/audio/whistle.mp3"
    });
    $("#v").data({
        "name": "Vernita Green",
        "health": 150,
        "power": 15,
        "url": 'assets/images/vernita.jpeg',
        "healthSpanId": "vhealth",
        "music": "assets/audio/vernita.mp3"
    });
    $("#o").data({
        "name": "Oren Ishii",
        "health": 180,
        "power": 10,
        "url": 'assets/images/oren.jpeg',
        "healthSpanId": "ohealth",
        "music": "assets/audio/oren.mp3"
    });


    var heroHealth, defenderHealth, heroPower, defenderPower, heroId, defenderId, isHeroChosen, isDefenderChosen, heroLoses, defenderLoses, attack, audio;
    
    initializeGame();


    function initializeGame() {

        isHeroChosen = false;
        isDefenderChosen = false;
        heroLoses = false;
        defenderLoses = false;
        attack = 0;
        count = 1;

        $(".character").css('display', 'inline');
        $(".character").removeClass(".defender hero enemy");
        $('.character').prependTo('.start');
        $('#restart').css('display', 'none');
        $('.character').css('background-color', 'white');
        $('.character').css('color', 'black');

        $("#b").data({
            "health": 120,
            "power": 8
        });
        $("#e").data({
            "health": 100,
            "power": 5
        });
        $("#v").data({
            "health": 150,
            "power": 20
        });
        $("#o").data({
            "health": 180,
            "power": 5
        });


       $("#status").html(" ");
        document.getElementById("beatrix").src = $("#b").data("url");
        $("#bname").html($("#b").data("name"));
        $("#bhealth").html($("#b").data("health"));
        document.getElementById("vernita").src = $("#v").data("url");
        $("#vname").html($("#v").data("name"));
        $("#vhealth").html($("#v").data("health"));
        document.getElementById("elle").src = $("#e").data("url");
        $("#ename").html($("#e").data("name"));
        $("#ehealth").html($("#e").data("health"));
        document.getElementById("oren").src = $("#o").data("url");
        $("#oname").html($("#o").data("name"));
        $("#ohealth").html($("#o").data("health"));


    }


    //Click event to choose hero. Others are moved to the staging row//
    $('.character').on('click', function() {

        if (isDefenderChosen) {
            return;

        } else if (isHeroChosen) {
            $(".defender").append($(this));
            console.log(this);
            $(this).addClass('enemy');
            $(this).css('background-color', 'black');
            $(this).css('color', 'white');
            isDefenderChosen = true;
            defender = ($(this).data("name"));
            defenderHealth = ($(this).data("health"));
            defenderPower = ($(this).data("power"));
            defenderId = ($(this).data("healthSpanId"));
            audio = new Audio($(this).data("music"));
            audio.play();
            setTimeout(function() {
                audio.pause();
            }, 7000);


        } else {
            $(this).addClass('hero');
            $('.character').not(this).appendTo('.stage');
            $('.character').not(this).css('background-color', 'red');
            isHeroChosen = true;
            hero = ($(this).data("name"));
            heroHealth = ($(this).data("health"));
            heroPower = ($(this).data("power"));
            heroId = ($(this).data("healthSpanId"));


        }
    });

    var count = 1;
    $('#attack').on('click', function() {
        if ($('.defender').html().length == 0) {
            $("#status").html("No enemy here.");
            return;
        } else if (heroHealth < 1) {
            $("#status").html("You lose.");
            $('#restart').css('display', 'block');
            return;

        } else if ($('.stage').html().length == 0) {
            $('#restart').css('display', 'block');
            $("#status").html("You win! Click restart to play again.");
            return;

        } else if (defenderHealth < attack) {
            isDefenderChosen = false;
            $('.enemy').css('display', 'none');
            $("#status").html("You have defeated " + defender + "!  Choose another opponent");

        } else {

            attack = heroPower * count;
            count++;
            heroHealth -= defenderPower;
            console.log(heroPower);
            console.log(attack);
            console.log("............");
            document.getElementById(heroId).innerHTML = heroHealth;
            defenderHealth -= attack;
            document.getElementById(defenderId).innerHTML = defenderHealth;
            $("#status").html("You have attacked " + defender + " for " + attack + " damage.  " + defender + " has attacked you for " +
                defenderPower + " damage.");

        };

    })


$('#restart').on('click', function() {


        initializeGame();

    })

});