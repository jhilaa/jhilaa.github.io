// récupération de la liste dans laquelle on va insérer les données
var ulContenu = document.getElementById("contenu");
var titreElt = document.getElementById("titre");

// Accès aux informations publiques de la ratp
//ajaxGet("https://dataratp.opendatasoft.com/api/records/1.0/search/?dataset=trafic-annuel-entrant-par-station-du-reseau-ferre-2019&facet=reseau&facet=station&facet=ville&facet=arrondissement_pour_paris&refine.reseau=M%C3%A9tro&refine.ville=Vincennes", function (reponse) {
	ajaxGet("https://dataratp.opendatasoft.com/api/records/1.0/search/?dataset=trafic-annuel-entrant-par-station-du-reseau-ferre-2019&facet=reseau&facet=station&facet=ville&facet=arrondissement_pour_paris&refine.reseau=M%C3%A9tro", function (reponse) {
    let tabTrafic = JSON.parse(reponse);
    console.log (tabTrafic);

    // Ajout des données dans la page web

    let titre = tabTrafic.parameters.dataset.replace(/\-/ig , " ");
    titreElt.textContent = titre;


    for (let i=0; i < tabTrafic.records.length; i++) {
    	station = tabTrafic.records[i]
    	let nomStation = station.fields.station;
        let trafic = station.fields.trafic
        //
	    let stationElt = document.createElement("li");
	    stationElt.textContent = "station : "+ nomStation + " - trafic : "+ trafic;
	    ulContenu.appendChild(stationElt);
    }
});