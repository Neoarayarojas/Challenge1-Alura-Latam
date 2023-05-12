
function copiarTexto() {
	navigator.clipboard.writeText(salida.value);
}

function verificarTildes(texto) {
	//if (texto.match(/[^\w\s]/gi) == null){ //Filtra todos los caracteres especiales
    if (texto.match(/[\u0300-\u036f]/g) == null){
		return false;
	}
	return true;
}

function verificarMayusculas(texto){
	if (texto.match(/[A-Z]/g) == null){
		return false;
	}
	return true;
}

function code(){
    mensaje=entrada.value;
    if (verificarMayusculas(mensaje) == false){
        mensajeProcesado = mensaje.replace(/a|e|i|o|u/g, (match) => {
            return codingRules[match];
        });
        salida.value = mensajeProcesado;
        salida.style.backgroundImage = "none";
        image.style.display = "none";
        document.querySelector(".boton-copiar").style.display = "inline-block";
    }
    else{
        alert("ERROR, NO SE PERMITEN LETRAS MAYÚSCULAS.");	
    }
} 

function decoder(){
    mensaje=entrada.value;
    if (verificarMayusculas(mensaje) == false){
        mensajeProcesado = mensaje.replace(/ai|enter|imes|ober|ufat/g,(match) => {
            return codingRules2[match];
        });
        salida.value = mensajeProcesado;
        salida.style.backgroundImage = "none";
        image.style.display = "none";
        document.querySelector(".boton-copiar").style.display = "inline-block";
    }
    else{
        alert("ERROR, NO SE PERMITEN LETRAS MAYÚSCULAS.");	
    }
}

const entrada=document.querySelector(".entrada");
const salida=document.querySelector(".salida");
var image = document.querySelector(".estatus");
var mensaje,mensajeProcesado; 
let codingRules = {
    "a":"ai",
    "e":"enter",
    "i":"imes",
    "o":"ober",
    "u":"ufat"
}
let codingRules2 = {
    "ai":"a",
    "enter":"e",
    "imes":"i",
    "ober":"o",
    "ufat":"u"
}