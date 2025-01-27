// let arr : string[] = ["Sergio", "Feitosa"]
// let[pNome,unome]= arr

// arr.forEach(element => {
//     element=element+"1"
//    console.log(element) 
// });

interface Pessoa{
    nome?:string
    idade?:number
    endereço?:{
        rua?:string|undefined
        numero?:number
    }
}
const person = {
    nome:"Sergio",
    idade:26,
    endereço:{
        rua:undefined,
        numero: 25
    }
}



const {nome:fnome , idade:fidade = 26} = person               // renomeando os atributos nome e idade, mudando o valor do atributo idade //
// console.log(JSON.stringify({fnome,fidade}))

function info ({nome,idade}):string{
    return `${idade} ${nome} `
}

console.log(info(person))