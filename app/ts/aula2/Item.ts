class Item {
  private name:string;
  private valor:number;
  constructor(name:string,valor:number) {
    this.name = name;
    this.valor = valor    
  }

  getName(){
    return this.name;    
  }
  
  getValor(){
    return this.valor;
  }
}