<script lang="ts">
    export default {
        props: {
            texto: { type: String, required: true },
            active: { type: Boolean },
        }
    }
</script>

<template>
    <!--
    Aqui é definido uma classe dinâmica por meio de v-bind, mas pode ser aplicada da seguinte maneira:
               <span :class="['tag', { ativa }]"></span>
    Uma class com v-bind pode ser declarada como um array de classes, com isso, a primeira será estática, a segunda será dinãmica,
    estando dentro de um objeto, atendendo a uma condição
    -->
    <span class="tag" :class="{ active }">
        {{ texto }}
    </span>
</template>

<style scoped>
.tag {
    display: inline-block;
    border-radius: 0.5rem;
    min-width: 4.25rem;
    padding: 0.5rem;
    text-align: center;
    transition: 0.2s;
    color: var(--grey);
    background: var(--light-grey);
    font-weight: 400;
}

.tag.active {
    color: var(--cream, #FFFAF3);
    background: var(--coral, #F0633C);
    font-weight: 700;
}
</style>