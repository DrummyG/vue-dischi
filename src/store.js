import Vue from 'vue'
const state = Vue.observable({ genre: '', author: '' });
export const setSearch = (val) => state.genre = val
export const setSearchTwo = (val) => state.author = val
export default state;