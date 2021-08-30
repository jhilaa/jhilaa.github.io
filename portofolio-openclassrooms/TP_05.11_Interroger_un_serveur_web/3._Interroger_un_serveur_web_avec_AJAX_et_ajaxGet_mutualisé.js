// fonction ajaxGet mutualisée dans un fichier à part

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