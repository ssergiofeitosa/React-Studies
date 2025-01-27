const array:number[]=[1,2,3,4,5]
const array2 : number[]=[2,3,4,5,6]
const v : number =2
// console.log(...array)
function multiply(v:number,...array2):number{
    let sum : number =0 
    array2.forEach(element => {
        element*v
        sum += element*v
    });
    return sum
}

console.log(multiply(v,array2))