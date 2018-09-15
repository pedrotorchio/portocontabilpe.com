<template>
  <main id="website">
    <navigation/>
    <hero/>
    <about/>
    <services/>
    <c-t-a/>
    <members/>
    <porto-footer/>
  </main>
</template>

<script>
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CTA from './components/CTA';
import Members from './components/Members';
import PortoFooter from './components/Footer';

export default {
  name: 'Website',
  components: {
    Hero,
    Navigation,
    About,
    Services,
    CTA,
    Members,
    PortoFooter
  }
}
</script>
<style src="reset-css"></style>
<style lang="scss">
@import '~@/styles/colors';
@import '~@/styles/common';
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');

* {
  box-sizing: border-box;
}
@font-face {
  font-family: Estandar;
  src: url('/static/Estandar.otf');
}
body {
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: $text;

  min-height: 1400px;
}
a {
  color: $text;

  &:hover {
    color: $red;
  }
}
section, .section {
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 100vw;
  z-index: 1;
  &> .container {
    padding: 4rem 0;
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    z-index: 2;
    
    &.narrow {
      padding: 0;
    }
  }
}
</style>