<template>
<div class="cardWrapper">
    <pokemonCard v-for="pokemon in pokemons" :key="pokemon.id" @click.prevent="evolvePokemon(pokemon.id)" class="evolvepoke">
        <template v-slot:title>{{ pokemon.name }} # {{ pokemon.id }}</template>
        <template v-slot:content><img :src="pokemon.img" class="adjustImg" /></template>
        <template v-slot:footer>
            <div v-for="type in pokemon.types" :key="type.slot" class="typeName">
                {{ type.type.name }}
            </div>
        </template>
    </pokemonCard>
</div>
</template>

<script>
import {
    ref
} from "@vue/reactivity";
import pokemonCard from "./card.vue";
export default {
    name: "PokemonCards",
    props: ["pokemons"],
    emits: ["evolve", "ids"],
    components: {
        pokemonCard
    },
    setup(props, {
        emit
    }) {
        const ids = ref("");

        function evolvePokemon(id) {
            ids.value = id;
            emit("evolve", ids.value);
        }
        return {
            evolvePokemon,
            ids
        };
    },
};
</script>

<style scoped>
.adjustImg {
    width: 200px
}

.typeName {
    font-size: 20px;
}

.evolvepoke {
    float: left;

}
</style>
