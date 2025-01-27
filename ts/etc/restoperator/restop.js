var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var person1 = {
    nome: "Sergio",
    idade: 26,
    endereço: {
        rua: "water golden",
        numero: 25
    }
};
//const {nome,...resto}=person1               // vai retornar todos os outros valores a partir do atributo nome
var nome = person1.nome, idade = person1.idade, rest = __rest(person1, ["nome", "idade"]);
console.log(JSON.stringify(rest));
