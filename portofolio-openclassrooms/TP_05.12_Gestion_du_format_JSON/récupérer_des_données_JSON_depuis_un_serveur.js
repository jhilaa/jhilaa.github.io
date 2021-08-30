// Exécute un appel AJAX GET
// fonction qu'on a passé en paramètre à ajaxGet appelé dans l'autre fichier .js
function afficher(reponse) {
	let tabFilms = JSON.parse (reponse);
	for (let eltFilm of tabFilms) {
            // création de l'élément de liste
            let listeFilms = document.getElementById("listeFilms");
            let li = document.createElement("li");
            li.textContent = eltFilm.titre + " - " + eltFilm.realisateur +" (" + eltFilm.annee + ")" ;
            // ajout à la liste dans le code html
            listeFilms.appendChild(li);
    }
}

// exécution de ajaxGet en passant la fonction "afficher" en paramètre (fonction qui s'exécutera si pas d'erreur)
ajaxGet("http://localhost/DEMO/TP/TP_05.12_Gestion_du_format_JSON/data/films.json", afficher);