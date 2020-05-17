class DescontoPorCincoItens {
    desconta(orcamento) {
        if (orcamento.getItens().length > 5) {
            return orcamento.getValor() * 0.1;
        }
        return this.proximo.desconta(orcamento);
    }
    setProximo(proximo) {
        this.proximo = proximo;
    }
}
