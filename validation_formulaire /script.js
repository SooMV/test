// Valider les données côté Front permet de soulager le travail du serveur tout en créant une bonne expérience pour l'utilisateur.
//   Plongez dans la doc MDN et amusez-vous avec les inputs d'un formulaire.

// A. Coder une interface basique
// Codez d'abord une interface très simple, contenant les éléments importants : boutons, inputs, liens, etc... 
// Rajoutez un peu de style si besoin est. 

// Puis codez les fonctionnalités JavaScript.

// B. Fonctionnalités JavaScript à coder pour ce projet

// 1. Gérer l'input "utilisateur", faites-en sorte qu'il passe la validation lorsque le pseudo fait plus de 3 caractères.
// 2. Paramètrez le second input afin qu'il reçoive un email, et qu'il montre un message d'alerte si la chaîne rentrée n'est pas au bon format, le tout à l'aide d'un regex.
// 3. Le mot de passe doit contenir au moins un symbole, une lettre minuscule et un chiffre.
// 4. Montrez la "force" du mot de passe en fonction de ce que l'on rentre dans l'input.
// - Si la longueur du mot de passe est entre 0 et 5 affichez : faible.
// - Si la longueur est supérieure ou égale à 6 et inférieure à 9 et qu'elle contient au moins un symbole ou  un chiffre, affichez : moyen
// - Si la longueur est supérieur ou égale à 9 et quelle contient au moins un symbole et un chiffre affichez : fort
// - Gérez la confirmation de mot de passe.
// - Enfin envoyez un .alert("données envoyées") si on appuie sur le bouton "Création du compte" en ayant passé tous les tets.

//  C. Ajoutez du style à l'interface afin de terminer le projet.


// input du pseudo
let inputs = document.querySelectorAll('input');
let shortPseudo = document.getElementById('shortPseudo');
let longPseudo = document.getElementById('longPseudo');
let consignePseudo = document.getElementById('consignePseudo');

inputs[0].addEventListener('input', inputName);

function inputName(e) {
    e.preventDefault();

    let userName = inputs[0].value;

    consignePseudo.innerHTML = "";

    if (userName.length < 3) {
        shortPseudo.style.display = 'inline-block';
        consignePseudo.innerHTML = 'Choisissez un pseudo contenant au moins 3 caractères';
        consignePseudo.style.color = 'red';
        consignePseudo.style.fontSize = '12px';
        longPseudo.style.display = 'none';
    } else {
        shortPseudo.style.display = 'none';
        longPseudo.style.display = 'inline-block';
        consignePseudo.innerHTML = 'Votre pseudo a la bonne longueur';
        consignePseudo.style.fontSize = '12px';
        consignePseudo.style.color = 'green';
    }
}

// input email
let wrongEmail = document.getElementById('wrongEmail');
let goodEmail = document.getElementById('goodEmail');
let consigneEmail = document.getElementById('consigneEmail');

let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,3}$/g;

inputs[1].addEventListener('input', inputEmail);

function inputEmail(e) {
    e.preventDefault();

    let userEmail = inputs[1].value;

    consigneEmail.innerHTML = "";

    if (!regex.test(userEmail)) {
        consigneEmail.innerHTML = 'Rentrez un email valide.';
        wrongEmail.style.display = 'inline-block';
        consigneEmail.style.color = 'red';
        consigneEmail.style.fontSize = '12px';
        goodEmail.style.display = 'none';
    } else {
        wrongEmail.style.display = 'none';
        goodEmail.style.display = 'inline-block';
        consigneEmail.innerHTML = 'Votre email est valide.';
        consigneEmail.style.fontSize = '12px';
        consigneEmail.style.color = 'green';
    }
}

// input password
let lowPassword = document.getElementById('lowPassword');
let middlePassword = document.getElementById('middlePassword');
let highPassword = document.getElementById('highPassword');
let consignePassword = document.getElementById('consignePassword');
let consignePasswordStrength = document.getElementById('consignePasswordStrength');

inputs[2].addEventListener('input', inputPassword);

function inputPassword(e) {
    e.preventDefault();

    let userPasswordValue = inputs[2].value;

    consignePassword.innerHTML = "";

    if (
        userPasswordValue.match(/[A-Z]/g) &&
        userPasswordValue.match(/[a-z]/g) &&
        userPasswordValue.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)
    ) {
        if (userPasswordValue.length <= 5) {
            lowPassword.style.display = 'inline-block';
            consignePasswordStrength.innerHTML = 'Faible';
            consignePasswordStrength.style.color = 'red';
            consignePasswordStrength.style.textAlign = 'center';
            consignePasswordStrength.style.fontSize = '18px';

        } else if (userPasswordValue.length <= 9) {
            lowPassword.style.display = 'inline-block';
            middlePassword.style.display = 'inline-block';
            consignePasswordStrength.innerHTML = 'Moyen';
            consignePasswordStrength.style.color = 'orange';
            consignePasswordStrength.style.fontSize = '18px';
            consignePasswordStrength.style.textAlign = 'center';

        } else {
            lowPassword.style.display = 'inline-block';
            middlePassword.style.display = 'inline-block';
            highPassword.style.display = 'inline-block';
            consignePasswordStrength.innerHTML = 'Fort';
            consignePasswordStrength.style.color = 'green';
            consignePasswordStrength.style.fontSize = '18px';
            consignePasswordStrength.style.textAlign = 'center';
        }
    }
}

// input confirmation du password

let wrongPassword = document.getElementById('wrongPassword');
let goodPassword = document.getElementById('goodPassword');
let passwordConfirm = document.getElementById('passwordConfirm');
let consigneConfirm = document.getElementById('consigneConfirm');

passwordConfirm.addEventListener('input', validatePassword);

function validatePassword(e) {
    e.preventDefault();

    let userPassword = inputs[2].value;
    let confirmPassword = inputs[3].value;

    if (userPassword === confirmPassword) {
        goodPassword.style.display = 'inline-block';
        wrongPassword.style.display = 'none';
        consigneConfirm.innerHTML = 'Les mots de passe sont identiques !';
        consigneConfirm.style.color = 'green';
        consigneConfirm.style.fontSize = '12px';
    } else {
        goodPassword.style.display = 'none';
        wrongPassword.style.display = 'inline-block';
        consigneConfirm.innerHTML = 'Réessaie ! Les mots de passe ne sont pas identiques';
        consigneConfirm.style.color = 'red';
        consigneConfirm.style.fontSize = '12px';
    }
}

// Soumission du formulaire

let submitButton = document.querySelector('#submit');


submitButton.addEventListener('click', submitForm);

function submitForm(e) {
    e.preventDefault();

    let container = document.querySelector('#container');
    let userName = inputs[0].value;
    let userEmail = inputs[1].value;
    let userPassword = inputs[2].value;
    let confirmPassword = inputs[3].value;

    if (
        userName.validity.valid &&
        userEmail.validity.valid &&
        userPassword.validity.valid &&
        confirmPassword.validity.valid
    ) {
        alert('Félicitation, les données sont envoyées !');
    } else {
        alert('Il y a une erreur ! Réessaie...');
        container.style.animate(
            [
                { transform: 'translateX(8px)' },
                { transform: 'translateX(-8px)' },
                { transform: 'translateX(8px)' },
            ],
            {
                duration: 200,
            }
        );
    }
}
