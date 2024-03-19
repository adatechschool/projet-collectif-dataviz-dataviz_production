//viApi.js
async function afficherPoky() {
        const response = await fetch ("https://pokeapi.co/api/v2/pokemon/ditto");
        const poky = await response.json();
        console.log(poky.abilities[0].ability.url);
    }
afficherPoky();