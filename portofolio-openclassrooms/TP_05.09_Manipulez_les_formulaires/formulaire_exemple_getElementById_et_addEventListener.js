//**************************************
// Manipulation du formulaire
var pseudoElt = document.getElementById("pseudo");
var pseudoConsole=document.getElementById("pseudoConsole");

// Affichage d'un message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("focus", function () {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});
// Suppression du message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("blur", function (e) {
    document.getElementById("aidePseudo").textContent = "";
});

// Affichage de la demande de confirmation d'inscription
document.getElementById("confirmation").addEventListener("change", function (e) {
    pseudoConsole.textContent="Demande de confirmation : " + e.target.checked;
});

// Affichage du type d'abonnement choisi
var aboElts = document.getElementsByName("abonnement");
for (var i = 0; i < aboElts.length; i++) {
    aboElts[i].addEventListener("change", function (e) {
		pseudoConsole.textContent="Formule d'abonnement choisie : " + e.target.value;
    });
}

// Affichage du code de nationalité choisi
document.getElementById("nationalite").addEventListener("change", function (e) {
    pseudoConsole.textContent="Code de nationalité : " + e.target.value ;
});

var form = document.querySelector("form");
//pseudoConsole.textContent="Nombre de champs de saisie : " + form.elements.length; // Affiche 10
//pseudoConsole.textContent+= " - " + form.elements[0].name; // Affiche "pseudo"
//pseudoConsole.textContent+= " - " + form.elements.mdp.type; // Affiche "password"

//*********************************************
// Soumission du formulaire et contrôle
// Affiche de toutes les données saisies ou choisies
form.addEventListener("submit", function (e) {
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var courriel = form.elements.courriel.value;
    pseudoConsole.textContent="Vous avez choisi le pseudo " + pseudo 
    + ", le mot de passe " + mdp + " et le courriel " + courriel;
    if (form.elements.confirmation.checked) {
        pseudoConsole.textContent+="\nVous avez demandé une confirmation d'inscription par courriel";
    } else {
        pseudoConsole.textContent+="\nVous n'avez pas demandé de confirmation d'inscription par courriel";
    }
    switch (form.elements.abonnement.value) {
    case "abonewspromo":
        pseudoConsole.textContent+="\nVous êtes abonné(e) à la newsletter et aux promotions";
        break;
    case "abonews":
        pseudoConsole.textContent+="\nVous êtes abonné(e) à la newsletter";
        break;
    case "aborien":
        pseudoConsole.textContent+="\nVous n'êtes abonné(e) à rien";
        break;
    default:
        pseudoConsole.textContent+="\nErreur : code d'abonnement non reconnu";
    }
    switch (form.elements.nationalite.value) {
    case "FR":
        pseudoConsole.textContent+="\nVous êtes français(e)";
        break;
    case "BE":
        pseudoConsole.textContent+="\nVous êtes belge";
        break;
    case "SUI":
        pseudoConsole.textContent+="\nVous êtes suisse";
        break;
    default:
        pseudoConsole.textContent+="\nErreur : code de nationalité non reconnu";
    }
    e.preventDefault(); // Annulation de l'envoi des données
});


//*********************************
// contrôle de la longueur du mdp au cours de la saisie
// Vérification de la longueur du mot de passe saisi
document.getElementById("mdp").addEventListener("input", function (e) {
    var mdp = e.target.value; // Valeur saisie dans le champ mdp
    var longueurMdp = "faible";
    var couleurMsg = "red"; // Longueur faible => couleur rouge
    if (mdp.length >= 8) {
        longueurMdp = "suffisante";
        couleurMsg = "green"; // Longueur suffisante => couleur verte
    } else if (mdp.length >= 4) {
        longueurMdp = "moyenne";
        couleurMsg = "orange"; // Longueur moyenne => couleur orange
    }
    var aideMdpElt = document.getElementById("aideMdp");
    aideMdpElt.textContent = "Longueur : " + longueurMdp; // Texte de l'aide
    aideMdpElt.style.color = couleurMsg; // Couleur du texte de l'aide
});

// Contrôle du courriel en fin de saisie
document.getElementById("courriel").addEventListener("blur", function (e) {
    // Correspond à une chaîne de la forme xxx@yyy.zzz
    var regexCourriel = /.+@.+\..+/;
    var validiteCourriel = "";
    if (!regexCourriel.test(e.target.value)) {
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
});