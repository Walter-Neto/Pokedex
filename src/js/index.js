/*
Quando clicar no pokémon da listagem, temos que esconder o cartão aberto e mostrar o cartão que foi selecionado.

Para isso vamos trabalhar com dois elementos:
1- Listagem
2- Cartão do pokémon

Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela.

Vamos precisar trabalhar com um evento de click feito pelo usuário na listagem de pokémon.

- Remover a class aberto só do cartão que está aberto.

- Ao clicar em um pokémon da listagem pegamos o id do mesmo para saber qual cartão mostrar.

- Remover a class ativo que marca o pokémon selecionado.

- Adicionar a class ativo no pokemon que foi selecionado na listagem.

*/

const listaSelecaoPokemons = document.querySelectorAll(".pokemon");
const pokemonsCard = document.querySelectorAll(".cartao-pokemon");

listaSelecaoPokemons.forEach((pokemon) => {
  pokemon.addEventListener("click", () => {
    //Remover a classe aberto somente do cartão que está aberto.
    const cartaoPokemonAberto = document.querySelector(".aberto");
    cartaoPokemonAberto.classList.remove("aberto");

    const idPokemonSelecionado = pokemon.attributes.id.value;
    const cartaoPokemonParaAbrir = document.getElementById(
      `cartao-${idPokemonSelecionado}`
    );
    cartaoPokemonParaAbrir.classList.add("aberto");

    const pokemonAtivoNalistagem = document.querySelector(".ativo");
    pokemonAtivoNalistagem.classList.remove("ativo");

    const pokemonSelecionadoNalistagem = document.getElementById(idPokemonSelecionado);
    pokemonSelecionadoNalistagem.classList.add("ativo");
  });
});
