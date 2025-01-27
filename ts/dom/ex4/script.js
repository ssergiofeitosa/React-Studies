//estilizacao dinamica e removendo um elemento
var botaoMudar = document.getElementById("btn");
var header = document.querySelector("h1");
var remove = document.getElementsByClassName("botao")[1];
botaoMudar.addEventListener("click", function () {
    if (header.style.color != "red") {
        header.style.color = "red";
    }
    else
        header.style.color = "black";
});
remove.addEventListener("click", function () {
    botaoMudar.remove();
});
//soma dinamica
var dados = document.querySelectorAll("input");
var botaoSomar = document.getElementById("soma");
var resultado = document.getElementById("result");
botaoSomar.addEventListener("click", function () {
    var num1 = parseFloat(dados[0].value);
    var num2 = parseFloat(dados[1].value);
    var somatorio = num1 + num2;
    resultado.innerText = somatorio.toString();
});
//exibição e ocultação
var botaoToggle = document.getElementById("esconder");
var imagem = document.getElementById("imgg");
botaoToggle.addEventListener("click", function () {
    imagem.classList.toggle("hidden"); //troca a o seletor do tipo classe para 'hidden' se estiver setado 'visible', e vice versa
});
//validação de formularios
var enviar = document.getElementById("send");
var limpar = document.getElementById("clear");
var fname = document.getElementById("name");
var email = document.getElementById("email");
enviar.addEventListener("click", function () {
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
var iniciar = document.getElementById("start");
var parar = document.getElementById("stop");
var contador = document.getElementById("counter");
var resetar = document.getElementById("reset");
contador.innerText = "0";
var state = false;
var intervalo = null;
var valor = 0;
iniciar.addEventListener("click", function () {
    if (!state) {
        state = true;
        intervalo = setInterval(function () {
            valor++;
            contador.innerText = valor.toString();
        }, 1000);
    }
});
parar.addEventListener("click", function () {
    if (intervalo !== null && state) {
        state = false;
        clearInterval(intervalo);
    }
});
resetar.addEventListener("click", function () {
    intervalo = null;
    state = false;
    valor = 0;
    contador.innerText = "0";
});
//cronometro
var startC = document.getElementById("start");
var display = document.getElementById("cron");
var maxVal = 10;
display.innerText = "0";
var interval;
var val = 0;
startC.addEventListener("click", function () {
    if (interval === null) {
        interval = setInterval(function () {
            val++;
            display.innerText = val.toString();
            if (val === maxVal) {
                clearInterval(interval);
                interval = null;
                val = 0;
            }
        }, 1000);
    }
});
