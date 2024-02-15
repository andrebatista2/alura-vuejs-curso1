<template>
    <main class="main-title">
        <!-- <section>
          <span class="subtitle-lg yourlist-text">
            Sua lista:
          </span>

           O v-if é uma diretiva para validação de uma informação. Em caso de if-else, o v-else deve estar após o v-if para poder funcionar
          <ul v-if="ingredients.length" class="ingredients-mainlist">
             Em caso de repetições como essa, pode ser utilizado o v-for, que cria um laço de repetição do tipo for no item
             Em caso de uso do v-for, utiliza-se o key como identificador único, a fim de evitar problemas de renderização
             O v-bind:key ou apenas :key, permite que seja utilizado JavaScript dentro do atributo HTML, pois é permitido apenas para conteúdos de tags
            <li v-for="ingredient in ingredients" v-bind:key="ingredient">
                 A prop active, como é booleana e queremos que seja true, apenas chamada desse jeito já resolve,
                mas pode ser colocada como :active="true" ou :active="false"
                <Tag :texto="ingredient" active />
            </li>
          </ul>

           O v-else deve ser chamado após a tag com a diretiva v-if, para que possa funcionar, como um if-else comum
          <p v-else class="paragraph empty-list">
            <img src="../assets/images/icons/lista-vazia.svg" alt="Search icon">
            Sua lista está vazia. Selecione itens para iniciar
          </p>

        </section> -->
        <SuaLista :ingredients="ingredients"/>
        <SelecionarIngredientes @add-ingredient="addIngredient" @remove-ingredient="removeIngredient"/>
    </main>
</template>

<style scoped>
.main-title {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--cream, #FFFAF3);
    color: var(--grey, #444);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}

@media only screen and (max-width: 1300px) {
    .main-title {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .main-title {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}

</style>

<script lang="ts">
import SelecionarIngredientes from "@/components/SelecionarIngredientes.vue";
import Tag from "@/components/Tag.vue";
import SuaLista from "@/components/SuaLista.vue";
import { ref } from "vue";

export default {
    // ! Uso do Composition API (Vue 3, Vue 2.7) - Components continua declarado externamente, como acima
    setup() {
        const ingredients = ref<string[]>([]);

        function addIngredient(ingredient: string) {
            ingredients.value.push(ingredient);
        }

        function removeIngredient(ingredient: string) {
            ingredients.value = ingredients.value.filter(iList => ingredient !== iList);
        }

        return {
            ingredients,
            addIngredient,
            removeIngredient,
        }
    },
    components: {Tag, SelecionarIngredientes, SuaLista},
    // ! Uso do Options API (Vue 3.x, Vue 2.x, Vue 1.x)
    // data() {
    //     return {
    //         ingredients: [] as string[],
    //     }
    // },
    // methods: {
    //     addIngredient(ingredient: string) {
    //         this.ingredients.push(ingredient)
    //     },
    //     removeIngredient(ingredient: string) {
    //         this.ingredients = this.ingredients.filter(iList => ingredient !== iList);
    //     }
    // }
}
</script>
