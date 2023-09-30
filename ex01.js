function valoresMaioresQueMedia(lista) {
    const media = lista.reduce((total, valor) => total + valor, 0) / lista.length;
    const valoresMaiores = lista.filter(valor => valor > media);
    return valoresMaiores;
  }
  
  const listaValores = [10, 12, 15, 35, 40];
  const valoresMaiores = valoresMaioresQueMedia(listaValores);
  console.log("Valores maiores que a média:", valoresMaiores);

  //

  function menorValor(lista) {
    return Math.min(...lista);
  }
  
  const menor = menorValor(listaValores);
  console.log("Menor valor da lista:", menor);

  //

  function somaDosItens(lista) {
    return lista.reduce((total, valor) => total + valor, 0);
  }
  
  const soma = somaDosItens(listaValores);
  console.log("Soma dos itens da lista:", soma);

  //

  function valoresMenoresQue20(lista) {
    const valoresMenores = lista.filter(valor => valor < 20);
    return valoresMenores;
  }
  
  const valoresMenores = valoresMenoresQue20(listaValores);
  console.log("Valores menores que 20:", valoresMenores);

  //
  
