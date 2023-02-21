import { ref } from "vue"
export const pokemonCompose = () => {
    const pokemons = ref("");
    const pokemonEvolve = ref("");
    const pokemonApi = async (key) => {
        let res = await fetch("https://pokeapi.co/api/v2/pokemon/" + key);
        let data = await res.json();
        return data;
    }

Promise.all([pokemonApi(1), pokemonApi(4), pokemonApi(7)]).then((data) => {
  console.log(data);
});
}


