<script>
export default {
  name: 'Hero',
  data() {
    return {
      cta: "Agende sua visita"
    }
  }
}
</script>
<template>
  <section id="hero">
    <img class="bg-image" src="/static/bg1-overlay-v1.jpg" alt="">
    <div class="logo-container container">
      <img id="main-logo" src="/static/logo.png" alt="">
    </div>
    <div class="btn-container container">
      <a class="cta" href="#contato">
        {{ cta }}
      </a>
    </div>
  </section>
</template>
<style scoped lang="scss">
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
  width: 100%;
  width: 100vw;
  background-color: rgb(10, 48, 71);
  display: flex;
  flex-direction: column;
}
#main-logo {
  max-width: 90%;
}
.logo-container {
  flex: 1 1 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.btn-container {
  flex: 0 1 5em;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.cta {
  color: white;
  font-family: sans-serif;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 4px;
  padding: .4em;

  transition-property: border-color, background-color;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;
}
.cta:hover {
  $color: rgb(228, 68, 46);
  border-color: $color;
  background-color: $color;
}
</style>
