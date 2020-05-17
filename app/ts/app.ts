console.log("aula 1, teste de impostos")

let iss:Imposto = new ISS();
let icms:Imposto = new ICMS();

let orcamento:Orcamento= new Orcamento(500.0);

let calculador:CalculadorDeImpostos = new CalculadorDeImpostos();

calculador.realizaCalculo(orcamento,iss);
calculador.realizaCalculo(orcamento,icms);