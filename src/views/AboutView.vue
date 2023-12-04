<template>
  <div class="about">
    <div class="home"></div>
    <h1>This is an about page</h1>
    <h3>你好，开森！</h3>
    <img alt="学习文件" src="../assets/images/1.png">
    <img alt="学习文件" src="../assets/images/2.png" style="margin-left:100px">
    <img alt="学习文件" src="../assets/images/3.png">
    <img alt="学习文件" src="../assets/images/4.png">
    <img alt="学习文件" src="../assets/images/5.png">
    <img alt="学习文件" src="../assets/images/6.png">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class HomeView extends Vue {}
</script>
<style>
.about {
  background: #ccc
}
.home {
  background: url(../../public/image/home-bg.jpg) 50% 0 repeat-y fixed;
  -webkit-box-align: center;
  height: 100vh;
  position: relative;
  text-align: right;
}
</style>
