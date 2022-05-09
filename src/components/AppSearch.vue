<template>
  <div class="input-group">
    <select name="genre" id="genre" v-model="inputText" @change="search">
      <option value="">all</option>
      <option :value="tipo" v-for="(tipo, index) in discGenre" :key="index">
        {{ tipo }}
      </option>
    </select>
  </div>
</template>

<script>
import { setSearch } from "../store";
export default {
  name: "AppSearch",
  data() {
    return {
      inputText: "",
    };
  },
  props: ["discGenre"],
  methods: {
    search() {
      setSearch(this.inputText);
    },
    reset() {
      this.inputText = "";
      setSearch(this.inputText);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>