interface Pessoa{
    nome?:string
    idade?:number
    endereço?:{
        rua?:string|undefined
        numero?:number
    }
}
const pessoa = {
    nome:"Sergio",
    idade:26,
    endereço:{
        rua:undefined,
        numero: 25
    }
}
// const alguem : Pessoa = {nome:"Ana"}
const chave : string = 'rua'
console.log(pessoa.endereço[chave] ?? "Não informado")