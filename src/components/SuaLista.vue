<script lang="ts">
import type { PropType } from 'vue';
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingredients: { type: Array as PropType<string[]>, required: true }
    },
}
</script>

<template>
    <section>
    <span class="subtitle-lg text-yourlist">
      Sua lista:
    </span>

        <ul v-if="ingredients.length" class="ingredients-yourlist">
            <li v-for="ingredient in ingredients" :key="ingredient">
                <Tag :texto="ingredient" active />
            </li>
        </ul>

        <p v-else class="paragraph empty-list">
            <img src="../assets/images/icons/lista-vazia.svg" alt="Ícone de pesquisa">
            Sua lista está vazia, selecione ingredientes para iniciar.
        </p>
    </section>
</template>

<style scoped>
.text-yourlist {
    color: var(--coral, #F0633C);
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
}

.ingredients-yourlist {
    display: flex;
    justify-content: center;
    gap: 1rem 1.5rem;
    flex-wrap: wrap;
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
</style>
