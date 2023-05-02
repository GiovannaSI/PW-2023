const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const btConsultar = document.getElementById("btConsultar")

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    console.log("qtd pokemons = " + data.count);
    return data;
}

const renderizaPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    pokemonName.innerHTML = `${data.name}`;
    pokemonNumber.innerHTML = `(${data.id})`;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderizaPokemon(input.value);
    console.log(input.value);
    input.value = "";
})

const handleBtConsultarClick = () => {
    renderizaPokemon(input.value);
}

btConsultar.onclick = handleBtConsultarClick;