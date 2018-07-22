<template>
  <main id="website">
    <navigation></navigation>
    <hero></hero>
    
  </main>
</template>

<script>
import Navigation from './components/Navigation';
import Hero from './components/Hero';

export default {
  name: 'Website',
  components: {
    Hero,
    Navigation
  }
}
</script>
<style src="reset-css"></style>
<style>
.container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
}
</style>

