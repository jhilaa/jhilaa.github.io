// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
// Dans l'autre fichier js, on lance la commande ajaxGet("http://localhost/data/films.json", afficher);
// (ie on va récupérer le fichier passé en paramètre (...films.json) et lancer la fonction afficher dessus)

console.log("function ajaxGet")
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    // contrôle du chargement
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            //-----------------------------
            // Appelle la fonction "callback" qui est donnée lors de l'appel de la fonction ajaxGet
            // (ici ça sera la fonction "afficher") en lui passant la réponse de la requête
            callback(req.responseText);
            //---------------------------
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    // contrôle des erreurs de communication
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}


	
