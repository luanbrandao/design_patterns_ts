class Finalizado implements EstadoDeUmOrcamento {
  aplicaDescontoExtra(orcamento : Orcamento)  {
   throw new Error("Orçamentos finalizados não recebem descontos extras!");
  }

  aprova(orcamento: Orcamento) {
    throw new Error("Orçamentos já finalizado!");
  }
  reprova(orcamento: Orcamento) {
    throw new Error("Orçamentos já finalizado!");
  }
  finaliza(orcamento: Orcamento) {
    throw new Error("Orçamentos já finalizado!");    
  }
}