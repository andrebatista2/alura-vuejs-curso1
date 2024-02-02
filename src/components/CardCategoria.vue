<script lang="ts">
    import type ICategories from "@/interfaces/ICategories";
    import type {PropType} from "vue";
    import Tag from "@/components/Tag.vue";
    import IngredienteSelecionavel from "@/components/IngredienteSelecionavel.vue";

    export default {
        components: {IngredienteSelecionavel, Tag},
        // Define uma props (propriedade) a ser passada como atributo para o componente onde ele é chamado
        props: {
            // Informa que a prop é do tipo Objeto e que ela é obrigatória na chamada do componente
            // O PropType informa qual é o tipo específico do Objeto que está sendo informado
            option: { type: Object as PropType<ICategories>, required: true, },
        },
        emits: ['addIngredient'],
    }
</script>

<template>
    <article class="category">
        <header class="category__header">
            <!-- O recurso do :src é um recurso do Vite que permite acessar o conteúdo da pasta public, como sendo um diretório / -->
            <!-- Permite a importação de imagens dinamicamente -->
            <img class="category__image" :src="`/imagens/icones/categorias_ingredientes/${option.imagem}`" alt="">
            <h2 class="paragraph-lg caregory__name">{{option.nome}}</h2>
        </header>
        <ul class="category__ingredients">
            <li v-for="ingredient in option.ingredientes" :key="ingredient">
                <!-- $event - conteúdo que está sendo carregado no momento dentro do evento -->
                <IngredienteSelecionavel :ingredient="ingredient" @add-ingredient="$emit('addIngredient', $event)" />
            </li>
        </ul>
    </article>
</template>

<style scoped>
.category {
    width: 19.5rem;
    padding: 1rem;
    border-radius: 1rem;
    background: var(--white, #FFF);
    box-shadow: 4px 4px 10px 0 rgba(68, 68, 68, 0.05);
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.category__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.category__image {
    width: 3.5rem;
}

.caregory__name {
    text-align: center;
    color: var(--medium-green, #3D6D4A);
    font-weight: 700;
}

.category__ingredients {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
}

</style>