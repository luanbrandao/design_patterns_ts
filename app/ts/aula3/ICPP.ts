// class ICPP implements Imposto {
class ICPP  extends TemplateDeImpostoCondicional {

  // calcula(orcamento: Orcamento): number {
  //   if( orcamento.getValor() > 500) {
  //     return orcamento.getValor() * 0.07;
  //   }

  //   return orcamento.getValor() * 0.05;
  // }


  deveUsarMaximaTaxacao(orcamento: Orcamento) {
    return orcamento.getValor() > 500;     
  }
  maximaTaxacao(orcamento: Orcamento) {
    return orcamento.getValor() * 0.07;
  }
  minimaTaxacao(orcamento: Orcamento) {
    return orcamento.getValor() * 0.5;
  }

}