class NotaFiscal {
  private razaoSocial: string; 
  private cnpj: string;  
  private dataDeEmissao:Date;
  private valorBruto:number;
  private impostos:number;
  public itens: ItemDaNota[];
  public observacoes: string;

  constructor(
    razaoSocial,
    cnpj,
    dataDeEmissao,
    valorBruto,
    impostos,
    itens,
    observacoes
  ) {

      this.razaoSocial = razaoSocial,
      this.cnpj = cnpj;
      this.dataDeEmissao = dataDeEmissao;
      this.valorBruto = valorBruto;
      this.impostos = impostos;
      this.itens = itens;
      this.observacoes = observacoes;

  }

  getRazaoSocial(){
    return this.razaoSocial;
  }


  getCnpj(){
    return this.cnpj;
  }

  getDataDeEmissao(){
    return this.dataDeEmissao
  }

  getValorBruto(){
    return this.valorBruto
  }

  getImpostos(){
    return this.impostos
  }

  getItems(){
    return this.itens
  }

  getObservacao(){
    return this.observacoes
  }
  
  setRazaoSocial(razaoSocial){
    this.razaoSocial = razaoSocial;
  }

  setCnpj(cnpj: string) {
    this.cnpj = cnpj;
  }

  setDataDeEmissao(dataDeEmissao: Date) {
  this.dataDeEmissao = dataDeEmissao
  }

  setValorBruto(valorBruto: number) {
  this.valorBruto = valorBruto
  }

  setImpostos(impostos: number) {
  this.impostos = impostos
  }

  setItens(itens: ItemDaNota[]) {
  this.itens = itens
  }
  
  setObservacoes(observacoes: string) {
  this.observacoes = observacoes
  }
 

}