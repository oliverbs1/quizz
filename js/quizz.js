$("#sub").click(function () {
    $.post($("#myForm").attr("action"),
        $("#myForm :input").serializeArray(),
        function (info) {
            $("#result").html(info);
        });
    clearInput();
});



$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});


var quizz = [
    {
        "question": "1 - Le terme « scrum » signifie :",
        "reponses": ["Mélange", "Macedoine", "Mixture", "Mêlée"],
        "solution": 3
    }, {
        "question": "2 - Laquelle de ces propositions n’est pas une approche de la motivation ?",
        "reponses": ["Par les valeurs", "Par les besoins", "Par la simulation", "Par la stimulation"],
        "solution": 2
    }, {
        "question": "3 - Les tâches nécessitant la contribution de plusieurs ressources sont dites :",
        "reponses": ["Additives", "Communes", "Indispensables", "Disjointes"],
        "solution": 0
    },
    {
        "question": "4 - Les méthodes agiles ont pour objectif principal d’améliorer…",
        "reponses": ["Les temps de développement", "La satisfaction", "La rentabilité", "Le confort des ressources"],
        "solution": 1
    }, {
        "question": "5 - On peut définir Scrum comme…",
        "reponses": ["Une méthode de développement", "Un recueil de bonnes pratiques", "Un cadre méthodologique", "Une méthode de créativité"],
        "solution": 2
    }, {
        "question": "6 - Les 3 pilliers de Scrum sont :",
        "reponses": ["Planning, démo, rétrospective", "Transparence, inspection, adaptation", "Kaizen, écoute, partage", "Travail, recette, livraison"],
        "solution": 1
    }, {
        "question": "7 - L’agilité permet d’éviter…",
        "reponses": ["L’effet caverne", "L’effet viaduc", "L’effet brouillard", "L’effet tunnel"],
        "solution": 3
    }, {
        "question": "8 - Scrum propose une approche…",
        "reponses": ["Incrémentale réactive", "Incrémentale itérative", "Fondamentale participative", "Expérimentale créative"],
        "solution": 1
    }, {
        "question": "9 - Les 3 pilliers de Scrum sont basés sur une démarche…",
        "reponses": ["critique", "réaliste", "empirique", "méthodique"],
        "solution": 2
    }, {
        "question": "10 - Les tâches nécessitant la contribution de plusieurs ressources sont dites :",
        "reponses": ["Additives", "Communes", "Indispensables", "Disjointes"],
        "solution": 0
    },
];
var q = 0;
var timer = undefined;



var reponseTableau = [];





function starttimer(duration) {
    timer = setInterval(function () {
        var minutes = parseInt(duration / 60, 10);
        var seconds = parseInt(duration % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        //console.log(minutes+':'+seconds);

        duration--;
        if (duration == 0) {
            //alert('FIN'); // next question
        }
    }, 1000);
}

function stoptimer() {
    clearInterval(timer);
}








$("#click").click(function () {
    $("#middle").hide();
    $("#show").show(2000);
});









console.log(quizz);

function showQuestion(number) {

    var question = '<div class="questionShow">' + quizz[number].question + '</div>';

    var responses = "";

    for (var y = 0; y < quizz[number].reponses.length; y++) {

        responses += '<div class="reponseBlock"><a href="#" class="buttonResponse" data-response="' + y + '">' + quizz[number].reponses[y] + '</a></div>';
        console.log(responses);
    }

    $(".reponseQ").html(responses);

    starttimer(60);

    //    var oneMinutes = 60 * 1,
    //        display = document.querySelector('#time');
    //    startTimer(oneMinutes, display);

    // 1er question
    $(".question").html(question);

}

$(".reponseQ").on('click', ".buttonResponse", function () {

    stoptimer();

    $(this).toggleClass("active");

    var response = $(this).attr("data-response");
    console.log(response);


    var element1 = document.getElementById("deleteQuestion");
    var element2 = document.getElementById("deleteReponse");
    var element3 = document.getElementById("time");


    if (response == quizz[q].solution) {
        console.log('ok');
        score++;

    } else {
        console.log("t trop con")

    }


    reponseTableau.push(response);
    console.log(reponseTableau);


    // compare la longeur du tableau
    if (quizz.length - 1 == q) {

        console.log('fin');
        element1.parentNode.removeChild(element1);
        element2.parentNode.removeChild(element2);
        element3.parentNode.removeChild(element3);
        $(".container").append('<h2 class="merci">Merci d\'avoir joué avec nous</h2><p class="buttonEndQuizz">Vérifier les réponses</p><a href="quizzRep.php"><button class="open">Cliquez ici</button></a><div id="score"><p>Votre score est de</p> 0</div>')
        endQuizz();

    } else {
        // on incrémente l'index
        q += 1;
        // on affiche la question suivante
        showQuestion(q);
    }
    document.getElementById("score").innerHTML = '<div id="score">Votre score est de ' + score + '/10</div>';
});


// fin du quizz et calculer le score du joueur

var points = 15;
var score = 0;

function endQuizz() {
    $("h3").text("");
    for (var d = 0; d < reponseTableau.length; d++) {
        //$("h3").append($("#"+d+"").text());
        console.log(parseInt(reponseTableau[d]));
        console.log(parseInt(quizz[d].solution));


        var comparaisonResponse = parseInt(reponseTableau[d]) !== parseInt(quizz[d].solution);

        if (comparaisonResponse) {
            console.log('faux');


        } else {
            console.log('vrai');
        }

    }


}

$("#click2").click(function () {
    $("#hideButton2").hide();
    $("#textAdd").hide();
    $("#showQuestion").show(0, function () {
        showQuestion(q);
    });
});

var num = 15;

var modalBtn = document.querySelector('.open');
var closeBtn = document.querySelector('.close');

var modalContainer = document.querySelector('.modals');
var holdModals = document.createDocumentFragment();

for (var i = 0; i < num; i++) {
    var div = document.createElement('div');
    div.classList.add('modal-drop');
    div.style.top = Math.floor((Math.random() * 100)) + 'vh';
    div.style.left = Math.floor((Math.random() * 100)) + 'vw';
    div.style.transitionDelay = Math.random() + 's';
    holdModals.appendChild(div);
}
console.log();
modalContainer.appendChild(holdModals);

modalBtn.addEventListener('click', function () {
    modalContainer.style.display = 'block';
    window.setTimeout(function () {
        modalContainer.classList.add('active');
    }, 0.1);
});

closeBtn.addEventListener('click', function () {
    modalContainer.classList.remove('active');

    window.setTimeout(function () {
        modalContainer.style.display = 'none';
    }, 3000);
});