var formTab = document.getElementsByTagName("form"); 
var eltMdp1 = formTab.mdp1;
var eltMdp2 = formTab.mdp2;
var form = formTab[0];

form.addEventListener("submit", function(e) 
{
    var eltMdp1 = document.getElementById("mdp1");
    var eltMdp2 = document.getElementById("mdp2");
    var infoMdp = document.getElementById("infoMdp");
    var messageErreur = "";
    /****************/
    console.log (eltMdp1.value);
    console.log (eltMdp1.value.length);
    console.log (eltMdp2.value);
    console.log (eltMdp2.value.length);
    /****************/

    var regexMdp = new RegExp("^.*[0-9]+.*$");
    // ou var regexMdp = /^.*[0-9]+.*$/;
    // ou var regexMdp = /^.*\d+.*$/;
    infoMdp.textContent = "on va voir";

    // controle de le saisie
    if (eltMdp1.value != eltMdp2.value)
        {infoMdp.textContent = "Les 2 mots de passe saisis doivent être identiques";
         e.preventDefault();} // annulation de l'envoi
    else if (eltMdp1.value.length < 6)
        {infoMdp.textContent = "Le mot de passe doit contenir au moins 6 caractères";
         e.preventDefault();} // annulation de l'envoi
     else if (!(regexMdp.test (eltMdp1.value)))
        {infoMdp.textContent = "Le mot de passe doit contenir au moins 1 chiffre";
         e.preventDefault();} // annulation de l'envoi
     else {
        infoMdp.textContent = "Saisies correctes"; }   

    // annulation de l'envoi du formulaire   
    e.preventDefault();
    
}
);