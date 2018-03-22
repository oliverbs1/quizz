<?php

include_once 'header.php';

?>

    <div id="middle">
        <div class="blocTittle">
            <h1>JPO Quizz</h1>
            <p class="sousTittre">Bienvenue Futur Webstarteur</p>

            <button id="click" type="button" class="btn btn-primary design" data-dismiss="modal">Commencer</button>

        </div>
    </div>



    <div id="show">
        <header>
            <h1>JPO Quizz</h1>
        </header>
        <main class="outer2">
            <div class="borderQuizz">

                <div id="hideButton2">
                    <!-- <img id="img" src="img/gif.gif" alt="gif">-->
                    <p id="marginP" class="sousTittre">Voici pour vous le Grand Test Webstart</p>
                    <p id="marginA" class="sousTittre">Vous avez 10 secondes pour répondre à chaque question</p>
                    <p id="marginA" class="sousTittre">Maintenant faite vos jeux</p>
                    <button id="click2" type="button" class="btn btn-primary design">Commencer</button>
                </div>


                <div id="showQuestion">
                    <div class="container">
                        <!--
<div class="countdown countdown--wide" id="countdown">
<div class="countdown__fill" id="ticker"></div>
<div class="countdown__digit" id="seconds">00</div>

</div>
--><span id="time"></span>
                        <div class="question" id="deleteQuestion"></div>



                        <div class="reponseQ" id="deleteReponse"></div>

                        <!--              </div><a class="full-button" id="toggle">Toggle size</a>-->
                    </div>



                </div>

        </main>

        </div>


        <!--<div class="timer">30</div>-->



    </div>



    <?php

include 'footer.php';

?>