// Création d'une requête HTTP
var req = new XMLHttpRequest();

// configuration de la requête
// http://localhost/data = C:\wamp64\www\data
req.open("GET", "http://localhost/data/langages.txt", true); 
// evenement load = "résultat" de l'envoi de la requête ( <= code retour http )
// code retour >= 200 et <= 400 = Le serveur a réussi à traiter la requête
req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) {
        console.log(req.responseText);
    } else {
        // Affichage des informations sur l'échec du traitement de la requête
        console.error("erreur : " + req.status + " " + req.statusText);
    }
});
// evenement error = La requête n'a pas réussi à atteindre le serveur
req.addEventListener("error", function () {
    console.error("Erreur réseau");
});
req.send(null);



/*** version sans gestion d'erreur *********
// Création d'une requête HTTP
var req = new XMLHttpRequest();

// La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
req.open("GET", "http://localhost/data/langages.txt");

// Gestion de l'événement indiquant la fin de la requête
req.addEventListener("load", function () {
    // Affiche la réponse reçue pour la requête
    console.log(req.responseText);
});
req.send(null);
********************************************/


/*** version avec requête asynchrone *******
var req = new XMLHttpRequest();

// Requête HTTP GET synchrone vers le fichier langages.txt publié localement (C:\wamp64\www\data)
//req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt", false); NB : le chemin n'était pas le bon (mais je garde quand même une trace)
req.open("GET", "http://localhost/data/langages.txt", false); //false = synchrone

// Envoi de la requête
req.send(null);

// Affiche la réponse reçue pour la requête
console.log(req.responseText);
**********************************************/