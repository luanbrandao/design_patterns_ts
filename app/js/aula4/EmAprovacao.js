class EmAprovacao {
    aplicaDescontoExtra(orcamento) {
        orcamento.valor -= orcamento.valor * 0.05;
    }
    aprova(orcamento) {
        orcamento.estadoAtual = new Aprovado();
    }
    reprova(orcamento) {
        orcamento.estadoAtual = new Reprovado();
    }
    finaliza(orcamento) {
        throw new Error("Orçamento em aprovação  não podem ir dereto para finalizado!");
    }
}
