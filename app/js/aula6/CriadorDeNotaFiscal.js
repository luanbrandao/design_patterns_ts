class CriadorDeNotaFiscal {
    constructor() {
        this.todosItens = [];
        this.valorTotal = 0;
        this.impostos = 0;
    }
    paraEmpresa(razaoSocial) {
        this.razaoSocial = razaoSocial;
    }
    conCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    comItem(item) {
        this.todosItens.push(item);
        this.valorTotal += this.valorTotal + item.getValor();
        this.impostos += this.valorTotal + item.getValor() * 0.05;
    }
    comObservacoes(observacoes) {
        this.observacoes = observacoes;
    }
    naDataAtual() {
        this.data = new Date();
    }
    constroi() {
        return new NotaFiscal(this.razaoSocial, this.cnpj, this.data, this.valorTotal, this.impostos, this.todosItens, this.observacoes);
    }
}
