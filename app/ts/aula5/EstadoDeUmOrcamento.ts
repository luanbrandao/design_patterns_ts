interface EstadoDeUmOrcamento {
  aplicaDescontoExtra(orcamento:Orcamento):any;

  aprova(orcamento : Orcamento);
  reprova(orcamento : Orcamento);
  finaliza(orcamento : Orcamento);
  
}