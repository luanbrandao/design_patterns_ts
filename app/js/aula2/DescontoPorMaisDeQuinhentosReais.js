class DescontoPorMaisDeQuinhentosReais {
    desconta(orcamento) {
        if (orcamento.getValor() > 500.0) {
            return orcamento.getValor() * 0.07;
        }
        return this.proximo.desconta(orcamento);
    }
    setProximo(proximo) {
        this.proximo = proximo;
    }
}
