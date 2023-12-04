<template>
  <div class="classify">
    <img src="../../../public/image/classify.png" class="classify-img" alt="">
    <div class="classify-content">
      <div class="classify-content-title">
        <div class="title">
          <span class="title-left">分类</span>
          <span>共 <span style="color: red;font-size: 19px">{{classifyNum}}</span> 个</span>
        </div>
        <div class="classify">
          <el-button type="primary">主要按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
        </div>
      </div>
      <div class="classify-content-card">
      </div>
      <div class="classify-content-card">
      </div>
      <div class="classify-content-card">
      </div>
      <div class="classify-content-card">
      </div>
      <div class="classify-content-card">
      </div>
      <div class="classify-content-card">
      </div>
      <div class="classify-content-card">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class ClassifyContent extends Vue {
  classifyNum = 6
}
</script>

<style lang="scss">
/* .classify{
  background: url(../../../public/image/classify.png) 50% 0 repeat-y fixed;
  background-size: cover;
  height: 100vh;
  position: relative;
} */
.classify-img {
  height: calc(100vh - 4px);
  width: 100%;
  object-fit:cover;
  position: sticky;
  top: 0;
  z-index: -1;
}
.classify-content {
  margin-top: -101vh;
  width: 100%;
}
.classify-content-title {
  height: 180px;
  margin: 100px auto;
  width: 70%;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  background-color: rgba(255,255,255,0.7);
  .title {
    padding: 0 20px;
    border-bottom: 1px solid #e1b6b6;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title-left {
      font-size: 19px;
      color: #4dc5ff;
    }
  }
  .classify {
    display: flex;
    height: 120px;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
  }
}
.classify-content-card {
  height: 200px;
  margin: auto;
  width: 70%;
  background-color: rgba(255,255,255,0.7);
}
</style>
