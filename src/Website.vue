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

.fill {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.circle {
  border: {
    radius: 50%;
    style: solid;
    color: transparent;
  }
  overflow: hidden;
}
section, .section {
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 100vw;

  &> .container {
    padding: 4rem 0;
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