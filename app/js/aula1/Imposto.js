// interface Imposto {
//  calcula(orcamento: Orcamento):number;
// }
// aula 4
class Imposto {
    constructor(outroImposto) {
        if (outroImposto instanceof Imposto) {
            this.outroImposto = outroImposto;
        }
        else {
            this.outroImposto = null;
        }
    }
    calculoDoOutroImposto(orcamento) {
        if (this.outroImposto == null)
            return 0;
        return this.outroImposto.calcula(orcamento);
    }
}
