<template>
  <main class="main-title">
    <section>
      <span class="subtitle-lg yourlist-text">
        Sua lista:
      </span>

      <!-- O v-if é uma diretiva para validação de uma informação. Em caso de if-else, o v-else deve estar após o v-if para poder funcionar -->
      <ul v-if="ingredients.length" class="ingredients-mainlist">
        <!-- Em caso de repetições como essa, pode ser utilizado o v-for, que cria um laço de repetição do tipo for no item -->
        <!-- Em caso de uso do v-for, utiliza-se o key como identificador único, a fim de evitar problemas de renderização -->
        <!-- O v-bind:key ou apenas :key, permite que seja utilizado JavaScript dentro do atributo HTML, pois é permitido apenas para conteúdos de tags -->
        <li v-for="ingredient in ingredients" v-bind:key="ingredient" class="ingredients">{{ ingredient }}</li>
      </ul>

      <!-- O v-else deve ser chamado após a tag com a diretiva v-if, para que possa funcionar, como um if-else comum -->
      <p v-else class="paragraph empty-list">
        <img src="../assets/images/icons/lista-vazia.svg" alt="Search icon">
        Sua lista está vazia. Selecione itens para iniciar
      </p>

    </section>

    <SelecionarIngredientes />
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

.yourlist-text {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredients-mainlist {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.ingredients {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--cream, #FFFAF3);
  background: var(--coral, #F0633C);
  font-weight: 700;
}

.empty-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
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

export default {
  components: { SelecionarIngredientes },
  data() {
    return {
      ingredients: ['Alho', 'Pimentão', 'Pão', 'Orégano']
    }
  }
}
</script>
