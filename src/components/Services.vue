<script>
import Service from './services/Service';

import contabil from './services/contabil';
import fisctrib from './services/fiscal&tributario';

export default {
  components: {
    Service
  },
  data() {
    return {
      content: {
        title: '',
        component: null
      },
      s: {
        contabil,
        fisctrib
      }
    }
  },
  methods: {
    expand(content) {
      if (this.content.title == content.title) {
        this.content.title = '';
      } else {
        this.content.title = content.title;
        this.content.component = content.component;
      }
    }
  }
}
</script>

<template>
  <section id="servicos">
    <div class="container">
      <h2>Experiência no mercado nacional de construção</h2>
      <div class="services">
        <service title="Contábil" 
          :content= "s.contabil"
          :expanded= "content.title == 'Contábil'"
          @expand= "expand"/>
        <service title="Fiscal / Tributário"  
          :content= "s.fisctrib"  
          :expanded= "content.title == 'Fiscal / Tributário'"
          @expand= "expand"/>
        <service title="Pessoal" 
          :content= "s.contabil"   
          :expanded= "content.title == 'Pessoal'"
          @expand= "expand" center/>
        <service title="Processos e Legalizações" 
          :content= "s.contabil"  
          :expanded= "content.title == 'Processos e Legalizações'"
          @expand= "expand" invert/>
        <service title="Apoio Administrativo"  
          :content= "s.contabil"   
          :expanded= "content.title == 'Apoio Administrativo'"
          @expand= "expand" invert/>
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
    flex: 0 0 20%;
    width: 20%;
    max-width: 20%;
  }
  .content {
    overflow: hidden;
    max-height: 0;
    transition: {
      property: max-height;
      duration: 1s;
    }
    &.show {
      max-height: 900px;
    }
  }
</style>

