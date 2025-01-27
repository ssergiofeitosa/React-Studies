// const teste : number | null = null;
// const printar : number = teste ?? 10
// console.log(printar)


// const nome: string | null = null ;
// const idade: number | undefined = undefined;

// const nomeFinal: string = nome ?? "Desconhecido";
// const idadeFinal: number = idade ?? 18;

// console.log(`Nome: ${nomeFinal}, Idade: ${idadeFinal}`);


//////////////////////
// interface Usuario {
//     nome: string | null;
//     email: string | undefined;
//     idade?: number;
//   }
  
//   const usuario: Usuario = {
//     nome: null,
//     email: undefined,
//     idade: 25,
//   };


// let nomefinal : string = usuario.nome ?? "Sergio"
// let emailfinal : string = usuario.email ?? "fsfs@html.c"
// let idadefinal : number = usuario.idade ?? 26

// console.log(nomefinal, emailfinal, idadefinal)

////////////////////////

// function olaPessoa (nome?:string):string{   // o ? faz com que o parâmetro seja opcional
//     return `olá ${nome??"Visitante"}`         
// }
// console.log(olaPessoa())


//////////////////////

// let prioridade1 :number | null= null
// let prioridade2 : number | undefined 
// let prioridade3 : number = 5

// let resultado : number = prioridade1 ?? prioridade2 ?? prioridade3        //printa 5


////////////////

// interface Produto{
//     nome? : string | null
//     preco? : number | undefined | null
// }

// function validar (produto : Produto):string{
//     const nome = produto.nome ?? "Produto sem nome"
//     const preco = produto.preco ?? "Produto sem preço"
//     return `Nome:${nome} ----------- Preço:R$${preco}`
// }

// console.log(validar({nome:"Celular",preco:1500}))