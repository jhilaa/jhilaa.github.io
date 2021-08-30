var fileJsonInput = document.querySelector('#fileJsonInput');
var fileJsonDisplay = document.querySelector('#fileJsonDisplay');

fileJsonInput.onchange = function() {
    var reader = new FileReader();
    reader.onload = function() {
        fileJsonDisplay.textContent = reader.result;
        let tabDog = JSON.parse(reader.result);

        for (let i=0; i < tabDog.length; i++) {
            let dog = tabDog[i]
            let species = dog.species;
            let breed = dog.breed;
            //
            let dogElt = document.createElement("li");
            dogElt.textContent = "specie : "+ species + " - breed : "+ breed;
            fileJsonDisplay.appendChild(dogElt);
        }

        };
    reader.readAsText(fileJsonInput.files[0]);
    };
