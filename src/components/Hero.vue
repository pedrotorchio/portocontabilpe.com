<template>
  <section id="hero">
    <img class="bg-image" src="/static/bg1-overlay-v1.jpg" alt="">
     <div class="narrow container">
      <div class="logo-container">
        <img id="main-logo" src="/static/logo.png" alt="">
      </div>
      <div class="cta-container">
        <a class="cta" href="#contato">
          Agende sua visita
        </a>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '~@/styles/colors';
.bg-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
#hero {
  position:relative;
  height: 600px;
  background-color: $blue;
}
#main-logo {
  max-width: 90%;
}
.logo-container {
  flex: 1 1 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cta-container {
  flex: 0 1 4em;
  text-align: center;
}
.cta {
  color: white;
  font-size: 16px;
  letter-spacing: 0.1em;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 4px;
  display: inline-block;
  padding: .4em;
  margin: 0 auto;
  transition-property: border-color, background-color;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;
}
.cta:hover {
  $color: $red;
  border-color: $color;
  background-color: $color;
}
</style>
