<template>
  <section class="select-ingredients">
    <h1 class="header ingredients-title">Ingredientes</h1>
    <p class="paragraph-lg instructions">Selecione abaixo os ingredientes que deverão ser usados na receita</p>

    <ul class="categories">
      <li v-for="option in options" :key="option.nome">
          <!-- Usa-se o v-bind para passar o valor do objeto para a props do componente -->
        <CardCategoria :option="option" @add-ingredient="$emit('addIngredient', $event)" @remove-ingredient="$emit('removeIngredient', $event)"/>
      </li>
    </ul>

    <p class="paragraph tip">
      * Atenção: consideramos que você tenha em casa, sal, pimenta e água
    </p>

      <BotaoPrincipal text="Buscar Receitas" />
  </section>
</template>

<style scoped>
.select-ingredients {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ingredients-title {
  color: var(--medium-green, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instructions {
  margin-bottom: 2rem;
}

.categories {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.tip {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .tip {
    margin-bottom: 2.5rem;
  }
}

</style>

<script lang="ts">
import { getCategories } from "@/http";
import type ICategories from "@/interfaces/ICategories";
import CardCategoria from "@/components/CardCategoria.vue";
import BotaoPrincipal from "@/components/BotaoPrincipal.vue";

export default {
    components: {BotaoPrincipal, CardCategoria},
  data() {
    return {
      options: [] as ICategories[]
    }
  },
  async created() {
    this.options = await getCategories();
  },
    emits: ['addIngredient', 'removeIngredient']
}
</script>