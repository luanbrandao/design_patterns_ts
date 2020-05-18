class NotaFiscalBuilder {
  private razaoSocial: string;
  private cnpj: string;
  private todosItens: ItemDaNota[] = [];
  private valorTotal: number = 0;
  private impostos: number = 0;
  private observacoes: string;
  private data: Date;

  private todasAcoesAseremExecutadas:AcaoAposGerarNota[] =[];

  adicionaAcao(acao:AcaoAposGerarNota) {
      this.todasAcoesAseremExecutadas.push(acao);
  }

  paraEmpresa(razaoSocial) {
  this.razaoSocial = razaoSocial;
  return this;
  }

  conCnpj(cnpj :string) {
      this.cnpj = cnpj;
      return this;
  }

  comItem(item :ItemDaNota) {
    
    this.todosItens.push(item);
    this.valorTotal += item.getValor();
    this.impostos +=  item.getValor() * 0.05;
    return this;
  }

  comObservacoes(observacoes:string) {
    this.observacoes = observacoes;
    return this;
  }
  
  naDataAtual() {
    this.data = new Date();
    return this;
  }

  constroi() {
    const nf:NotaFiscal = new NotaFiscal(
      this.razaoSocial,
      this.cnpj,
      this.data,
      this.valorTotal,
      this.impostos,
      this.todosItens,
      this.observacoes
    )
    
    // new EnviadorDeEmail().executa(nf);
    // new NotaFiscalDao().executa(nf);
    // new EnviadorDeSms().executa(nf);
    // new Impressora().executa(nf);

    this.todasAcoesAseremExecutadas.forEach( acao => {
      acao.executa(nf)
    })

    return nf;  
  }
  
  
  
  

}