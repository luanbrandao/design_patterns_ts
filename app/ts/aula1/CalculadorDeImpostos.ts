class CalculadorDeImpostos {
  realizaCalculo(orcamento:Orcamento, impostoQualquer: Imposto) { 
      const icms = impostoQualquer.calcula(orcamento)
      console.log("icms -> ", icms);
  }

  // realizaCalculoISS(orcamento:Orcamento) {    
  //    const icms = new ICMS().calculaICMS(orcamento)
  //     console.log("icms -> ", icms);    
  // }
}