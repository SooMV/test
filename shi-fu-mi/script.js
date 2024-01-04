let images = document.querySelectorAll('img');
let repResult = document.querySelector('#repResult');
let rep = document.querySelector('#rep');
let score = document.querySelector('#score');
let arbitre = document.querySelector('#arbitre');
let button = document.querySelector('#reset');

let scoreUtil = 0;
let scoreOrdi = 0;
let endGame = false;

button.addEventListener('click', reset);

images.forEach(img => {
    img.addEventListener('click', respon);
});

function respon(e) {
    if(!endGame){
    let user = e.target.id;
    let pfc = ["pierre", "feuille", "ciseaux"];
    let ordi = Math.floor(Math.random() * pfc.length);

    rep.innerHTML = 'Vous avez choisi ' + user + " et le robot a choisi " + pfc[ordi];

    if (user === pfc[ordi]) {
        repResult.innerHTML = 'Match nul !';
        repResult.style.color = 'grey';
    } else if ((user === "pierre" && pfc[ordi] === "ciseaux") ||
        (user === "feuille" && pfc[ordi] === "pierre") ||
        (user === "ciseaux" && pfc[ordi] === "feuille")) {
        repResult.innerHTML = "<strong>Gagner</strong>!";
        repResult.style.color = 'green';
        scoreUtil++;
    } else {
        repResult.innerHTML = "<strong>Perdu</strong>";
        repResult.style.color = 'red';
        scoreOrdi++;
    }

    score.innerHTML = 'Votre score est de ' + scoreUtil + ' et le score de l\'ordi est de ' + scoreOrdi;

    if(scoreUtil === 5 || scoreOrdi === 5){
        arbitre.innerHTML = "<img src='arbitre.jfif' alt='arbitre' ><br> c'est fini !";
        arbitre.innerHTML +=  (scoreUtil === 5) ? ' Vous avez gagné' : ' Vous avez perdu';
        endGame = true;
        button.style.display ='block';
    }
}};

function reset(){
    scoreOrdi = 0;
    scoreUtil = 0;
    endGame = false;
    arbitre.innerHTML = "";
    repResult.innerHTML = "";
    rep.innerHTML = "";
    score.innerHTML = "";
    button.style.display= "none"; 
}