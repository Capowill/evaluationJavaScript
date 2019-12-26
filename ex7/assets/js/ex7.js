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
    const lastNameError = document.getElementById("lastNameError");
    const nameError = document.getElementById("nameError");
    const postalError = document.getElementById("postalError");
    const emailError = document.getElementById("emailError");
  
    // Gets all the forms element values
    const lastName = document.getElementsByName("nom")[0].value;
    const name = document.getElementsByName("prénom")[0].value;
    const postal = document.getElementsByName("postal")[0].value;
    const email = document.getElementsByName("email")[0].value;
  
    // Checks is lastName is valid and if it's not empty
    if (isAlpha.test(lastName) === false && lastName !== "") {
      lastNameError.innerText = "Le nom n'est pas valide.";
      lastNameError.style.display = "inline";
      hasErrors[0] = true;
    } else if (lastName === "") {
      lastNameError.innerText = "Le nom est requis.";
      lastNameError.style.display = "inline";
      hasErrors[0] = true;
    } else {
      lastNameError.style.display = "none";
      hasErrors[0] = false;
    }
  
    // Checks if name is valid and if it's not empty
    if (isAlpha.test(name) === false && name !== "") {
      nameError.innerText = "Le prénom n'est pas valide.";
      nameError.style.display = "inline";
      hasErrors[1] = true;
    } else if (name === "") {
      nameError.innerText = "Le prénom est requis.";
      nameError.style.display = "inline";
      hasErrors[1] = true;
    } else {
      nameError.style.display = "none";
      hasErrors[1] = false;
    }
  
    // Checks if postal is valid and if it's not empty
    if (isPostal.test(postal) === false && postal !== "") {
      postalError.innerText = "Le code postal n'est pas valide.";
      postalError.style.display = "inline";
      hasErrors[2] = true;
    } else {
      postalError.style.display = "none";
      hasErrors[2] = false;
    }
  
    // Checks if the email is valid and if it's not empty
    if (isEmail.test(email) === false && email !== "") {
      emailError.innerText = "L'email n'est pas valide.";
      emailError.style.display = "inline";
      hasErrors[3] = true;
    } else if (email === "") {
      emailError.innerText = "L'email est requis.";
      emailError.style.display = "inline";
      hasErrors[3] = true;
    } else {
      emailError.style.display = "none";
      hasErrors[3] = false;
    }
  
    return hasErrors;
  };
  
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    // Prevents the user from submitting the form
    e.preventDefault();
  
    // We verify the user input
    const hasErrors = verify();
    // If the inputs contains errors we return false else we return true
    const isValid = hasErrors.includes(true) ? false : true;
  
    // If the form is valid we then submit it
    if (isValid) {
      document.getElementById("contactForm").submit();
    }
  });
  