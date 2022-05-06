var hexValue = document.getElementById("hexValue");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var gradient = document.getElementById("gradient");


color1.addEventListener("input", change)
color2.addEventListener("input", change)

// display gradient code
function change() {
    gradient.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    hexValue.value = "background: " + gradient.style.background;
    
}

// FUnction for copy text button
function copyText(){
    if(hexValue.value === ""){
        navigator.clipboard.writeText("background: linear-gradient(to right, #eeff00, #ff0000");
    }
    navigator.clipboard.writeText(hexValue.value);
}