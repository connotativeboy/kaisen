<template>
  <div>
    <div>Welcome here</div>
    <button @click="change">ceshi</button>
    <div id="content">
      <div id="stage">
        <div id="snake">
            <!-- 设置样式是为里面的div设置样式 -->
          <div></div>
        </div>
        <div id="food" ref="food">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div id="score-panel">
        <div>
          SCORE: <span>{{score}}</span>
        </div>
        <div>
          LEVEL： <span>{{level}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
class Food {
    // 定义一个元素指定食物
    element: HTMLElement;
    constructor () {
      this.element = document.getElementById('food')!
    }

    // 获取食物X轴的方法
    get X () {
      return this.element.offsetLeft
    }

    // 获取食物Y轴的方法
    get Y () {
      return this.element.offsetTop
    }
}
export default Vue.extend({
  data () {
    return {
      score: 11,
      level: 2,
      food: {} as { element: any}
    }
  },
  created () {
    this.$nextTick(() => {
      this.first()
    })
  },
  methods: {
    first () {
      this.food = new Food()
      console.log(this.food)
    },
    // 修改食物的出现位置
    // 0<left<290,0<top<290
    // 而且一次移动必须是10的倍数
    change () {
      const top = Math.round(Math.random() * 29) * 10
      const left = Math.round(Math.random() * 29) * 10
      this.food.element.style.top = top
      this.food.element.style.left = left
      console.log(this.food.element.style.top)
    }
  }
})
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
    font: bold 20px 'Courier';
}
#content {
  width: 360px;
  height: 420px;
  background-color: #b7d4a8;
  margin: 100px auto;
  border: 10px solid black;
  border-radius: 30px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
}
#stage {
    width: 304px;
    height: 304px;
    border: 2px black solid;
    position: relative;
}
#score-panel {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end
}
#snake>div {
    width: 10px;
    height: 10px;
    background-color: #000;
    border: 1px solid #b7d4a8;
    /* 开启绝对定位，因为要移动 */
    position: absolute;
}
/* 设置食物 */
#food {
    width: 10px;
    height: 10px;
    background-color: greenyellow;
    position: absolute;
    top: 60px;
    left: 100px;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    align-content: space-between;
}
#food>div {
    width: 4px;
    height: 4px;
    background-color: black;
    transform: rotate(45deg);
}
</style>
