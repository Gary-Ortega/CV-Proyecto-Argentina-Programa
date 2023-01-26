

function desplegar(id) {
    document.getElementById(id).style.display = "block";
}

function replegar(id) {
    document.getElementById(id).style.display = "none";
}

document.getElementById("button").onclick = function() {
   
        desplegar("desplegar1");
        desplegar("desplegar2");
        desplegar("desplegar3");
   
}

document.getElementById("button2").onclick = function() {
    replegar("desplegar1");
    replegar("desplegar2");
    replegar("desplegar3");
}

document.getElementById("button3").onclick = function() {
   
    desplegar("desplegar4");


}
document.getElementById("button4").onclick = function() {
    replegar("desplegar4");
  
}