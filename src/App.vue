<template>
  <Banner />
  <ConteudoPrincipal />
</template>

<style scoped>

</style>

<script lang="ts">
// Cada componente que é utilizado aqui, deve ser importado na tag script
import Banner from "@/components/Banner.vue";
import ConteudoPrincipal from "@/components/ConteudoPrincipal.vue";

// Ao importar um Componente, será necessário exportar aqui os componentes importados, a serem usados no template
export default {
  components: { Banner, ConteudoPrincipal }
}
</script>