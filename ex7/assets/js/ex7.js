/**
 * Effectuez le contrôle de saisie de votre formulaire Jarditou en Javascript.
 * Lorsqu'une erreur est détectée,
 * l'utilisateur doit en être informé grâce à l'affichage d'un message sous le champ concerné.
 * Le formulaire ne peut être envoyé que lorsque tout est bon.
 */

// On informe l'utilisateur au fur et à mesure qu'il avance dans le formulaire de la validité ou non de ce qu'il saisi(pour les champs obligatoires)

document.getElementById("nom").addEventListener("blur", function (e) { // on ajoute un addEventListener sur le champ "nom". Lorsque l'utilisateur termine sa saisie et que le champ "nom" perd le focus (blur) on va tester la validité des données saisies
    var validiteNom = "";
    var nom = e.target.value; // on va lire la valeur de la chaine saisie par l'utilisateur 
    var regexNom = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/; // on définit une regExp pour le nom
    if (regexNom.test(nom) === false && nom !== "") { // Si la fonction regex.test renvoie false pour le nom saisi par l'utilisateur et que le champ n'est pas laissé vide 
        validiteNom = "Le nom saisi n'est pas valide."; //  on donne comme valeur à la variable validiteNom une chaine correspondant à un message d'erreur(d'aide à la saisie)
    }
    else if (nom === "") { // si l'utilisateur sort du champ nom sans avoir saisi une valeur(chaine)
        validiteNom = "Vous devez saisir votre nom." // on donne comme valeur à la variable validiteNom un autre message d'erreur
    }
    document.getElementById("aideNom").textContent = validiteNom; // on affiche sous le champ nom dans le span id aideNom le message d'erreur correspondant
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

// On informe l'utilisateur au moment de la validation du formulaire des champs restés invalides

function surligne(champ, erreur) // La fonction surligne va colorer en rouge pâle le(s) champ(s) invalides
{
    if (erreur) // si le second parametre de notre fonction vaut true, la fonction colore le champ
    {
    champ.style.backgroundColor = "#fba";
    }
    else
    {
    champ.style.backgroundColor = ""; // Si les données saisies sont valides (c-a-d si erreur renvoi false), on laisse le(s) champ(s) transparent
    }
};
// On créé trois fonctions pour verifier la validité des saisies utilisateur pour les champs nom, prénom et email.
// Le reste des champs obligatoires est automatiquement vérifié par l'API formulaire d'HTML5 (à travers l'attribut required)
function verifNom(champ) // On utilise une fonction verifNom qui va vérifier la validité des valeurs saisies par l'utilisateur (à travers la valeur du champ nom)
{
    var regexNom = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
    if (!regexNom.test(champ.value)) // On utilise la methode test(str) de l'objet regExp sur le texte saisi par l'utilisateur dans le champ nom. Si elle renvoie true cela signifie que les conditions de notre regExp ne sont pas respectées
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
// On créé une méga-fonction qui va appeler nos trois fonctions précédentes (verif...) et renvoyer true si tout est bon
function verifForm(f)
{
    // On créé trois variables afin que le navigateur effectue les trois fonctions même si l'une d'elle renvoie false. 
    // Si on ne procède pas ainsi le risque est que si l'une des fonctions (par ex verifNom) renvoie false, les deux autres ne seront 
    // pas effectuées et donc même si les données saisies ne sont pas valides, les champs ne seront pas colorés en rouge.
    var nomOk = verifNom(f.nom);
    var prenomOk = verifPrenom(f.prenom);
    var eMailOk = verifEMail(f.email);
   
    if (nomOk && prenomOk && eMailOk) // Si les trois variables renvoient true, la méga-fonction renvoie true et le formulaire est valide.
    {
        return true;
    } 
    else
    {
        alert("Afin d'envoyer le formulaire vous devez remplir tous les champs en rouge") // S'il y a des erreurs on affiche un message d'alerte à l'utilisateur lui indiquant que les champs colorés sont invalides
        return false;
    }
};
