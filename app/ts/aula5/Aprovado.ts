class Aprovado implements EstadoDeUmOrcamento{
 
  aplicaDescontoExtra(orcamento:Orcamento) {
    
    orcamento.valor -= orcamento.valor * 0.02;
  }

  aprova(orcamento: Orcamento) {
    throw new Error("Orçamentos aprovado!");
  }
  reprova(orcamento: Orcamento) {
    throw new Error("Orçamentos aprovados não podem ser reprovados!");
  }
  finaliza(orcamento: Orcamento) {
    orcamento.estadoAtual = new Finalizado()
    
  }
}