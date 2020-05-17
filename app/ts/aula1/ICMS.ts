class ICMS implements Imposto {

  calcula( orcamento:Orcamento ) {
   return orcamento.getValor() * 0.1;
  }

}