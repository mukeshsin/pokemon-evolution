import { ref } from "vue";
export const pokemonCompose = () => {
  const pokemons = ref("");
  const pokemonEvolve = ref("");
  const pokemonApi = async (key) => {
    let res = await fetch("https://pokeapi.co/api/v2/pokemon/" + key);
    let data = await res.json();
    console.log(data);

    return data;
  };

  Promise.all([pokemonApi(1), pokemonApi(4), pokemonApi(7)]).then((data) => {
    pokemons.value = data.map((dat) => ({
      id: dat.id,
      name: dat.name,
      img: dat.sprites.other["official-artwork"].front_default,
      types: dat.types,
    }));
  });
  const evolveState = (key) => {
    Promise.all([pokemonApi(key + 1), pokemonApi(key + 2)]).then((data) => {
      pokemonEvolve.value = data.map((dat) => ({
        id: dat.id,
        name: dat.name,
        img: dat.sprites.other["official-artwork"].front_default,
        types: dat.types,
      }));
    });
  };
  return { pokemons, pokemonEvolve, evolveState };
};
