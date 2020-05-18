class Reprovado {
    aplicaDescontoExtra(orcamento) {
        throw new Error("Orçamentos reprovados não recebem descontos extras!");
    }
    aprova(orcamento) {
        throw new Error("Orçamentos reprovados não podem ser aprovados!");
    }
    reprova(orcamento) {
        throw new Error("Orçamento já está reprovado!");
    }
    finaliza(orcamento) {
        orcamento.estadoAtual = new Finalizado();
    }
}
