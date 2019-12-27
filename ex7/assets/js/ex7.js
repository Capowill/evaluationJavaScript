/**
 * Effectuez le contrôle de saisie de votre formulaire Jarditou en Javascript.
 * Lorsqu'une erreur est détectée,
 * l'utilisateur doit en être informé grâce à l'affichage d'un message sous le champ concerné.
 * Le formulaire ne peut être envoyé que lorsque tout est bon.
 */


 
/*
// On récupère le formulaire et le champ d'e-mail ainsi que l'élément span dans lequel on placera le message d'erreur

var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose on vérifie la validité du champ e-mail.
  if (email.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ est valide, on retire l'erreur
    error.innerHTML = ""; // On réinitialise le contenu
    error.className = "error"; // On réinitialise l'état visuel du message
  }
}, false);
form.addEventListener("submit", function (event) {
  // Chaque fois que l'utilisateur tente d'envoyer les données on vérifie que le champ email est valide.
  if (!email.validity.valid) {
    // S'il est invalide, on affiche un message d'erreur personnalisé
    error.innerHTML = "L'adresse mail saisie n'est pas valide";
    error.className = "error active";
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  }
}, false);
*/

var verify = () => {
    var invalide = [];
  
    // RegExp utilisées pour la validation du formulaire
    var regexNom =/^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
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
      invalide[0] = true;
    } else if (nom === "") {
      nomErreur.innerText = "Le nom est requis.";
      nomErreur.style.display = "inline";
      invalide[0] = true;
    } else {
      nomErreur.style.display = "none";
      invalide[0] = false;
    }
  
    // On vérifie que le champs prenom est valide et qu'il n'est pas vide
    if (regexNom.test(prenom) === false && prenom !== "") {
      prenomErreur.innerText = "Le prénom saisi n'est pas valide.";
      prenomErreur.style.display = "inline";
      invalide[1] = true;
    } else if (prenom === "") {
      prenomErreur.innerText = "Le prénom est requis.";
      prenomErreur.style.display = "inline";
      invalide[1] = true;
    } else {
      prenomErreur.style.display = "none";
      invalide[1] = false;
    }
  
    // On vérifie que le champs email est valide et qu'il n'est pas vide
    if (regexMail.test(email) === false && email !== "") {
      emailErreur.innerText = "L'email saisi n'est pas valide.";
      emailErreur.style.display = "inline";
      invalide[3] = true;
    } else if (email === "") {
      emailErreur.innerText = "L'email est requis.";
      emailErreur.style.display = "inline";
      invalide[3] = true;
    } else {
      emailErreur.style.display = "none";
      invalide[3] = false;
    }
  
    return invalide;
  };
  
  document.getElementById("formulaireDeContact").addEventListener("submit", function(e) {
    // On empêche l'utilisateur de valider son formulaire
    e.preventDefault();
  
    // On vérifie la valeur saisie par l'utilisateur
    var invalide = verify();
    // Si la saisie contient des erreurs on renvoie la valeur false sinon si tout est ok on renvoie la valeur true
    var valide = invalide.includes(true) ? false : true;
  
    // Le formulaire est valide(true) donc on peut le soumettre
    if (valide) {
      document.getElementById("formulaireDeContact").submit();
    }
  });
