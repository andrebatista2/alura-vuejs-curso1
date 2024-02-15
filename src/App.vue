<template>
  <Banner />
  <ConteudoPrincipal />
  <Rodape />
</template>

<style scoped>

</style>

<script lang="ts">
// Cada componente que é utilizado aqui, deve ser importado na tag script
import Banner from "@/components/Banner.vue";
import ConteudoPrincipal from "@/components/ConteudoPrincipal.vue";
import Rodape from "@/components/Rodape.vue";

// Ao importar um Componente, será necessário exportar aqui os componentes importados, a serem usados no template
export default {
  components: {Rodape, Banner, ConteudoPrincipal }
}
</script>