<template>
  <header class="d-flex align-items-center ps-2">
    <img src="@/assets/img/logo-small.svg" alt="">
    <app-search :discGenre="genre"/>
  </header>
</template>

<script>
import axios from "axios";
import AppSearch from "./AppSearch.vue";
export default {
  name: 'AppHead',
  props: [],
  components: {
    AppSearch
  },
  data(){
    return{
      disc: [],
      genre: []
    }
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => {
        this.disc = res.data.response;
        this.disc.forEach((item) =>{
          if(!this.genre.includes(item.genre)){
            this.genre.push(item.genre)
          }
        })
        console.log(this.disc);
      });
  }
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
