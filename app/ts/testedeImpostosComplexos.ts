
  let iss:Imposto = new ISS( new ICMS(new ICPP(null)) );
  

  let orcamento:Orcamento = new Orcamento(500);

  let valor: number = iss.calcula(orcamento)

  console.log("valor -> ", valor);
