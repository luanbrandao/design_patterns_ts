class ISS implements Imposto {

  calcula( orcamento:Orcamento ) {
    return orcamento.getValor() * 0.06;
  }

}