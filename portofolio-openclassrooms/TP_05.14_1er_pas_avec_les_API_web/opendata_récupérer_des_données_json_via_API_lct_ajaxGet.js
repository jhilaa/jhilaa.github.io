var premMinElt = document.getElementById("premMin");

// Accès aux informations publiques sur le Premier Ministre
ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function (reponse) {
    var premierMinistre = JSON.parse(reponse);
    // Ajout de la description et du logo dans la page web
    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = premierMinistre.description;
    var logoElt = document.createElement("img");
    logoElt.src = premierMinistre.logo;
    premMinElt.appendChild(descriptionElt);
    premMinElt.appendChild(logoElt);
});