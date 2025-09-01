/////////////////////////////////// Função para formatação de moedas de diferentes tipos
//Nota: para pode exportar a função tem que estar fora do componente
//Se caso não encontre valor renderiza preço = 0
export const parseToBrl = (amount = 0) => {
  // Intl. é uma API nativa do JavaScript, parte do objeto global, - 'pt-BR' define o local e (idioma e formato regional)
  return new Intl.NumberFormat('pt-BR', {
    // style: 'currency' e currency: 'BRL' diz que o estilo é moeda e a moeda é Real brasileiro (BRL).
    style: 'currency',
    currency: 'BRL'
  }).format(amount) //.format(preco) aplica essa formatação ao número recebido.
}

//Função para o valor total acomulado no carrinho
export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.prices.current) {
      return (accumulator += currentItem.prices.current) //! Para dizer que esse valor é obrigatório
    }
    return 0
  }, 0) //Valor inicial 0
}
