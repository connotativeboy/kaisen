<template>
  <div class="navigation-bar" :style="{ top: '-' + top + 'px' }">
    <ul class="navigation-bar-ul">
      <li class="navigation-bar-li" @click="jump('/')">首页</li>
      <li class="navigation-bar-li" @click="jump('/classify')">分类</li>
      <li class="navigation-bar-li">归档</li>
      <li class="navigation-bar-li">关于我</li>
      <li class="navigation-bar-li" @click="test">去后台看看</li>
    </ul>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/game">Game</router-link>|
      <router-link to="/work">work</router-link>
    </nav> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class navigationBar extends Vue {
  activeIndex = '1'

  top = 0

  mounted () {
    window.addEventListener('scroll', this.show)
  }

  show () {
    const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
    if (top > 500) {
      this.top = 62
    } else {
      this.top = 0
    }
  }

  test () {
    const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
    console.log(top)
  }

  jump (e: string) {
    this.$router.push({ path: e })
  }
}
</script>
<style>
.navigation-bar {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9999;
  margin-bottom: -62px;
  transition: all ease-in-out 0.3s;
}
.navigation-bar-ul {
  display: flex;
  list-style: none;
  position: relative;
  margin: 0;
  border: 0;
  background:linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0));
}
.navigation-bar-ul:hover {
  background:linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.4));
}
.navigation-bar-li {
  float: left;
  height: 60px;
  padding: 0 15px;
  line-height: 60px;
  cursor: pointer;
  margin: 0;
  border-bottom: 2px solid transparent;
  color: #b1b1b1;
  transition: all .4s;
}
.navigation-bar-li:hover {
  color: white;
}
</style>
