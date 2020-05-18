class Reprovado implements EstadoDeUmOrcamento{
  aplicaDescontoExtra(orcamento:Orcamento) {
    throw new Error("Orçamentos reprovados não recebem descontos extras!");    
  }

  
  aprova(orcamento: Orcamento) {
    throw new Error("Orçamentos reprovados não podem ser aprovados!");
  }
  reprova(orcamento: Orcamento) {
    throw new Error("Orçamento já está reprovado!");
  }
  finaliza(orcamento: Orcamento) {
    orcamento.estadoAtual = new Finalizado();
    
  }
}