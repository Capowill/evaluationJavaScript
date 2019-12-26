/**
 * Effectuez le contrôle de saisie de votre formulaire Jarditou en Javascript.
 * Lorsqu'une erreur est détectée,
 * l'utilisateur doit en être informé grâce à l'affichage d'un message sous le champ concerné.
 * Le formulaire ne peut être envoyé que lorsque tout est bon.
 */

const verify = () => {
    let hasErrors = [];
  
    // Here lies all the regex used for this form
    const isAlpha = /^[\wÀÂÆÇÉÈÊËÏÑÎÔŒÙÛÜŸ\'’ -]+$/i;
    const isPostal = /^\d{2}\s?\d{3}$/g;
    const isEmail = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/g;
  
    // Gets all the error elements in order to show the elements
    const nomErreur = document.getElementById("nomErreur");
    const prenomErreur = document.getElementById("prenomErreur");
    const codePostalErreur = document.getElementById("codePostalErreur");
    const emailErreur = document.getElementById("emailErreur");
  
    // Gets all the forms element values
    const nom = document.getElementsByName("nom")[0].value;
    const prenom = document.getElementsByName("prenom")[0].value;
    const codePostal = document.getElementsByName("codePostal")[0].value;
    const email = document.getElementsByName("email")[0].value;
  
    // Checks is lastName is valid and if it's not empty
    if (isAlpha.test(nom) === false && nom !== "") {
      nomErreur.innerText = "Le nom n'est pas valide.";
      nomErreur.style.display = "inline";
      hasErrors[0] = true;
    } else if (nom === "") {
      nomErreur.innerText = "Le nom est requis.";
      nomErreur.style.display = "inline";
      hasErrors[0] = true;
    } else {
      nomErreur.style.display = "none";
      hasErrors[0] = false;
    }
  
    // Checks if name is valid and if it's not empty
    if (isAlpha.test(prenom) === false && prenom !== "") {
      prenomErreur.innerText = "Le prénom n'est pas valide.";
      prenomErreur.style.display = "inline";
      hasErrors[1] = true;
    } else if (prenom === "") {
      prenomErreur.innerText = "Le prénom est requis.";
      prenomErreur.style.display = "inline";
      hasErrors[1] = true;
    } else {
      prenomErreur.style.display = "none";
      hasErrors[1] = false;
    }
  
    // Checks if postal is valid and if it's not empty
    if (isPostal.test(codePostal) === false && codePostal !== "") {
      codePostalErreur.innerText = "Le code postal n'est pas valide.";
      codePostalErreur.style.display = "inline";
      hasErrors[2] = true;
    } else {
      codePostalErreur.style.display = "none";
      hasErrors[2] = false;
    }
  
    // Checks if the email is valid and if it's not empty
    if (isEmail.test(email) === false && email !== "") {
      emailErreur.innerText = "L'email n'est pas valide.";
      emailErreur.style.display = "inline";
      hasErrors[3] = true;
    } else if (email === "") {
      emailErreur.innerText = "L'email est requis.";
      emailErreur.style.display = "inline";
      hasErrors[3] = true;
    } else {
      emailErreur.style.display = "none";
      hasErrors[3] = false;
    }
  
    return hasErrors;
  };
  
  document.getElementById("formulaireDeContact").addEventListener("submit", function(e) {
    // Prevents the user from submitting the form
    e.preventDefault();
  
    // We verify the user input
    const hasErrors = verify();
    // If the inputs contains errors we return false else we return true
    const isValid = hasErrors.includes(true) ? false : true;
  
    // If the form is valid we then submit it
    if (isValid) {
      document.getElementById("formulaireDeContact").submit();
    }
  });
  