document.getElementById("menu-button").onclick = function(event) {
  var menuList = document.querySelector(".menu-list");
  menuList.classList.toggle("visible");
  event.preventDefault();
}

function submitForm() {
  // Récupérer les valeurs des champs d'entrée
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Effectuer ici des actions avec les données récupérées (comme l'envoi à un serveur)

  // Exemple : Afficher les valeurs dans la console
  alert("username: " + username + "\npassword: " + password);
  console.log("Username: " + username);
  console.log("Password: " + password);
}

function toggleMenu(event) {
  var menuList = document.querySelector(".menu-list");
  menuList.classList.toggle("visible");
  event.preventDefault();
}

function validateForm() {
  // Récupérer les valeurs des champs d'entrée
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var birthdate = document.getElementById("birthdate").value.split("/").reverse().join("/");
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Email:", email);
  console.log("Birthdate:", birthdate);
  console.log("Password:", password);
  console.log("Confirm Password:", confirmPassword);

  var birthdateComponents = birthdate.split("-");
  if (birthdateComponents.length === 3) {
    birthdate = birthdateComponents[2] + "/" + birthdateComponents[1] + "/" + birthdateComponents[0];
  }
  console.log("Birthdate:", birthdate);


  // Vérifier que tous les champs sont remplis
  if (firstName === "" || lastName === "" || email === "" || birthdate === "" || password === "" || confirmPassword === "") {
    alert("Veuillez remplir tous les champs.");
    return false;
  }

  // Vérifier le format de la date de naissance (dd/mm/yyyy)
  var dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dateRegex.test(birthdate)) {
    alert("Veuillez entrer une date de naissance valide au format dd/mm/yyyy.");
    return false;
  }

  // Vérifier le format de l'adresse email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Veuillez entrer une adresse email valide.");
    return false;
  }

  // Vérifier que les deux mots de passe sont identiques
  if (password !== confirmPassword) {
    alert("Les mots de passe ne correspondent pas.");
    return false;
  }

  // Vérifier que le mot de passe a une longueur entre 6 et 16 caractères
  if (password.length < 6 || password.length > 16) {
    alert("Le mot de passe doit contenir entre 6 et 16 caractères.");
    return false;
  }

  // Si toutes les vérifications passent, vous pouvez envoyer les données au serveur ou effectuer d'autres actions nécessaires.
  alert("Formulaire validé ! Vous pouvez envoyer les données au serveur.");

  return true;
}
