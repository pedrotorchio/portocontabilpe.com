<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    invert: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    content: {
      type: Object,
      required: false
    },
    expanded: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    expand() {  
      this.$emit('expand', {        
        title: this.title
      });
    }
  }
}
</script>

<template>
  <article class="service" :class= "{ expanded, invert }" @click= "expand">
    <div class="service-info bubble animate-grow"
      :class= "[
        invert ? 'top-right' : (center ? 'center' : 'top-left'),
        { expanded, invert }
      ]"
    >
      <component :is= "content" />>
    </div>
    <div class="img circle">
      <img class="fill" src="/static/consultoria.jpg" alt="">
    </div>
    <h3 v-if="title">{{ title }}</h3>
  </article>
</template>
<style lang="scss" scoped>  
  @import '~@/styles/colors';

  .service {
    position: relative;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;    
    cursor: pointer;
  }

  .service-info {

    $fallback: 95%;
    $value: calc(100% - 10px);
    
    width: 300%;

    left: $fallback;
    left: $value;

    top: 100%;

    &.invert {
      left: auto;
      right: $fallback;
      right: $value
    }
    &.center {
      left: -100%;
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
  .bubble .title {
    font-weight: 400;
  }
  .bubble .body {
    width: 300px;
    padding: 1em;

    ol {
      list-style-type: disc;
    }
  }
  .service:hover:not(.expanded) .img {
    box-shadow: 0 15px 15px 0px rgba(0,0,0,0.2);
    transform: translatey(-5px);
  }
  .expanded .img {
    box-shadow: 0 20px 20px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-10px);
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

