<template>
  <main>
      
      <app-loader v-if="loading"/>
    <div class="container" v-if="!loading">
      <div class="row gap-3 justify-content-center">
        <div class="col-sm-4 col-md-3 col-lg-2" v-for="(item, index) in filteredDisc" :key="index">
          <app-card :key="index" :disc="item" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import state from "../store";
import axios from "axios";
import AppCard from "./AppCard.vue";
import AppLoader from "./AppLoader.vue";
export default {
  name: "AppMain",
  components: {
    AppCard,
    AppLoader
  },
  data() {
    return {
      disc: [],
      loading: false,
      genre: []
    };
  },
  methods: {
    
  },
  computed: {
    searchText(){
      console.log(state.genre)
      return state.genre
    },
    filteredDisc(){
       return this.disc.filter((item) =>{
        if(item.genre.toLowerCase().includes(this.searchText.toLowerCase())){
          return true
        }
      })
    }
  },
  mounted() {
      this.loading = true
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => {
          this.loading = false
        this.disc = res.data.response;
        this.disc.forEach((item) =>{
          if(!this.genre.includes(item.genre)){
            this.genre.push(item.genre)
          }
        })
        console.log(this.disc);
      });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/generals.scss";

main {
  background-color: $main;
  padding-bottom: 100px;
  padding-top: 40px;
  position: relative;
  min-height: calc(100vh - 60px);

  .col-lg-2{
      background-color: $back;
  }
}
</style>