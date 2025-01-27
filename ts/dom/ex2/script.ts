const cont = document.getElementById("container")as HTMLDivElement
const btn = document.getElementById("switch")as HTMLButtonElement

btn.addEventListener("click",()=>{
    if(cont.className==="classeLight"){
        cont.className="classeDark"
    }else{
        cont.className="classeLight"
    }
}
)