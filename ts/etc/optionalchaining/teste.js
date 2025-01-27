const user={
    nome:"Sergio",
    idade:26,
    address:{
        street:"Walter dourado",
        numero: 25,
        CEP:{
            city: "Juazeiro",
            state: "Bahia"
        }
    }

}


const key = 'state'
console.log(user.address?.[key] ?? "Propriedade nao existente")