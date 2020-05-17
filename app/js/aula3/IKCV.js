// class IKCV implements Imposto {
class IKCV extends TemplateDeImpostoCondicional {
    // calcula(orcamento: Orcamento): number {
    //   if( orcamento.getValor() > 500
    //       && temItemMaiorQue100ReaisNo(orcamento)          
    //   ) {
    //     return orcamento.getValor() * 0.10;
    //   }
    //   return orcamento.getValor() * 0.06;
    // }
    temItemMaiorQue100ReaisNo(orcamento) {
        orcamento.getItens().forEach((item) => {
            if (item.getValor() > 100)
                return true;
        });
        return false;
    }
    deveUsarMaximaTaxacao(orcamento) {
        return orcamento.getValor() > 500
            && this.temItemMaiorQue100ReaisNo(orcamento);
    }
    maximaTaxacao(orcamento) {
        return orcamento.getValor() * 0.06;
    }
    minimaTaxacao(orcamento) {
        return orcamento.getValor() * 0.10;
    }
}
