<template>
  <div>
    <nav-menu></nav-menu>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavMenu from './HomeView/NavMenu.vue'

@Component({
  components: {
    NavMenu
  }
})
export default class HomeView extends Vue {}
</script>
<style>
.home {
  background: url(../../public/image/home-bg.jpg) 50% 0 repeat-y fixed;
  -webkit-box-align: center;
  height: 100vh;
  position: relative;
  text-align: right;
}
html body {
  padding: 0;
  margin: 0;
}
</style>
