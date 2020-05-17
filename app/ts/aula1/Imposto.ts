// interface Imposto {
//  calcula(orcamento: Orcamento):number;
// }

// aula 4
 abstract class Imposto {

   protected outroImposto:Imposto;

   
  //  constructor();
   constructor(outroImposto: Imposto);
   constructor(outroImposto?: Imposto|null) {
    if (outroImposto instanceof Imposto) {
        this.outroImposto = outroImposto;
    } else {
      this.outroImposto = null;
    }
}
   
  abstract calcula(orcamento: Orcamento):number;

   protected calculoDoOutroImposto(orcamento:Orcamento){
     if(this.outroImposto == null) return 0;
     return this.outroImposto.calcula(orcamento)
   }
}