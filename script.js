/*si le champ prénom est vide ou contient des caractères spéciaux*/
var validation = document.getElementById("envoyer");
var prenom = document.getElementById("prenom");
var prenommanquant = document.getElementById("prenom-manquant");
let prenomv = /^[a-zA-Zéè][a-zééàç]+([-'\s][a-zA-Zéèà][a-zééàç]+)?/;
validation.addEventListener("click", f_valid);
function f_valid(e) {
  if (prenom.validity.valueMissing) {
    e.preventDefault();
    prenommanquant.textContent = "prénom manquant";
    prenommanquant.style.color = "red";
  } else if (prenomv.test(prenom.value) == false) {
    e.preventDefault();
    prenommanquant.textContent = "format incorrect";
    prenommanquant.style.color = "red";
  } else {
  }
}
/*si le champ nom est vide ou contient des caractères spéciaux */
var nom = document.getElementById("name");
var nommanquant = document.getElementById("nom-invalid");
let nominvalid = /^[a-zA-Zéè][a-zééàç]+([-'\s][a-zA-Zéèà][a-zééàç]+)?/;
let x = "root";
let y = "deus";
let z = "afpa";
validation.addEventListener("click", f_nomvalid);
function f_nomvalid(n) {
  if (nom.validity.valueMissing) {
    n.preventDefault();
    nommanquant.textContent = "nom manquant";
    nommanquant.style.color = "red";
  } else if (nominvalid.test(nom.value) == false) {
    n.preventDefault();
    nommanquant.textContent = "format incorrect";
    nommanquant.style.color = "red";
  } else if (
    nom.value.toLowerCase().trim() == x ||
    nom.value.toLowerCase().trim() == y ||
    nom.value.toLowerCase().trim() == z
  ) {
    alert("veuillez choisir un autre nom ");
  } else {
  }
}
/*si le nom d'utilisateur est manquant */
var nomutilisateur = document.getElementById("nom-utili");
var nomutilisateurmanquant = document.getElementById("nomutilisateur");
validation.addEventListener("click", f_nomutilisateur);
function f_nomutilisateur(u) {
  if (nomutilisateur.validity.valueMissing) {
    u.preventDefault();
    nomutilisateurmanquant.textContent = "nom d'utilisateur manquant";
    nomutilisateurmanquant.style.color = "red";
  }
}
/*les mails : root@afpa.fr, afpa@afpa.com, deus@afpa.org ne pourront pas être utilisés. */
let mail = document.getElementById("inputEmail");
let mailinvalid = document.getElementById("email");
validation.addEventListener("click", f_mailvalid);
let af = "afpa@afpa.com";
let roo = "root@afpa.fr";
let deu = "deus@afpa.org";
function f_mailvalid(m) {
  if (
    mail.value.toLowerCase().trim() == af ||
    mail.value.toLowerCase().trim() == roo ||
    mail.value.toLowerCase().trim() == deu
  ) {
    m.preventDefault();
    mailinvalid.textContent = "veuillez verifier votre adresse email";
    mailinvalid.style.color = "red";
  }
}
