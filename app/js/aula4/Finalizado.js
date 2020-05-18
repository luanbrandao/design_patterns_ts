class Finalizado {
    aplicaDescontoExtra(orcamento) {
        throw new Error("Orçamentos finalizados não recebem descontos extras!");
    }
    aprova(orcamento) {
        throw new Error("Orçamentos já finalizado!");
    }
    reprova(orcamento) {
        throw new Error("Orçamentos já finalizado!");
    }
    finaliza(orcamento) {
        throw new Error("Orçamentos já finalizado!");
    }
}
