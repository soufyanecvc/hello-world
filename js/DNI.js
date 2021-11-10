var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
// 1. Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado.
let DNIN = prompt("Introduzca tu DNI");
let DNIL = prompt("Escribe la letra de tu DNI");
let caja = document.getElementById('caja');

// 2. En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
while(DNIN.length !==8){
    DNIN = prompt("Introduzca el DNI correcto");  
}

// 3. Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
var position = DNIN %23;
let element = document.createElement('p');
caja.append(element);
// 4. Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.
if(DNIL == letras[DNIN%23]){
    element.innerHTML += "El número y la letra de DNI son correctos";
} else {
    element.innerHTML += "La letra que ha indicado no es correcta";
}