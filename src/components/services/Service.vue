<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    }
  }
}
</script>

<template>
  <article class="service">
    <div class="img circle">
      <img class="fill" src="/static/consultoria.jpg" alt="">
    </div>
    <h3 v-if="title">{{ title }}</h3>
  </article>
</template>
<style lang="scss" scoped>
@import '~@/styles/animations.scss';
  
  .service {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;    

    &:hover .img {
      box-shadow: 0 15px 15px 0px rgba(0,0,0,0.2);
      transform: translatey(-5px);
    }
  }
  .img {
    width: 100%;
    padding-bottom: 100%;
    position:relative;
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transition: {
      property: box-shadow, transform;
      duration: 1s;
    }
  }
  img{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h3 {
    margin-top: 1em;
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    flex: 1 1 100%;
    display: flex;
    align-items: center;
  }
</style>

