// class ICMS implements Imposto {
class ICMS extends Imposto {

  //aula 4
  public constructor(outroImposto: Imposto){
    super(outroImposto)
  }

  // calcula( orcamento:Orcamento ) {
  //  return orcamento.getValor() * 0.1;
  // }

  calcula( orcamento:Orcamento ) {
   return orcamento.getValor() * 0.1 + this.calculoDoOutroImposto(orcamento);
  }

}