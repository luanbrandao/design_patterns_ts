// class ICMS implements Imposto {
class ICMS extends Imposto {

  public constructor(outroImposto: Imposto){
    super(outroImposto)
  }

  calcula( orcamento:Orcamento ) {
   return orcamento.getValor() * 0.1 + this.calculoDoOutroImposto(orcamento);
  }

}