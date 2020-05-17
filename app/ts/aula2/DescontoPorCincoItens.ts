class DescontoPorCincoItens implements IDesconto {
  
  private proximo:IDesconto;
  
  desconta(orcamento: Orcamento) {
    if(orcamento.getItens().length > 5) {
      return orcamento.getValor() * 0.1
    }

    return this.proximo.desconta(orcamento);
  }

  setProximo(proximo:IDesconto){
    this.proximo = proximo;
  }
}