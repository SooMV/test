let form = document.querySelector('form');
let inputs = document.querySelectorAll('input');
let p = document.querySelector('p');

form.addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    let taille = inputs[1].value;
    let poids = inputs[0].value;
    console.log(poids, taille);

    // faire vérification entrée utilisateur 
    let imc = (poids / Math.pow(taille/100, 2)).toFixed(1);
    p.innerHTML = imc;

    if(imc < 18.5){
        p.innerHTML += ` Vous êtes en insuffisance pondérale`;
    }
    else if( imc >= 18.5 && imc <= 24.9){
        p.innerHTML += ` Vous êtes en normal`;
    }
    else if(imc >= 25 && imc <= 29.9){
        p.innerHTML += ' Vous êtes en surpoids';
    }
    else if(imc >= 30 && imc <= 34.9){
        p.innerHTML += ' Vous êtes en obésité modérée';
    }
    else if(imc >= 35 && imc <= 39.9){
        p.innerHTML += ' Vous êtes en obésité sévère';
    }
    else if(imc >= 40){
        p.innerHTML += ' Vous êtes en obésité morbide';
    }
};

