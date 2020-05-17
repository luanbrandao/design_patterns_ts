class CalculadorDeImpostos {
    realizaCalculo(orcamento, impostoQualquer) {
        const icms = impostoQualquer.calcula(orcamento);
        console.log("icms -> ", icms);
    }
}
