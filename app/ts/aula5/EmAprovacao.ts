class EmAprovacao implements EstadoDeUmOrcamento{
  aplicaDescontoExtra(orcamento:Orcamento) {
    
    orcamento.valor -= orcamento.valor * 0.05;
  }

  aprova(orcamento: Orcamento) {
    orcamento.estadoAtual = new Aprovado()
  }
  reprova(orcamento: Orcamento) {
    orcamento.estadoAtual = new Reprovado()
  }
  finaliza(orcamento: Orcamento) {
    throw new Error("Orçamento em aprovação  não podem ir dereto para finalizado!");
  }
}