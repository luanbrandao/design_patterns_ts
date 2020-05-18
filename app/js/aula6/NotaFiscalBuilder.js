class NotaFiscalBuilder {
    constructor() {
        this.todosItens = [];
        this.valorTotal = 0;
        this.impostos = 0;
        this.todasAcoesAseremExecutadas = [];
    }
    adicionaAcao(acao) {
        this.todasAcoesAseremExecutadas.push(acao);
    }
    paraEmpresa(razaoSocial) {
        this.razaoSocial = razaoSocial;
        return this;
    }
    conCnpj(cnpj) {
        this.cnpj = cnpj;
        return this;
    }
    comItem(item) {
        this.todosItens.push(item);
        this.valorTotal += item.getValor();
        this.impostos += item.getValor() * 0.05;
        return this;
    }
    comObservacoes(observacoes) {
        this.observacoes = observacoes;
        return this;
    }
    naDataAtual() {
        this.data = new Date();
        return this;
    }
    constroi() {
        const nf = new NotaFiscal(this.razaoSocial, this.cnpj, this.data, this.valorTotal, this.impostos, this.todosItens, this.observacoes);
        // new EnviadorDeEmail().executa(nf);
        // new NotaFiscalDao().executa(nf);
        // new EnviadorDeSms().executa(nf);
        // new Impressora().executa(nf);
        this.todasAcoesAseremExecutadas.forEach(acao => {
            acao.executa(nf);
        });
        return nf;
    }
}
