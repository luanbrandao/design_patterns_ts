class Orcamento {
    constructor(valor) {
        this.itens = [];
        this.valor = valor;
        this.itens = [];
        this.estadoAtual = new EmAprovacao();
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
    // aplicarDescontoExtra() {
    //   if(this.estadoAtual == this.EM_APROVACAO ){
    //     this.valor = this.valor - (this.valor * 0.05)
    //   } else if(this.estadoAtual == this.APROVADO) {
    //     this.valor = this.valor - (this.valor * 0.02)
    //   } else {
    //     throw  new Error("Somente orcamento em aprovação ou aprovados recebem descontos!");
    //   }
    // }
    aplicarDescontoExtra() {
        // passa o proprio orcamento
        this.estadoAtual.aplicaDescontoExtra(this);
    }
    aprova() {
        this.estadoAtual.aprova(this);
    }
    reprova() {
        this.estadoAtual.reprova(this);
    }
    finaliza() {
        this.estadoAtual.finaliza(this);
    }
}
