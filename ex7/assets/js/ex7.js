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
        alert("Afin d'envoyer le formulaire vous devez remplir tous les champs en rouge")
        return false;
    }
};

/* ESSAI -- NE PAS EN TENIR COMPTE
// NOM
// On souhaite informer au fur et à mesure l'utilisateur de la validité des données qu'il saisit c'est-à-dire lorsqu'un champ dans lequel il effectue une saisie perd le focus (blur)

var nom = document.getElementById("nom");
var aideNom = document.getElementById("aideNom"); 
var regexNom = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

document.getElementById("nom").addEventListener("blur", function (e) {
    var validiteNom = "";
    var nom = e.target.value;
    if (regexNom.test(nom) === false && nom !== "") { // si l'utilisateur a saisi des données dans le champ mais qu'elles sont invalides par rapport à notre regExp
        validiteNom = "Le nom saisi n'est pas valide."; // on affecte à la variable validiteNom une chaîne correspondant au message d'erreur à afficher
        document.getElementById("nom").style.backgroundColor="#ffdcbf"; // on colore en orange pâle le champ où la donnée saisie n'est pas valide
    }
    else if (nom === "") { // si l'utilisateur laisse le champ vide
        validiteNom = "Vous devez saisir votre nom."
        document.getElementById("nom").style.backgroundColor="#ffdcbf"; // on colore en orange pâle le champ où la donnée saisie n'est pas valide
    }
    else
    {
    }
    document.getElementById("aideNom").textContent = validiteNom; // on affiche un message d'aide pour l'utilisateur sous le champ qui comporte un message d'erreur 
}); 


// PRENOM
var prenom = document.getElementById("prenom");
var aidePrenom = document.getElementById("aidePrenom"); 
var regexPrenom = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

document.getElementById("prenom").addEventListener("blur", function (e) {
    var validitePrenom = "";
    var prenom = e.target.value;
    if (regexPrenom.test(prenom) === false && prenom !== "") { 
        validitePrenom = "Le prénom saisi n'est pas valide."; 
        document.getElementById("prenom").style.backgroundColor="#ffdcbf"; 
    }
    else if (prenom === "") { 
        validitePrenom = "Vous devez saisir votre prénom.";
        document.getElementById("prenom").style.backgroundColor="#ffdcbf"; 
    }
    else
    {       
    }
    document.getElementById("aidePrenom").textContent = validitePrenom;     
});

// EMAIL
var email = document.getElementById("email");
var aideEMail = document.getElementById("aideEMail"); 
var regexEMail =  /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/g;

document.getElementById("email").addEventListener("blur", function (e) {
    var validiteEMail = "";
    var email = e.target.value;
    if (regexEMail.test(email) === false && email !== "") { 
        validiteEMail = "L'adresse mail saisie n'est pas valide."; 
        document.getElementById("email").style.backgroundColor="#ffdcbf"; 
    }
    else if (email === "") { 
        validiteEMail = "Vous devez saisir votre adresse mail."
        document.getElementById("email").style.backgroundColor="#ffdcbf"; 
    }
    else
    {
    }
    document.getElementById("aideEMail").textContent = validiteEMail; 
});

// Ensuite, on souhaite bloquer l'envoi des données du formulaires si ces dernières ne correspondent pas à nos attentes
var formValidation = document.getElementById("bouton envoyer"); // on définit l'élément qui porte l'id "bouton envoyer" 

function validation(event) // on créé une fonction qui va valider ou non le formulaire
{
    // Si le champ est vide
    if (nom.validity.valueMissing)
    {
        event.preventDefault(); // on bloque l'envoi du formulaire
        nom.style.backgroundColor = "#fba"; // on colore en rouge pâle le champ où les données sont obligatoires
        nom.style.border = "2px solid #FF0000"; // on ajoute une bordure rouge foncé sur le champ concerné
        aideNom.textContent = "Ce champ est obligatoire"; // On indique sous ce champ un message d'erreur
        return false;
    }
    else if (prenom.validity.valueMissing)
    {
        event.preventDefault();
        prenom.style.backgroundColor = "#fba"; 
        prenom.style.border = "2px solid #FF0000"; 
        aidePrenom.textContent = "Ce champ est obligatoire."; 
        return false;
    }
    else if (email.validity.valueMissing)
    {
        event.preventDefault();
        email.style.backgroundColor = "#fba"; 
        email.style.border = "2px solid #FF0000"; 
        aideEMail.textContent = "Ce champ est obligatoire."; 
        return false;
    }
    // Si les données saisies sont invalides
    else if (regexNom.test(nom.value) == false)
    {
        event.preventDefault(); 
        nom.style.backgroundColor = "#fba"; 
        nom.style.border = "2px solid #FF0000";
        aideNom.textContent = "Le nom saisi n'est pas valide et ne permet pas l'envoi du formulaire."; 
        return false;
    }
    else if (regexPrenom.test(prenom.value) == false)
    {
        prenom.style.backgroundColor = "#fba"; 
        prenom.style.border = "2px solid #FF0000";
        aidePrenom.textContent = "Le prénom saisi n'est pas valide et ne permet pas l'envoi du formulaire."; 
        return false;
    }
    else if (regexEMail.test(email.value) == false)
    {
        email.style.backgroundColor = "#fba"; 
        email.style.border = "2px solid #FF0000";
        aideEMail.textContent = "L'adresse mail saisie n'est pas valide et ne permet pas l'envoi du formulaire.";
        return false;
    }
    else // Si la saisie est Ok on ne bloque pas l'envoi du formulaire
    {
        return true;
    }
};
formValidation.addEventListener("click", validation); // on définit l'évènement (lorsque l'utilisateur clique sur le bouton envoyer) à partir duquel on va vérifier la validité du formuler et bloquer l'envoi des données si ces dernières ne sont pas valides
*/



