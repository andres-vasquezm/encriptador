//Limpiar texto
function limpiarCaja(idElemnto){
    document.querySelector(idElemnto).value = '';
}

//Funcion mostrar texto
function mostrarTexto(texto){
    return document.getElementById(texto).style.display = 'block';
}

//Funcion quitar texto
function desaparecerTexto(texto){
    return document.getElementById(texto).style.display = 'none';
}

//Funcion encriptar
function encriptar(texto){
    let e = texto.replace(/e/g, "enter");
    let i = e.replace(/i/g, "imes");
    let a = i.replace(/a/g, "ai");
    let o = a.replace(/o/g, "ober");
    let u = o.replace(/u/g, "ufat");

    let encriptado = u;
    return encriptado;
}

//Funcion desencriptar
function desencriptar(texto){
    let enter = texto.replace(/enter/g, "e");
    let imes = enter.replace(/imes/g, "i");
    let ai = imes.replace(/ai/g, "a");
    let ober = ai.replace(/ober/g, "o");
    let ufat = ober.replace(/ufat/g, "u");

    let desencriptado = ufat;
    return desencriptado;
}



function encriptarTexto(){
    //Quitar info de inico en salida
    desaparecerTexto('info');

    //Mostrar estructura para copiar texto
    mostrarTexto('informacionEncriptada');

    //Encriptar texto
    let textoUsuario = document.getElementById('textareaEntrada').value;
    let textoEncriptado = encriptar(textoUsuario);

    //Pasar texto encriptado a textarea de salida
    document.getElementById('infoSalida').value = textoEncriptado;

    //Limpiar caja entrada
    limpiarCaja('#textareaEntrada');
}

function desencriptarTexto(){
    //Quitar info de inico en salida
    desaparecerTexto('info');

    //Mostrar estructura para copiar texto
    mostrarTexto('informacionEncriptada');
    
    //Desencriptar texto
    let textoUsuario = document.getElementById('textareaEntrada').value;
    let textoDesencriptado = desencriptar(textoUsuario);

    //Pasar texto desencriptado a textarea de salida 
    document.getElementById('infoSalida').value = textoDesencriptado;

    //Limpar caja entrada
    limpiarCaja('#textareaEntrada');
}

function copiarTexto(){
    
    //Copiar texto
    let copiarSalida = document.getElementById('infoSalida');
    copiarSalida.select();
    copiarSalida.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("¡Copiado!");

    //Limpiar caja de salida
    limpiarCaja('#infoSalida');
}