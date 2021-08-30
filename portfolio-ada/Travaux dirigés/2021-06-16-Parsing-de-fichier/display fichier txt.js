var fileTxtInput = document.querySelector('#fileTxtInput');
var fileTxtDisplay = document.querySelector('#fileTxtDisplay');

fileTxtInput.textContent = "";

fileTxtInput.onchange = function() {
    var reader = new FileReader();
    reader.onload = function() {
        fileTxtDisplay.textContent = reader.result;
    };
    reader.readAsText(fileTxtInput.files[0]);
};

// modif pour tester sublime merge