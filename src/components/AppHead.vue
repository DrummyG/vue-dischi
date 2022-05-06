<template>
  <header class="d-flex align-items-center ps-2">
    <img src="@/assets/img/logo-small.svg" alt="">
  </header>
</template>

<script>
export default {
  name: 'AppHead',
  props: []
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '@/assets/style/generals.scss';

  header{
    height: 60px;
    background-color: $back;

    img{
      height: 50%;
      color: hsl(141deg 76% 48%);
    }
  }
</style>
