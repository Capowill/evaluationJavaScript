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
    var regexNom = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
    if (!regexNom.test(champ.value)) // On utilise la methode test de notre regExp sur le texte saisi par l'utilisateur dans le champ nom. Si elle renvoie true cela signifie que les conditions de notre regExp ne sont pas respectées
    {
        surligne(champ, true); // on appelle la fonction surligne avec true en deuxième paramètre donc notre champ est coloré
        return false; // on renvoie false pour notre fonction verifNom
    }
    else if (nom === "") // On s'assure que le champ n'est pas laissé vide par l'utilisateur
    {
        surligne(champ, true); // on appelle la fonction surligne avec true en deuxième paramètre donc notre champ est coloré
        return false; // on renvoie false pour notre fonction verifNom
    }
    else
    {
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
//Mega fonction
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
console.log(verifForm(this));