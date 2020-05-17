// class ICMS implements Imposto {
class ICMS extends Imposto {
    constructor(outroImposto) {
        super(outroImposto);
    }
    calcula(orcamento) {
        return orcamento.getValor() * 0.1 + this.calculoDoOutroImposto(orcamento);
    }
}
