const pessoa={
    nome: "Sergio",
    idade:"26",
    endereco:{
        rua: "walter dourado",
        bairro : "country club",
        
    }
}


const {idade,endereco, rua} = pessoa

document.body.innerText=JSON.stringify(Object.values(endereco,rua))