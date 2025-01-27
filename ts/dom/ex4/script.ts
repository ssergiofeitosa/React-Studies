//estilizacao dinamica e removendo um elemento
const botaoMudar = document.getElementById("btn") as HTMLButtonElement;
const header = document.querySelector("h1") as HTMLHeadElement;
const remove = document.getElementsByClassName("botao")[1] as HTMLButtonElement;

botaoMudar.addEventListener("click", () => {
  if (header.style.color != "red") {
    header.style.color = "red";
  } else header.style.color = "black";
});

remove.addEventListener("click", () => {
  botaoMudar.remove();
});
//soma dinamica
const dados = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>;


const botaoSomar = document.getElementById("soma") as HTMLButtonElement;
const resultado = document.getElementById("result") as HTMLTextAreaElement;
botaoSomar.addEventListener("click", () => {
  let num1: number = parseFloat(dados[0].value);
  let num2: number = parseFloat(dados[1].value);
  let somatorio: number = num1 + num2;
  resultado.innerText = somatorio.toString();
});

//exibição e ocultação

const botaoToggle = document.getElementById("esconder") as HTMLButtonElement;
const imagem = document.getElementById("imgg") as HTMLImageElement;

botaoToggle.addEventListener("click", () => {
  imagem.classList.toggle("hidden"); //troca a o seletor do tipo classe para 'hidden' se estiver setado 'visible', e vice versa
});

//validação de formularios

const enviar = document.getElementById("send") as HTMLButtonElement;
const limpar = document.getElementById("clear") as HTMLButtonElement;
const fname = document.getElementById("name") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
enviar.addEventListener("click", () => {
  if (fname.value.trim() === "" && email.value === "") {
    alert("Preencha os campos!");
    return;
  }
  if (email.value.trim() === "") {
    alert("Preencha o email!");
    return;
  }
  if (fname.value.trim() === "") {
    alert("Preencha o nome!");
    return;
  }
});

//timer
const iniciar = document.getElementById("start")as HTMLButtonElement
const parar = document.getElementById("stop")as HTMLButtonElement
const contador = document.getElementById("counter")as HTMLSpanElement
const resetar = document.getElementById("reset")as HTMLButtonElement
contador.innerText="0"
var state :boolean=false
var intervalo :any| number|null=null
var valor=0

iniciar.addEventListener("click",()=>{
  if(!state){
    state=true
    intervalo=setInterval(()=>{
      valor++
      contador.innerText=valor.toString()

    },1000)


  }
})

parar.addEventListener("click",()=>{
  if(intervalo!==null && state){
    state=false
    clearInterval(intervalo)
  }

})

resetar.addEventListener("click",()=>{
  intervalo=null
  state=false
  valor=0
  contador.innerText="0"
})

//cronometro

const startC=document.getElementById("start")as  HTMLButtonElement
const display=document.getElementById("cron")as HTMLSpanElement
const maxVal:number =10
display.innerText="0"
var interval:null|any|number
var val:number=0


startC.addEventListener("click",()=>{
if(interval===null){
  interval= setInterval(()=>{
    val++
    display.innerText=val.toString()
    if(val===maxVal){
      clearInterval(interval!)
      interval=null
      val=0
      
    }
  },1000)

}
 
})
