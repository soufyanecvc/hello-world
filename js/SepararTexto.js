let caja = document.getElementById('caja');
let element = document.createElement('p');

do {
    let palabra = prompt("Escribe tu texto");
    caja.append(element);
    element.innerHTML += palabra;
    var conf = confirm();
    if(conf == true){
        element.innerHTML += "-";
    }else {
        element.innerHTML += "";
    }
}while(conf == true)