<template>
  <div class="input-group">
    <select name="genre" id="genre" v-model="inputText" @change="search">
      <option value="">all</option>
      <option :value="tipo" v-for="(tipo, index) in discGenre" :key="index">
        {{ tipo }}
      </option>
    </select>

    <select name="author" id="author" v-model="inputTextTwo" @change="searchTwo">
      <option value="">all</option>
      <option :value="tipo" v-for="(tipo, index) in discAuthor" :key="index">
        {{ tipo }}
      </option>
    </select>
  </div>
</template>

<script>
import { setSearch, setSearchTwo } from "../store";
export default {
  name: "AppSearch",
  data() {
    return {
      inputText: "",
      inputTextTwo: ""
    };
  },
  props: ["discGenre", "discAuthor"],
  methods: {
    search() {
      setSearch(this.inputText);
      console.log(this.inputText)
    },
    searchTwo() {
      setSearchTwo(this.inputTextTwo);
      console.log(setSearchTwo(this.inputTextTwo))
    }
  },
};
</script>

<style lang="scss" scoped>
</style>