<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: false
    }
  }
}
</script>
<template lang="pug">
  article
    div.img
      img(
        :src="url"
      )
    h4(
      v-text="name"
    )
    p(
      v-if="text"
      v-text="text"
    )
</template>
<style lang="stylus" scoped>
size = 200px;
article 
  width: size;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .img
    position relative
    overflow: hidden;
    box-sizing: border-box;
    
    width: size;
    height: size;

    img
      border-radius: 50%;
      position absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center center;

  h4
    font-size: 24px;
    text-align: center;

</style>