var svgDocument;

function on_load(evt){
   O=evt.target;
   svgDocument=O.ownerDocument;
}

function turn_on(id){
   svgDocument.getElementById(id).setAttribute("visibility","visible");
}

function turn_off(id){
   svgDocument.getElementById(id).setAttribute("visibility","hidden");
}

//this goes inside on_load(evt) function!
svgDocument.getElementById("button").onclick = user_clicked_my_button;

function user_clicked_my_button(){
    //when user clicks this button we turn on the light which has id="my_light"
    turn_on("my_light");
}