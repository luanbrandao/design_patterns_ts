class CalculadorDeDescontos {
    calcula(orcamento) {
        // if(orcamento.getItens().length > 5) {
        //   return orcamento.getValor() * 0.1
        // }
        // else if ( orcamento.getValor() > 500.0) {
        //   return orcamento.getValor() * 0.07;
        // }
        // a classe ainda ia continuar crescendo
        // let desconto: number =
        //   new DescontoPorCincoItens()
        //     .desconto(orcamento);
        // if(desconto == 0)  desconto = new DescontoPorMaisDeQuinhentosReais()
        //     .desconto(orcamento);
        let d1 = new DescontoPorCincoItens();
        let d2 = new DescontoPorMaisDeQuinhentosReais();
        let d3 = new SemDesconto();
        d1.setProximo(d2);
        d2.setProximo(d3);
        return d1.desconta(orcamento);
        return 0;
    }
}
