/* 
Activité : gestion des contacts
*/
let pseudoConsole= document.getElementById("pseudoConsole");

// class correspondant aux contacts
class contact{
	constructor (prenom, nom)
	{this.nom = nom;
	 this.prenom = prenom;
	 }
};

// class correspondant à liste des contacts
class contacts {
	constructor (tabContacts) {
		// tableau des contacts vide à l'initialisation
		this.tabContacts = [];  
	}


	addConsole (texte) {
	 	let newTextDiv=document.createElement("div");
		newTextDiv.textContent = texte;
	 	pseudoConsole.appendChild(newTextDiv);
	};

	// affichage de la liste des contacts
	afficherContacts () {
		if (this.tabContacts.length === 0) {
			this.addConsole ("Aucun contact à afficher");
			}
		else {for (const client of this.tabContacts) {
		this.addConsole (`Nom : ${client.nom}, prénom : ${client.prenom}`)};
			}	
	} 
	
	// ajout d'un contact avec le prénom / nom passés en paramètre 
    ajouterContact (nom, prenom) {
		this.tabContacts.push (new contact (prenom, nom));
	}
	
	//ajout d'un contact via saisie du prénom / nom
	ajouterContactPrompt () {
		let nom = prompt ("Entrez le nom du nouveau contact :");
		let prenom = prompt ("Entrez le prénom du nouveau contact :");
		
		this.tabContacts.push (new contact (prenom, nom));

		this.addConsole ("Le nouveau contact a été ajouté");
		this.addConsole ("\n");
	};
}

	
//--- DEBUT DU PROGRAMME -----------
// initilisation de l'annuaire
let annuaire = new contacts();
annuaire.ajouterContact("Carole", "Lévisse");
annuaire.ajouterContact("Mélodie", "Nelsonne");

// message d'accueil
alert ("Bienvenue dans le gestionnaire de contacts!");

// tant que l'utilisateur n'a pas saisie une option valide, on affiche la fenêtre de dialogue
let choixUtilisateur = "";
while (choixUtilisateur != "0") {
	promptTxt = "Choisissez une option :";
	promptTxt += "\n1 : Lister les contacts";
	promptTxt += "\n2 : Ajouter un contact";
	promptTxt += "\n0 : Quitter";
	// fenêtre de saisie
	choixUtilisateur = prompt (promptTxt);

	annuaire.addConsole ("---------------------");
	switch(choixUtilisateur) {
		// fin du programme
		case "0" : alert ("Au revoir");
		           break;
		// option 1 : Affichage de la liste des contacts	   
		case "1" : annuaire.addConsole ("Voici la liste de tous vos contacts :");
				   annuaire.afficherContacts();
				   break;
		// option 2 : Ajout d'un contact
		case "2" : annuaire.ajouterContactPrompt();
				   break;
		// option non valide
		default : alert ("Option non valide");
	}
}


