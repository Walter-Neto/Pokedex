/*
Ao selecionar um pokémon da listagem, o cartão que estava sendo exibido será escondido e o cartão selecionado será exibido. Para isso, utilizaremos um evento de click do JS.

Trabalharemos com dois elementos:
1- Listagem
2- Cartão do pokémon

Ações que serão executadas quando o evento de click ocorrer:
- Remover a class aberto do cartão que estava aberto até então.
- Adocionar a class aberto no cartão que foi selecionado e deve ser exibido.
- Remover a class ativo que marca o pokémon que deve ser marcado na listagem.
- Adicionar a class ativo no pokemon que deve ser marcado na listagem.
*/

const listaSelecaoPokemons = document.querySelectorAll(".pokemon"); 
const pokemonsCard = document.querySelectorAll(".cartao-pokemon"); 

listaSelecaoPokemons.forEach((pokemon) => { 
  pokemon.addEventListener("click", () => {
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