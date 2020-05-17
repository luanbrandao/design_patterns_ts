class DescontoPorMaisDeQuinhentosReais implements IDesconto {
  
  private proximo:IDesconto;

  desconta(orcamento: Orcamento) {
    if(orcamento.getValor()> 500.0) {
      return orcamento.getValor() * 0.07
    }

    
    return this.proximo.desconta(orcamento);
  }

  setProximo(proximo:IDesconto){
    this.proximo = proximo;
  }
}