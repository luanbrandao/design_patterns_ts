abstract class TemplateDeImpostoCondicional implements Imposto {
  
  calcula(orcamento : Orcamento) {

    if(this.deveUsarMaximaTaxacao(orcamento) ) {
      return this.maximaTaxacao(orcamento);
    } else {
      return this.minimaTaxacao(orcamento);    
    }    
  }

  abstract deveUsarMaximaTaxacao(orcamento:Orcamento);
  abstract maximaTaxacao(orcamento:Orcamento);
  abstract minimaTaxacao(orcamento:Orcamento);
}