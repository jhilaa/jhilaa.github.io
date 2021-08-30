// fonctions
function nb_aleatoire(min, max) {
  var nb = min + (max - min + 1) * Math.random();
  return Math.floor(nb);
}

//--- DEBUT DU PROGRAMME -----------
let min = 1;
let max = 10;
let nbADeviner = nb_aleatoire(min, max);

// tant que l'utilisateur n'a pas saisie une option valide, on affiche la fenêtre de dialogue
let nbSaisi;
let msgPrompt =
  "Essayez de trouver le nombre mystère entre " + min + " et " + max + " :";
let msgRate = "";

nbSaisi = prompt(msgPrompt);
//
while (nbSaisi != nbADeviner && nbSaisi != 0) {
  if (nbSaisi < min || nbSaisi > max) {
    msgRate = "Saisie incorrecte. Essayez encore.";
  } else {
    if (nbSaisi < nbADeviner) {
      msgRate =
        "Raté. Le nombre mystère est plus grand que " +
        nbSaisi +
        ". Essayez encore.";
    } else {
      msgRate =
        "Raté. Le nombre mystère est plus petit que " +
        nbSaisi +
        ". Essayez encore.";
    }
    nbSaisi = prompt(msgRate + "\n" + msgPrompt);
  }
}

alert("Vous avez trouvé le nombre mystère");
