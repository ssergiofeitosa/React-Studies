interface Pessoa{
    nome?:string
    idade?:number
    endereço?:{
        rua?:string|undefined
        numero?:number
    }
}
const person1 = {
    nome:"Sergio",
    idade:26,
    endereço:{
        rua:"water golden",
        numero: 25
    }
}

//const {nome,...resto}=person1               // vai retornar todos os outros valores a partir do atributo nome
const {nome,idade,...rest}=person1
console.log(JSON.stringify(rest))