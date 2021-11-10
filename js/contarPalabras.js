//Obtenemos el texto mediante una alerta de pantalla
let caja = document.getElementById('caja');
let element = document.createElement('p');
let texto = prompt("Escribe tu texto");
caja.append(element);

//Reemplazamos los saltos de linea por espacios
texto = texto.replace (/\r?\n/g," ");

//Reemplazamos los espacios seguidos por uno solo
texto = texto.replace (/[ ]+/g," ");

//Quitarmos los espacios del principio y del final
texto = texto.replace (/^ /,"");
texto = texto.replace (/ $/,"");

//Troceamos el texto por los espacios
let textoTroceado = texto.split (" ");

//Contamos todos los trozos de cadenas que existen
let numeroPalabras = textoTroceado.length;

//Mostramos el número de palabras por pantalla
element.innerHTML = numeroPalabras;