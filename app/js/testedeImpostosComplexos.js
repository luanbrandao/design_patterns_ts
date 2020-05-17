let iss = new ISS(new ICMS(new ICPP(null)));
let orcamento = new Orcamento(500);
let valor = iss.calcula(orcamento);
console.log("valor -> ", valor);
