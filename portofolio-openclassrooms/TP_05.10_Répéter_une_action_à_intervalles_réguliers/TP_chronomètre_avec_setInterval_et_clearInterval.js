let chronoElt = document.getElementById("chrono");
let boutonElt = document.getElementById("bouton");
let intervalId;

function lancerChrono() {
  // Conversion en nombre du texte du compteur
  let chrono = Number(chronoElt.textContent);
  if (chrono < 10 && bouton.textContent === "Arrêter") {
    chrono = chrono + 1;
    chronoElt.textContent = chrono;
  } else {
    // Annule l'exécution répétée
    clearInterval(intervalId);
    bouton.textContent = "Cliquez-moi !";
  }
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
boutonElt.addEventListener("click", function (e) {
  if (boutonElt.textContent === "Cliquez-moi !") {
    boutonElt.textContent = "Arrêter";
    intervalId = setInterval(lancerChrono, 1000);
  } else {
    boutonElt.textContent = "Cliquez-moi !";
  }
});

let j = 0;
let i = 0;
do {
  i = Math.floor(Math.random() * 5);
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
  j++;
} while (j < 10);

/*******************************
let bouton = document.getElementById("bouton")
bouton.addEventListener("click", function(e) 
{
	console.log("test : "+e);
	if (bouton.textContent ==="Cliquez-moi !")  
		{
			bouton.textContent= "Arrêter";
			let intervalId = setInterval(lancerChrono, 1000);
		}
	else 
		{
			bouton.textContent = "Cliquer-moi !";
			// Annule l'exécution répétée
        	clearInterval(intervalId);
		}
});

// lancement du chrono à partir de 0
function lancerChrono() {
    // Conversion en nombre du texte du chrono
    let chronoElt = document.getElementById("chrono");
    let chrono = Number(chronoElt.textContent);
    // boucle gérée par le setInterval. Là on fait que tester les conditions d'arrêt
    if (chrono < 100) {
        chronoElt.textContent = chrono + 1;
    } else {
        console.log ("Ca va peut-être un peu loin.");
    }
}
************************************/
