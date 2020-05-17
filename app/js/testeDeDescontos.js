let descontos = new CalculadorDeDescontos();
let orcamento = new Orcamento(600);
orcamento.adicionaItem(new Item("Caneta ", 250));
orcamento.adicionaItem(new Item("LAPIS ", 250));
let descontoFinal = descontos.calcula(orcamento);
console.log("desconto final = ", descontoFinal);
