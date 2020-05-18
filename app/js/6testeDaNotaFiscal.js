let itens = [
    new ItemDaNota("Item 1", 200),
    new ItemDaNota("Item 2", 400),
];
let valorTotal = 0;
itens.forEach(item => {
    valorTotal += item.getValor();
});
let impostos = valorTotal * 0.05;
// let nf : NotaFiscal = new NotaFiscal(
// "razao socian",
// "cnpj",
//  new Date(),
//  valorTotal,
//  impostos,
//  itens,
//  "obs qualquer coisa"
// );
let criador = new NotaFiscalBuilder();
criador.paraEmpresa("Caelum")
    .conCnpj("123123123")
    .comItem(new ItemDaNota("Item 1", 200))
    .comItem(new ItemDaNota("Item 2", 300))
    .comItem(new ItemDaNota("Item 3", 400))
    .comObservacoes("ob")
    .naDataAtual();
let nota = criador.constroi();
console.log(nota.getValorBruto());
