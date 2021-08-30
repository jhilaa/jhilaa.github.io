// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
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
    req.send(null);
}

// fonction qu'on a passée en paramètre à ajaxGet
function afficher(reponse) {
    console.log(reponse);
    let langages = reponse.split(";");
    let langagesListe = document.getElementById("langages");
    for (const langage of langages) {
    	li = document.createElement("li");
    	li.textContent = langage;
    	langagesListe.appendChild(li);
    }
}

// exécution de ajaxGet en passant la fonction "afficher" en paramètre (fonction qui s'exécutera si pas d'erreur)
ajaxGet("http://localhost/data/langages.txt", afficher);