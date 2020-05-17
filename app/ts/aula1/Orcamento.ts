 class Orcamento {

  private  valor: number ;

  constructor(valor:number) {
    console.log("create Orcamento")
    this.valor = valor;
  }

  getValor(){
    return this.valor;
  }

}