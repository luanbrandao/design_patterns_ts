class ItemDaNota {

  private name:string;
  private valor:number


  constructor( name:string,valor:number) {
    this.name = name;
    this.valor = valor;
  }

  
  
  public getName() : string {
    return this.name;
  }

  public setName(name : string) {
    this.name = name;
  }
  
  
  public getValor(){
    return this.valor;
  }
  public setvalor(valor:number) {
    this.valor = valor;
  }
  


  
}