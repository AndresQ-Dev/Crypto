var btnEncriptar = document.querySelector(".btnEncriptar");
var btnDesencriptar = document.querySelector(".btnDesencriptar");
var btnCopiar = document.querySelector(".btnCopiar");
var contenedorImagenPanel = document.querySelector(".contenedorImagenPanel");
var contenedorH3 = document.querySelector(".contenedorH3");
var contenedorP = document.querySelector(".contenedorParrafo");
var contenedorResultado = document.querySelector(".contenedorResultado");
var contenedorCopiar = document.querySelector(".contenedorCopiar");
var resultado = document.querySelector(".textoResultado");
var textArea = document.querySelector(".textArea"); // Selección del textarea

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = decrypter;
btnCopiar.onclick = copiar;

function encriptar() {
    var text = recuperarTexto();
    if (text === "") {
        alert("Debe escribir algo en el campo de texto");
    } else {
        ocultarPanel();
        // Esta función muestra el contenedorResulta y Boton oculto
        mostrarResultado();
        resultado.textContent = encrypter(text);
    }
}

function decrypter() {
    ocultarPanel();
    resultado.textContent = decrypt(recuperarTexto());
    mostrarResultado();
}

function copiar() {
    textArea.value = recuperarTextoBloque2();
}

function recuperarTexto() {
    var text = document.querySelector(".textArea");
    return text.value;
}

function ocultarPanel() {
    contenedorImagenPanel.classList.add("hide");
    contenedorH3.classList.add("hide");
    contenedorP.classList.add("hide");
}

function mostrarResultado() {
    // Remover el método "hide" de la clases ocultas por default//
    contenedorResultado.classList.remove("hide");
    contenedorCopiar.classList.remove("hide");
}

function encrypter(mensaje) {
    var text = mensaje;
    var final = "";

    for (var i = 0; i < text.length; i++) {
        if (text[i] == "a") {
            final = final + "ai";
        } else if (text[i] == "e") {
            final = final + "enter";
        } else if (text[i] == "i") {
            final = final + "imes";
        } else if (text[i] == "o") {
            final = final + "ober";
        } else if (text[i] == "u") {
            final = final + "ufat";
        } else {
            final = final + text[i];
        }
    }
    return final;
}

function decrypt(mensaje) {
    var text = mensaje;
    var final = "";

    for (var i = 0; i < text.length; i++) {
        if (text[i] == "a") {
            final = final + "a";
            i = i + 1;
        } else if (text[i] == "e") {
            final = final + "e";
            i = i + 4;
        } else if (text[i] == "i") {
            final = final + "i";
            i = i + 3;
        } else if (text[i] == "o") {
            final = final + "o";
            i = i + 3;
        } else if (text[i] == "u") {
            final = final + "u";
            i = i + 3;
        } else {
            final = final + text[i];
        }
    }
    return final;
}

function recuperarTextoBloque2() {
    var text = document.querySelector(".textoResultado");
    return text.textContent;
}

textArea.addEventListener("click", function () {
    textArea.focus();
});