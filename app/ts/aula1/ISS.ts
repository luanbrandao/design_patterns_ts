// class ISS implements Imposto {
class ISS extends Imposto {

  //aula 4
  public constructor(outroImposto:Imposto){
    super(outroImposto)
  }

  // calcula( orcamento:Orcamento ) {
  //   return orcamento.getValor() * 0.06;
  // }

  //aula 4
  calcula( orcamento:Orcamento ) {
    return orcamento.getValor() * 0.06 + this.calculoDoOutroImposto(orcamento);
  }

}