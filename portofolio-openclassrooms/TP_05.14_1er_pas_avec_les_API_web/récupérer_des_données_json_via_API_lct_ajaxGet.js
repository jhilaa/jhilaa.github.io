var articlesElt = document.getElementById("articles");

//lct de la requête ajaxGet avec comme paramètres, l'URL cible et la fonction qui utilise la réponse (fonction anonyme ici)
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    var articles = JSON.parse(reponse);
    // boucle sur le tableau
    articles.forEach(function (article) {
        // Ajout du titre et du contenu de chaque article
        // création de l'élément titre
        var titreElt = document.createElement("h2");
            titreElt.textContent = article.titre;
        // création de l'élément contenu
        var contenuElt = document.createElement("p");
            contenuElt.textContent = article.contenu;
            // ajout de contenu comme fils du titre
            articlesElt.appendChild(titreElt);
        // ajout de l'article dans le container
        articlesElt.appendChild(contenuElt);
    });
});