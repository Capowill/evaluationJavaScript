/**
 * Effectuez le contrôle de saisie de votre formulaire Jarditou en Javascript.
 * Lorsqu'une erreur est détectée,
 * l'utilisateur doit en être informé grâce à l'affichage d'un message sous le champ concerné.
 * Le formulaire ne peut être envoyé que lorsque tout est bon.
 */

// On informe l'utilisateur au fur et à mesure qu'il avance dans le formulaire de la validité ou non de ce qu'il saisi(pour les champs obligatoires)

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

/* Lorsque l'utilisateur clique sur le bouton submit, la fonction ValidationEvent s'exécute :
si les données saisies dans les champs obligatoires ne sont pas valides, 
le formulaire n'est pas envoyé */
document.getElementById("monFormulaire").addEventListener("submit", ValidationEvent);

function ValidationEvent() {
    // On enregistre les valeurs des champs dans des variables 

    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;

    // Nos RegExp
    var regexNom = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
    var regexPrenom = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
    var regexEMail = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/g;

    // Conditions
    if (nom != "" && prenom != "" && email != "") { // On ne veut pas de champs vides
        if (nom.match(regexNom)) { // condition pour la regExp du nom
            if (prenom.match(regexPrenom)) { // condition pour la regExp du prenom
                if (email.match(regexEMail)) { // condition pour la regExp de l'email
                    if (document.getElementById("masculin").checked || document.getElementById("feminin").checked) { // condition pour que soit coché au moins un sexe
                        alert("All type of validation has done on OnSubmit event.");
                        return true;
                    } else {
                        alert("Vous devez choisir un genre.....!");
                        return false;
                    }
                } else {
                    alert("L'adresse mail n'est pas valide...!!!");
                    return false;
                }
            } else {
                alert("Vous devez remplir tous les champs obligatoires.....!");
                return false;
            }
        }
    }
};
console.log(ValidationEvent());