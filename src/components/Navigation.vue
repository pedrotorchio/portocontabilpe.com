<script>
import scrollTo from 'scroll-to-anchor';

export default {
  methods: {
    click(hash) {  
      scrollTo(hash, { behavior: 'smooth' });
    
    }
  }
}
</script>

<template>
  <nav id="main-nav" class="section">
    <div class="narrow container">
      <div class="logo-space">

      </div>
      <ul>
        <li><a @click.prevent="click('#quem-somos')">Quem Somos</a></li>
        <li><a @click.prevent="click('#servicos')">Serviços</a></li>
        <li><a @click.prevent="click('#contato')">Contato</a></li>
      </ul>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
@import '~@/styles/colors';

#main-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: right;
  font-size: 16px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  ul {
    flex: 1 0 auto;
    display: flex;
    justify-content: flex-end;
    padding: 1em;


    li {
      margin: .4em;
    }
  }
  a {
    color: white;
    text-decoration: none;
    font-weight: 300;
    letter-spacing: .08em;
    cursor: pointer;
    &:hover {
      color: $red;
    }
  }
}
</style>
