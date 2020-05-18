class NotaFiscal {
    constructor(razaoSocial, cnpj, dataDeEmissao, valorBruto, impostos, itens, observacoes) {
        this.razaoSocial = razaoSocial,
            this.cnpj = cnpj;
        this.dataDeEmissao = dataDeEmissao;
        this.valorBruto = valorBruto;
        this.impostos = impostos;
        this.itens = itens;
        this.observacoes = observacoes;
    }
    getRazaoSocial() {
        return this.razaoSocial;
    }
    getCnpj() {
        return this.cnpj;
    }
    getDataDeEmissao() {
        return this.dataDeEmissao;
    }
    getValorBruto() {
        return this.valorBruto;
    }
    getImpostos() {
        return this.impostos;
    }
    getItems() {
        return this.itens;
    }
    getObservacao() {
        return this.observacoes;
    }
    setRazaoSocial(razaoSocial) {
        this.razaoSocial = razaoSocial;
    }
    setCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    setDataDeEmissao(dataDeEmissao) {
        this.dataDeEmissao = dataDeEmissao;
    }
    setValorBruto(valorBruto) {
        this.valorBruto = valorBruto;
    }
    setImpostos(impostos) {
        this.impostos = impostos;
    }
    setItens(itens) {
        this.itens = itens;
    }
    setObservacoes(observacoes) {
        this.observacoes = observacoes;
    }
}
