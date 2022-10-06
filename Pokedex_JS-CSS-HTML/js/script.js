// variaveis globais que irao para o frontt
const pokemonName = document.querySelector('.pokemon__name')
const pokemonNumber = document.querySelector('.pokemon__number')
const pokemonImage = document.querySelector('.pokemon__image')

const form = document.querySelector('.form')
const input = document.querySelector('.input__search')
const buttonPrev = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')

let searchPokemon = 1;

// funcao que faz a busca dos pokemons
const fetchPokemon = async (pokemon) => {
    // resposta da api
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    // extrair o json de resposta
    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
}
// funcao que renderiza os dados na tela
const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = "Carregando...";
    pokemonNumber.innerHTML = "...";
    const data = await fetchPokemon(pokemon);

    // colocar o nome do pokemon no front end
    if (data) {
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name; // o campo name vem da api, pokemonName selleciona a classe css onde o elemento sera inserido 
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
        input.value = '';
        searchPokemon = data.id;
    } else {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = "Nao encontrado";
        pokemonNumber.innerHTML = "???";
    }

}


form.addEventListener('submit', (event) => {

    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

renderPokemon(searchPokemon);

//adicionar eventlisteners aos botoes de anterior e proximo
buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1){
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }

});

buttonNext.addEventListener('click', () => {
    searchPokemon = searchPokemon + 1;
    renderPokemon(searchPokemon);
});