

// fonctions
function nb_aleatoire(min, max)
{
	var nb = min + (max-min+1)*Math.random();
	return Math.floor(nb);
}

function jouerPartie ()
{
//--- DEBUT DU PROGRAMME -----------
	let min = 0;
	let max = 10;
	let nbCoups = 0; // nombre de coups
	let nbADeviner = nb_aleatoire(min, max);

// tant que l'utilisateur n'a pas saisie une option valide, on affiche la fenêtre de dialogue
	let nbSaisi;
	let msgPrompt = "Essayez de trouver le nombre mystère entre " + min + " et " + max + " :";
	let msgRate = "";
//
	while (nbSaisi != nbADeviner) {
		nbCoups += 1;
		if (nbCoups === 1) {
			nbSaisi = prompt(msgPrompt);
		} else {
			msgRate = "Raté. Le nombre mystère n'est pas " + nbSaisi + ". Essayez encore."
			nbSaisi = prompt(msgRate + "\n" + msgPrompt);
		}
	}
	console.log("Vous avez trouvé le nombre mystère en " + nbCoups + " coups");
	return nbCoups
}

let scorePartie;
let meilleurScore;
let continuer;
let msg

do {
	scorePartie = jouerPartie();
	if (scorePartie <= meilleurScore || meilleurScore === undefined) {
		meilleurScore = scorePartie;
	}
	msg = "Score de la partie = " + scorePartie + " coup(s). \n Votre meilleur score = " + meilleurScore + ". \n";
	msg += "\n Voulez-vous continuer";
	continuer = confirm(msg);
	console.log ("continuer = " + continuer);
}
while (continuer)





