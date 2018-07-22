<template>
  <main id="website">
    <navigation></navigation>
    <hero></hero>
    <about></about>
    <services></services>
  </main>
</template>

<script>
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';

export default {
  name: 'Website',
  components: {
    Hero,
    Navigation,
    About,
    Services
  }
}
</script>
<style src="reset-css"></style>
<style lang="scss">
* {
  box-sizing: border-box;
}
@font-face {
  font-family: Estandar;
  src: url('/static/Estandar.otf');

}
body {
  font-family: Estandar, sans-serif;
  font-size: 16px;
}
section, .section {
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 100vw;

  &> .container {
    padding: 2em;
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    z-index: 2;
  }
}
</style>

