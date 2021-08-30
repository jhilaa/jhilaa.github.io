console.log("function miseAJour")
// Accès aux informations publiques de GitHub
function afficherDefinition (lettre) {
		let motsElt = document.getElementById("mots");
        ajaxGet("https://oc-jswebsrv.herokuapp.com/api/lexique/"+lettre, function (reponse) {
	        let tabMots = JSON.parse(reponse);
	        // Ajout des données dans la page web
	        document.getElementById("mots").innerHTML = "";
	        for (const mot of tabMots) {
	        	if (mot.length = 0) {
	        		let msgElt = document.createElement("p");
	        		msgElt.textContent = "Aucun mot trouvé pour la lettre " + lettre;
	        		motsElt.appendChild(msgElt);
	        	}
	        else {
	        	titre = document.createElement("h1");
	        	titre.textContent = mot.term;
	        	deft = document.createElement("p");
	        	deft.textContent = mot.definition;
	        	motsElt.appendChild(titre);
	        	motsElt.appendChild(deft);
	        	}
	        }
	    })
};

tabLettres = document.getElementsByClassName("lettre");
for (const lettre of tabLettres) {
	lettre.href = "#";
    //console.log ("lien - " + lettre.href)
    lettre.addEventListener("click", function(e) {
            afficherDefinition (lettre.textContent);
        }
    )
}



