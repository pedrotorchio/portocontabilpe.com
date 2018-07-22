<template>
  <nav id="main-nav" class="section">
    <div class="container">
      <div class="logo-space">

      </div>
      <ul>
        <li><a href="#quem-somos">Quem Somos</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
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
    font-family: sans-serif;
    font-weight: 100;
  }
}
</style>
