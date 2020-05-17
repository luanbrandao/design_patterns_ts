class TemplateDeImpostoCondicional {
    calcula(orcamento) {
        if (this.deveUsarMaximaTaxacao(orcamento)) {
            return this.maximaTaxacao(orcamento);
        }
        else {
            return this.minimaTaxacao(orcamento);
        }
    }
}
