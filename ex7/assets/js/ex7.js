/**
 * Effectuez le contrôle de saisie de votre formulaire Jarditou en Javascript.
 * Lorsqu'une erreur est détectée,
 * l'utilisateur doit en être informé grâce à l'affichage d'un message sous le champ concerné.
 * Le formulaire ne peut être envoyé que lorsque tout est bon.
 */

document.getElementById("nom").addEventListener("blur", function (e) {
    var validiteNom = "";
    var nom = e.target.value;
    var regexNom = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
    if (regexNom.test(nom) === false && nom !== "") {
        validiteNom = "Le nom saisi n'est pas valide.";
    }
    else if (nom === "") {
        validiteNom = "Vous devez saisir votre nom."
    } 
    document.getElementById("aideNom").textContent = validiteNom;
});

document.getElementById("prenom").addEventListener("blur", function (e) {
    var validitePrenom = "";
    var prenom = e.target.value;
    var regexPrenom = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
    if (regexPrenom.test(prenom) === false && prenom !== "") {
        validitePrenom = "Le prénom saisi n'est pas valide.";
    }
    else if (prenom === "") {
        validitePrenom = "Vous devez saisir votre prénom."
    }
    document.getElementById("aidePrenom").textContent = validitePrenom;
});

document.getElementById("email").addEventListener("blur", function (e) {
    var validiteEMail = "";
    var email = e.target.value;
    var regexEMail = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/g;
    if (regexEMail.test(email) === false && email !== "") {
        validiteEMail = "L'adresse mail saisie n'est pas valide.";
    }
    else if (email === "") {
        validiteEMail = "Vous devez saisir votre adresse mail."
    }
    document.getElementById("aideEMail").textContent = validiteEMail;
});

function verifForm() // On créé une méga fonction  
{
    var invalid = [];

    // Gets all the forms element values
    var nom = document.getElementsByName("nom")[0].value;
    var prenom = document.getElementsByName("prenom")[0].value;
    var email = document.getElementsByName("email")[0].value;

    //On vérifie que le champs nom est valide (par rapport au regExp) et qu'il n'est pas vide
    if (regexNom.test(nom) === false && nom !== "") {
        invalid[0] = true;
    } else if (nom === "") {
        invalid[0] = true;
    } else {
        invalid[0] = false;
    }

    // On vérifie que le champs prenom est valide et qu'il n'est pas vide
    if (regexPrenom.test(prenom) === false && prenom !== "") {
        invalid[1] = true;
    } else if (prenom === "") {
        invalid[1] = true;
    } else {
        invalid[1] = false;
    }

    // On vérifie que le champs email est valide et qu'il n'est pas vide
    if (regexEMail.test(email) === false && email !== "") {
        invalid[3] = true;
    } else if (email === "") {
        invalid[3] = true;
    } else {
        invalid[3] = false;
    }

    return invalid;
};


document.getElementById("formulaireDeContact").addEventListener("submit", function (e) {
    // On empêche l'utilisateur de valider son formulaire
    e.preventDefault();

    // On vérifie la valeur saisie par l'utilisateur
    var invalid = verifForm();
    // Si la saisie contient des erreurs on renvoie la valeur false sinon si tout est ok on renvoie la valeur true
    var valid = invalid.includes(true) ? false : true;

    // Le formulaire est valide(true) donc on peut le soumettre
    if (valid) {
        document.getElementById("formulaireDeContact").submit();
    }
});
