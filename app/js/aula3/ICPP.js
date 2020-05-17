// class ICPP implements Imposto {
class ICPP extends TemplateDeImpostoCondicional {
    // calcula(orcamento: Orcamento): number {
    //   if( orcamento.getValor() > 500) {
    //     return orcamento.getValor() * 0.07;
    //   }
    //   return orcamento.getValor() * 0.05;
    // }
    deveUsarMaximaTaxacao(orcamento) {
        return orcamento.getValor() > 500;
    }
    maximaTaxacao(orcamento) {
        return orcamento.getValor() * 0.07;
    }
    minimaTaxacao(orcamento) {
        return orcamento.getValor() * 0.05;
    }
}
