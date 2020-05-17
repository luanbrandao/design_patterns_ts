// abstract class TemplateDeImpostoCondicional implements Imposto {
abstract class TemplateDeImpostoCondicional extends Imposto {
  
  // não tem constructor, pois nesse exemplo 
  // impostos condicionais não tem impostos compostos.
  calcula(orcamento : Orcamento) {

    if(this.deveUsarMaximaTaxacao(orcamento) ) {
      return this.maximaTaxacao(orcamento) + this.calculoDoOutroImposto(orcamento);
    } else {
      return this.minimaTaxacao(orcamento) + this.calculoDoOutroImposto(orcamento);
    }    
  }

  abstract deveUsarMaximaTaxacao(orcamento:Orcamento);
  abstract maximaTaxacao(orcamento:Orcamento);
  abstract minimaTaxacao(orcamento:Orcamento);
}