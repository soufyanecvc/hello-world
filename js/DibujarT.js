let num = prompt("mete un número, impar mejor");
let parrafo = document.getElementById('pintarT');
let caja = document.getElementById('caja');
let numDiv = Math.floor(num/2);

for(let i = 0; i<num; i++){
    if(i==0){
        for(let x=0; x<num;x++){
            parrafo.innerHTML += "*";
        }
    }else{
        let element = document.createElement('p');
        caja.append(element);
        for(let y = 0; y<numDiv; y++){
            element.innerHTML += "&nbsp;&nbsp;";
        }
        element.innerHTML+="*";
    }
}