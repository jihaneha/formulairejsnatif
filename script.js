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
  if (mail.validity.valueMissing) {
    m.preventDefault();
    mailinvalid.textContent = "veuillez saisir une adresse email";
    mailinvalid.style.color = "red";
  } else if (
    mail.value.toLowerCase().trim() == af ||
    mail.value.toLowerCase().trim() == roo ||
    mail.value.toLowerCase().trim() == deu
  ) {
    m.preventDefault();
    mailinvalid.textContent = "veuillez verifier votre adresse email";
    mailinvalid.style.color = "red";
  }
}

// si la date de naissance est manquante + verification de l'age
let date = document.getElementById("date");
let datemanquante = document.getElementById("datemanquante");
validation.addEventListener("click", f_datevalid);
function f_datevalid(d) {
  if (date.validity.valueMissing) {
    d.preventDefault();
    datemanquante.textContent = "veuillez saisir votre date de naissance";
    datemanquante.style.color = "red";
  } else {
    let datevalue = date.value;
    let birth_day = new Date(datevalue);
    let birth_day_day = birth_day.getDate();
    let birth_day_month = birth_day.getMonth();
    let birth_day_year = birth_day.getFullYear();

    let today_date = new Date();
    let today_day = today_date.getDate();
    let today_month = today_date.getMonth();
    let today_year = today_date.getFullYear();

    let calculate_age = 0;
    if (today_month > birth_day_month) {
      calculate_age = today_year - birth_day_year;
    } else if (today_month == birth_day_month) {
      if (today_day >= birth_day_day) {
        calculate_age = today_year - birth_day_year;
      } else {
        calculate_age = today_year - birth_day_year - 1;
      }
      if (calculate_age < 21) {
        d.preventDefault();
        datemanquante.textContent = "vous avez pas 21 ans ";
        datemanquante.style.color = "red";
      } else {
        d.preventDefault();
        datemanquante.textContent = "yes , vous avez plus de 21ans ";
        datemanquante.style.color = "red";
      }
    }
  }
}
//afficher le mot de passe
function afficher() {
  let pass = document.getElementById("inputPassword1");
  if (document.getElementById("check").checked) {
    pass.setAttribute("type", "text");
  } else {
    pass.setAttribute("type", "password");
  }
}
// si le champ du mdp est vide
let pass = document.getElementById("inputPassword1");
let mdpmanquant = document.getElementById("mdpmanquant");
validation.addEventListener("click", f_mdpvalid);
function f_mdpvalid(m) {
  if (pass.validity.valueMissing) {
    m.preventDefault();
    mdpmanquant.textContent = "veuillez saisir un mot de pass";
    mdpmanquant.style.color = "red";
  }
}
// si l'utilisateur n'a pas comfirmé son mdp
let pass2 = document.getElementById("inputPassword2");
let mdpmanquant2 = document.getElementById("mdpmanquant2");
validation.addEventListener("click", f_mdp2valid);
function f_mdp2valid(m) {
  if (pass2.validity.valueMissing) {
    m.preventDefault();
    mdpmanquant2.textContent = "veuillez confirmer votre mot de pass";
    mdpmanquant2.style.color = "red";
  }
}
//si les 2 mots de passes ne sont pas identiques

function f_mdpsvalid() {
  let passprime = pass.value;
  let pass2prime = pass2.value;
  if (passprime !== pass2prime) {
    alert("les mdp ne sont pas identiques");
  }
}
//numero de telephone manquant
let tel = document.getElementById("tel");
let telspan = document.getElementById("telspan");
validation.addEventListener("click", f_telvalid);
function f_telvalid(t) {
  if (tel.validity.valueMissing) {
    t.preventDefault();
    telspan.textContent = "veuillez saisir votre numero de téléphone";
    telspan.style.color = "red";
  }
}
