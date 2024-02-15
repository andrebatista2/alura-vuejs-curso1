<script lang="ts">
import Tag from "@/components/Tag.vue";

export default {
    components: {Tag},
    props: {
        ingredient: {type: String, required: true},
    },
    data() {
        return {
            selected: false,
        }
    },
    methods: {
        aoClicar() {
            this.selected = !this.selected;
            if (this.selected) {
                // Emite um evento para o componente pai
                this.$emit('addIngredient', this.ingredient)
            } else {
                this.$emit('removeIngredient', this.ingredient)
            }
        }
    },
    emits: ['addIngredient', 'removeIngredient'] // Boa prática do TS para garantir que o evento será do mesmo jeito que no this.$emit
}

</script>

<template>
    <!-- o v-on executa uma ação após escutar algum evento do DOM. Semelhante ao addEventListener -->
    <!-- No caso abaixo, ele altera o valor de selected para o inverso do valor padrão, pois o active do component é false por padrão -->
    <button class="ingredient" v-on:click="aoClicar" :aria-pressed="selected">
        <Tag :texto="ingredient" :active="selected"/>
    </button>
</template>

<style scoped>
.ingredient {
    cursor: pointer;
}
</style>