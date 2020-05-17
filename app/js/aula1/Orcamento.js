class Orcamento {
    constructor(valor) {
        this.itens = [];
        this.valor = valor;
        this.itens = [];
    }
    getValor() {
        return this.valor;
    }
    adicionaItem(item) {
        this.itens.push(item);
    }
    getItens() {
        return [].concat(this.itens);
    }
}
