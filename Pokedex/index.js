const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

const getIndividualPokemonData = async data => {
    const pokemonData = await data.results;
    const pokeDiv = document.createElement("div");
    pokeDiv.className = "pokemons";
    try {
        const promises = pokemonData.map(async pokemon => {
            const response = await fetch(pokemon.url);
            const individualPokemon = await response.json();
            return individualPokemon;
        });
        const pokemons = await Promise.all(promises);

        for (const pokemon of pokemons) {
            const pokeTypes = pokemon.types.map(pokeType => {
                return `${pokeType.type.name.charAt(0).toUpperCase() + pokeType.type.name.slice(1)}`;
            });
            console.log(pokeTypes);
            const pokeCard = document.createElement("div");
            pokeCard.className = "pokecard";
            pokeCard.innerHTML = `
            <div class=pokecard--header>
            <img class="pokecard--img" src="${
                pokemon.sprites.other["official-artwork"]["front_default"]
            }"/>
            <p class="pokecard--name">${
                pokemon.name
            }</p></div><div class='pokecard--types'><p>Types</p><p class="pokecard--type">${pokeTypes.join(
                ", "
            )}
            </p></div>`;
            pokeDiv.appendChild(pokeCard);
        }
    } catch (error) {
        console.error(error);
    }
    const main = document.getElementsByTagName("main")[0];
    main.appendChild(pokeDiv);
};

const getAllPokemonData = async () => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }
        const data = await response.json();
        await getIndividualPokemonData(data);
    } catch (error) {
        console.error(error.message);
    }
};

getAllPokemonData();
