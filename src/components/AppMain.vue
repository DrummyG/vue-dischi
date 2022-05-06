<template>
  <main>
      <app-loader v-if="loading"/>
    <div class="container" v-if="!loading">
      <div class="row gap-3 justify-content-center">
        <div class="col-sm-4 col-md-3 col-lg-2" v-for="(item, index) in disc" :key="index">
          <app-card :key="index" :disc="item" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
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
      loading: false
    };
  },
  mounted() {
      this.loading = true
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => {
          this.loading = false
        this.disc = res.data.response;
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

  .col-lg-2{
      background-color: $back;
  }
}
</style>