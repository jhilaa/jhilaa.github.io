
function changerCouleur(e) {
    let touche =  String.fromCharCode(e.charCode)
    let paragraphes = document.getElementsByTagName("div");
    let couleur;
    switch (touche){
    		case 'r' : couleur="red";
    					break;
    		case 'j' : couleur="yellow";
    					break;
    		case 'v' : couleur="green";
    					break;
            case 'b' : couleur="white";
                        break;
    }
    if (couleur !== undefined) {
    	for (let i=0; i<paragraphes.length; i++)
	    {
	    	paragraphes[i].style="background-color:"+couleur+";";

	    }
    }    
}

// Gestion du clavier
document.body.addEventListener("keypress", function(e) {
	changerCouleur(e);
});


