 class Orcamento {

  private  valor: number ;
  private itens:Item[] =[]

  constructor(valor:number) {    
    this.valor = valor;
    this.itens = []
  }

  getValor(){
    return this.valor;
  }

  adicionaItem(item : Item) {
    this.itens.push(item);
  }

  getItens(){
    return [].concat(this.itens);
  }

}