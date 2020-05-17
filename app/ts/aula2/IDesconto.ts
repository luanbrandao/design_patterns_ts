interface IDesconto {
  desconta(orcamento : Orcamento):number;
  setProximo(proximo:IDesconto);
}