

var form = document.querySelector("form");
// Gestion de la soumission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Récupération des champs du formulaire dans l'objet FormData
    var data = new FormData(form);
    // Envoi des données du formulaire au serveur
    // La fonction callback est ici vide
    ajaxPost("https://oc-jswebsrv.herokuapp.com/article", data, function () {
        document.getElementById("messageRetour").textContent ="l'article a bien été ajouté";
    });
});
