// const teste : number | null = null;
// const printar : number = teste ?? 10
// console.log(printar)
function validar(produto) {
    var _a, _b;
    var nome = (_a = produto.nome) !== null && _a !== void 0 ? _a : "Produto sem nome";
    var preco = (_b = produto.preco) !== null && _b !== void 0 ? _b : "Produto sem preço";
    return "Nome:".concat(nome, " ----------- Pre\u00E7o:R$").concat(preco);
}
console.log(validar({ nome: "Celular", preco: 1500 }));
