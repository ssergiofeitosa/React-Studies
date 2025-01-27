const inc = document.getElementById("incremento")as HTMLButtonElement;
const dec = document.getElementById("decremento")as HTMLButtonElement;
const reset = document.getElementById("reset")as HTMLButtonElement;
const displayNum = document.getElementById("display")as HTMLSpanElement;
let contador:number = 0;


function atualizar():void{
    displayNum.textContent=contador.toString();

}
function incrementar():void{
    contador++;
    atualizar()
}
function decrementar():void{
    contador--;
    atualizar()
}
function resetar():void{
    contador=0;
    atualizar();
}
inc.addEventListener("click",incrementar);
dec.addEventListener("click",decrementar);
reset.addEventListener("click",resetar);