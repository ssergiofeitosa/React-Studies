// let arr : string[] = ["Sergio", "Feitosa"]
// let[pNome,unome]= arr
var person = {
    nome: "Sergio",
    idade: 26,
    endereço: {
        rua: undefined,
        numero: 25
    }
};
var fnome = person.nome, _a = person.idade, fidade = _a === void 0 ? 26 : _a; // renomeando os atributos nome e idade, mudando o valor do atributo idade //
// console.log(JSON.stringify({fnome,fidade}))
function info(_a) {
    var nome = _a.nome, idade = _a.idade;
    return "".concat(idade, " ").concat(nome, " ");
}
console.log(info(person));
