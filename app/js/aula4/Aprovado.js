class Aprovado {
    aplicaDescontoExtra(orcamento) {
        orcamento.valor -= orcamento.valor * 0.05;
    }
    aprova(orcamento) {
        throw new Error("Orçamentos aprovado!");
    }
    reprova(orcamento) {
        throw new Error("Orçamentos aprovados não podem ser reprovados!");
    }
    finaliza(orcamento) {
        orcamento.estadoAtual = new Finalizado();
    }
}
