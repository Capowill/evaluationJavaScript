/**
 * Effectuez le contrôle de saisie de votre formulaire Jarditou en Javascript.
 * Lorsqu'une erreur est détectée,
 * l'utilisateur doit en être informé grâce à l'affichage d'un message sous le champ concerné.
 * Le formulaire ne peut être envoyé que lorsque tout est bon.
 */

function verifForm() // On créé une méga fonction  
{
    var invalid = [];

    // RegExp utilisées pour la validation du formulaire
    var regexNom = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
    var regexMail = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/g;

    // Gets all the error elements in order to show the elements
    var nomErreur = document.getElementById("nomErreur");
    var prenomErreur = document.getElementById("prenomErreur");
    var emailErreur = document.getElementById("emailErreur");

    // Gets all the forms element values
    var nom = document.getElementsByName("nom")[0].value;
    var prenom = document.getElementsByName("prenom")[0].value;
    var email = document.getElementsByName("email")[0].value;

    //On vérifie que le champs nom est valide (par rapport au regExp) et qu'il n'est pas vide
    if (regexNom.test(nom) === false && nom !== "") {
        nomErreur.innerText = "Le nom saisi n'est pas valide.";
        nomErreur.style.display = "inline";
        invalid[0] = true;
    } else if (nom === "") {
        nomErreur.innerText = "Le nom est requis.";
        nomErreur.style.display = "inline";
        invalid[0] = true;
    } else {
        nomErreur.style.visibility = "hidden"; // il n'y a pas de message d'erreur qui apparaît car l'element nomErreur ne sera pas affiché
        invalid[0] = false;
    }

    // On vérifie que le champs prenom est valide et qu'il n'est pas vide
    if (regexNom.test(prenom) === false && prenom !== "") {
        prenomErreur.innerText = "Le prénom saisi n'est pas valide.";
        prenomErreur.style.display = "inline";
        invalid[1] = true;
    } else if (prenom === "") {
        prenomErreur.innerText = "Le prénom est requis.";
        prenomErreur.style.display = "inline";
        invalid[1] = true;
    } else {
        prenomErreur.style.visibility = "hidden";
        invalid[1] = false;
    }

    // On vérifie que le champs email est valide et qu'il n'est pas vide
    if (regexMail.test(email) === false && email !== "") {
        emailErreur.innerText = "L'email saisi n'est pas valide.";
        emailErreur.style.display = "inline";
        invalid[3] = true;
    } else if (email === "") {
        emailErreur.innerText = "L'email est requis.";
        emailErreur.style.display = "inline";
        invalid[3] = true;
    } else {
        emailErreur.style.visibility = "hidden";
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
