/**
 * Effectuez le contrôle de saisie de votre formulaire Jarditou en Javascript.
 * Lorsqu'une erreur est détectée,
 * l'utilisateur doit en être informé grâce à l'affichage d'un message sous le champ concerné.
 * Le formulaire ne peut être envoyé que lorsque tout est bon.
 */

// On informe l'utilisateur au fur et à mesure qu'il avance dans le formulaire de la validité ou non de ce qu'il saisi(pour les champs obligatoires)
// Afin d'informer l'utilisateur de son erreur on va colorer le champ en rouge pâle
function surligne(champ, erreur)
{
    if (erreur) // si le second parametre de notre fonction vaut true, la fonction colore le champ
    {
    champ.style.backgroundColor = "#fba";
    }
    else
    {
    champ.style.backgroundColor = ""; //Pour effacer le coloriage
    }
};

function verifNom(champ)
{
    var aideNom = document.getElementbyId("aideNom")
    var regexNom = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
    if (!regexNom.test(champ.value)) // On utilise la methode test de notre regExp sur le texte saisi par l'utilisateur dans le champ nom. Si elle renvoie true cela signifie que les conditions de notre regExp ne sont pas respectées
    {
        aideNom.innerText = "Le nom saisi n'est pas valide.";
        aideNom.style.display ="inline";
        surligne(champ, true); // on appelle la fonction surligne avec true en deuxième paramètre donc notre champ est coloré
        return false; // on renvoie false pour notre fonction verifNom
    }
    else if (nom === "") // On s'assure que le champ n'est pas laissé vide par l'utilisateur
    {
        aideNom.innerText = "Vous devez saisir votre nom."
        aideNom.style.display = "inline";
        surligne(champ, true); // on appelle la fonction surligne avec true en deuxième paramètre donc notre champ est coloré
        return false; // on renvoie false pour notre fonction verifNom
    }
    else
    {
        aideNom.style.display = "none";
        surligne(champ, false); // on appelle la fonction surligne avec false en deuxième paramètre donc notre champ n'est pas coloré
        return true; // on renvoie true pour notre fonction verifNom
    }
};

function verifPrenom(champ)
{
    var regexPrenom = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
    if (!regexPrenom.test(champ.value))
    {
        surligne(champ, true);
        return false;
    }
    else if (prenom === "")
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
};

function verifEMail(champ)
{
    var regexEMail = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/g;
    if (!regexEMail.test(champ.value))
    {
        surligne(champ, true);
        return false;
    }
    else if (email === "")
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
};

function verifForm(f)
{
    var nomOk = verifNom(f.nom);
    var prenomOk = verifPrenom(f.prenom);
    var eMailOk = verifEMail(f.email);

    if (nomOk && prenomOk && eMailOk)
    {
        return true;
    }
    else
    {
        return false;
    }
};

/*
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

Lorsque l'utilisateur clique sur le bouton submit, la fonction ValidationEvent s'exécute :
si les données saisies dans les champs obligatoires ne sont pas valides, 
le formulaire n'est pas envoyé 
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
*/