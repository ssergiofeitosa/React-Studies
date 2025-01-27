//irá iterar por cada caractere da string/array
// let arr : number[]=[1,2,3,4,5]
// for(let v of arr){
//     console.log(v)
// }
// let str :string="ola"
// for(let char of str){
//     console.log(char)
// }
////////////////////////
//forEach -> executa um função para cada elemento de um array
//usando sintaxe de função flecha/implicita
// let arr:number[] = [1,2,3]
// arr.forEach(xd=>console.log(xd))
//ou
var arr = [1, 2, 3];
arr.forEach(function (element, indice, vetor) { console.log(element, indice, vetor); });
