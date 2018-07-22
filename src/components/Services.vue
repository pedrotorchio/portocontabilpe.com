<script>
import Service from './services/Service';

export default {
  components: {
    Service
  }
}
</script>

<template>
  <section id="servicos">
    <div class="container">
      <h2>Experiência no mercado nacional de construção</h2>
      <div class="services">
        <service title="Contábil"></service>
        <service title="Fiscal / Tributário"></service>
        <service title="Pessoal"></service>
        <service title="Processos e Legalizações"></service>
        <service title="Apoio Administrativo"></service>
      </div>
    </div>
  </section>  
</template>
<style lang="scss" scoped>
  h2 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 2rem;
  }
  .services {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }
  .service {
    flex: 0 1 200px;
  }
</style>

