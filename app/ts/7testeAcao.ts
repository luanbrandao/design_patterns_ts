let build:NotaFiscalBuilder = new NotaFiscalBuilder();

build.adicionaAcao(new EnviadorDeEmail())
build.adicionaAcao(new NotaFiscalDao())
build.adicionaAcao(new EnviadorDeSms())
build.adicionaAcao(new Impressora())

let nf:NotaFiscal = build.paraEmpresa("Caelum")
.conCnpj("123123123")
.comItem( new ItemDaNota("Item 1", 100),)
.comObservacoes("ob")
.naDataAtual().constroi()

console.log(nf.getValorBruto())

