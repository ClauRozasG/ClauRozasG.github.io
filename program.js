/*const textInicio = document.querySelector(".cardInput");
const textOutput = document.querySelector(".cardOutput");*/

function encriptar() {
    var texto = document.querySelector(".cardInput").value;
    let condicion = /^[a-z\s]+$/;
    if(texto.length==0){
        alert("No hay nada que pueda encriptar. Intentalo de nuevo");
    }
    else if(texto.match(condicion)){
        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector(".cardOutput").value = textoCifrado;
        document.querySelector("#btn-encriptar").value;
        document.querySelector(".cardInput").value="";
    }
    else{
        alert("No se aceptan caracteres especiales, números o acentos");
    }
    
}
function desencriptar() {
    var texto = document.querySelector(".cardInput").value;
    let condicion = /^[a-z\s]+$/;
    if(texto.length==0){
        alert("No hay nada que pueda desencriptar. Intentalo de nuevo");
    }else if(texto.match(condicion)){
        var textoCifrado = texto.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.querySelector(".cardOutput").value = textoCifrado;
        document.querySelector("#btn-desencriptar").value;
        document.querySelector(".cardInput").value="";
    }
    else{
        alert("No se aceptan caracteres especiales, números o acentos");
    }
    
}
function copiar() {
    var mensajeMostrado = document.querySelector(".cardOutput").value;
    navigator.clipboard.writeText(mensajeMostrado);
}