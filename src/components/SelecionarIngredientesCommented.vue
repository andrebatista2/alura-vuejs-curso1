<template>
  <section class="select-ingredients">
    <h1 class="header ingredients-title">Ingredientes</h1>
    <p class="paragraph-lg instructions">Selecione abaixo os ingredientes que deverão ser usados na receita</p>

    <ul class="categories">
      <!-- O :key indica que cada elemento a ser repetido no v-for tem um identificador único -->
      <li v-for="option in options" :key="option.nome">
        {{ option.nome }}
      </li>
    </ul>

    <p class="paragraph tip">
      * Atenção: consideramos que você tenha em casa, sal, pimenta e água
    </p>
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

export default {
  /*
    Explicação sobre os lifecycle hooks: https://www.alura.com.br/artigos/vuejs-ciclo-vida-componentes?_gl=1*p0qe3g*_ga*MTM4NjA0MTIxNS4xNzAxMzQ2OTUx*_ga_1EPWSW3PCS*MTcwNjYzNDkxOS4yMi4xLjE3MDY2MzY5NTguMC4wLjA.*_fplc*JTJGTEVGNm1YRjJMeiUyRnVvRWF3R2NTNkc5aWdtdG1rUjlaWFp3JTJGb0ZiVG5NcG5IUXZuaVdQSzZKN0FTV3gweWxDcndndFdCcU1MWHJOV3JVRVMwUTk4SjlRRFQyZnc0b2gxTjNRRFltckxBY0NwN2QlMkZXZDFhYlg4bXVJNFQ3S2clM0QlM0Q.
  */
  data() {
    return {
      options: [] as ICategories[] // Cria um array do mesmo tipo do dado informado no created(), para evitar problemas com o TS
    }
  },

  /*
    O beforeCreate é executado imediatamente assim que um componente é inicializado. Nesse momento, estados e
    propriedades computadas ainda não foram processadas.
  */
  beforeCreate() {
    alert('Sou executado no momento da inicialização do componente. Ideal para checar, por exemplo, se um usuário está autenticado')
  },

  /*
    O created é executado antes do componente ser montado no DOM, porém, nessa etapa todos os estados,
    propriedades computadas, métodos e watchers já foram processados e estão prontos para serem acessados.

    Esse é um hook muito útil para fazer uma requisição HTTP para uma API e atualizar o estado do componente
    com esses dados, que serão renderizados no DOM.

    Ele é acessado depois de data() ter sido definido, podendo acessa-las e modifica-las
  */
  async created() {
    // Como em todos os bons JS da vida, o this permite que o contexto acima da função seja acessado, ou seja, que se tenha acesso ao data
    this.options = await getCategories();
  },

  /*
    O mounted é executado imediatamente após o componente ser montado. Nesse estágio, o componente se
    torna funcional: as propriedades de data() são injetadas no template, os elementos são renderizados
    e a manipulação do DOM se torna possível.

    Só funcionará após a renderização do componente, e assim que o data e o created forem executados
  */
  mounted() {
    console.log('Tudo terminou de renderizar, eu apareço')
  }
}
</script>