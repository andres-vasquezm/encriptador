// var texto = "Hola como estas";
// var reemplazado = texto.replace(/o/g, "ai");
// var reemplazo = reemplazado.replace(/H/g, "p");
// console.log(reemplazado)
// console.log(reemplazo)




//Expandir textarea
function ajustarAltura(textareaId) {
    let textarea = document.getElementById(textareaId);
    textarea.oninput = function() {
        textarea.style.height = '';
        textarea.style.height = Math.min(textarea.scrollHeight, 700) + 'px';
    };
}
//Automatiza el movimiento del textarea de ingreso de texto hacia abajo
ajustarAltura('textareaEntrada');

//Automatiza el movimiento del input de salida de texto hacia abajo
ajustarAltura('infoSalida');

//Funcion mostrar texto
function mostrarTexto(texto){
    return document.getElementById(texto).style.display = 'block';
}

//Funcion quitar texto
function desaparecerTexto(texto){
    return document.getElementById(texto).style.display = 'none';
}



function encriptarTexto(){
    //Quitar info de inico en salida
    desaparecerTexto('info');

    //Mostrar estructura para copiar texto
    mostrarTexto('informacionEncriptada');
}
