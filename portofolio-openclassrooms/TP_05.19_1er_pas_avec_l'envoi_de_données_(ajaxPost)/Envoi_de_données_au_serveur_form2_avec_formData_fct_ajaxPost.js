
/***************************************
// Exécute un appel AJAX POST
// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
function ajaxPost(url, data, callback, isJSON) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    console.log( "isJSON : " + isJSON);
    if (isJSON) {
        // Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/json");
        console.log ("data 2 : "+ data);
        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
        console.log ("data (json) : "+ data);
    }
    req.send(data);
}

*************************************/

/** solution ****************************/
// Exécute un appel AJAX POST
// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
// Le paramètre isJson permet d'indiquer si l'envoi concerne des données JSON
function ajaxPost(url, data, callback, isJson) {
	console.log ("data : "+ data);
	console.log ("isJson : "+ isJson);
	console.log ("JSON.stringify(data) : "+ JSON.stringify(data));

    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
            console.log (req.status + " " + req.statusText + " " + url);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });

    if (isJson) {
        // Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/json");
        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
    }
    req.send(data);
}

/****************************************/

var telephones = [
    {
        "marque": "Apple",
        "modele": "iPhone"
    },
    {
        "marque": "Samsung",
        "modele": "Galaxy"
    }
];

var json = JSON.stringify(telephones);
console.log("telephones : " + telephones);
console.log("json : " + json);
console.log(JSON.parse(json)[1].marque);


