// abstract class TemplateDeImpostoCondicional implements Imposto {
class TemplateDeImpostoCondicional extends Imposto {
    // não tem constructor, pois nesse exemplo 
    // impostos condicionais não tem impostos compostos.
    calcula(orcamento) {
        if (this.deveUsarMaximaTaxacao(orcamento)) {
            return this.maximaTaxacao(orcamento) + this.calculoDoOutroImposto(orcamento);
        }
        else {
            return this.minimaTaxacao(orcamento) + this.calculoDoOutroImposto(orcamento);
        }
    }
}
