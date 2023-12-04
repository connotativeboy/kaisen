<template>
  <div class="home-content" ref="allScolltop">
    <div class="home" :style="{ backgroundPositionY: '-' + imageTop/2 + 'px' }">
      <div class="container">
        <div class="container-top">
          <h1>Hello, I am Kalay.</h1>
        </div>
        <div class="container-bottom">
          {{ content }}
        </div>
        <button class="container-bottom-button" style="position:absolute; right: 0; top: 210px;" @click="backTop">DISCOVER MORE</button>
      </div>
    </div>
    <div style="background: #f9f9f9">
      <div class="more-content">
        <div class="more-content-text" v-show="showCard">
          <h2>what things i am doing...</h2>
          <p>Lorem ipsum dolor sit amet, consectetur venenatis tincidunt.</p>
        </div>
        <div class="more-content-cards" v-show="showCard">
          <div class="more-content-card">
            Lorem ipsum dolor sit amet, consectetur adipiscing morbi venenatis.
          </div>
          <div class="more-content-card different">
            Duis sed arcu sed nunc maximus tempor. Maecenas et enim laoreet, pharetra risus vel.
          </div>
          <div class="more-content-card" style="height: 330px">
            Sed tristique, nunc sit amet pellentesque pharetra, sapien urna.</div>
          <div class="more-content-card">
            Cras ut urna quis nisi luctus molestie tincidunt sed ipsum. Donec gravida laoreet erat.
          </div>
        </div>
      </div>
    </div>
    <div v-show="showCard2">
      <div class="more-content">
        <div class="more-content-text">
          <h2>what things i am doing...</h2>
          <p>Lorem ipsum dolor sit amet, consectetur venenatis tincidunt.</p>
        </div>
        <div class="more-content-cards">
          <div class="more-content-card">
            Lorem ipsum dolor sit amet, consectetur adipiscing morbi venenatis.
          </div>
          <div class="more-content-card different">
            Duis sed arcu sed nunc maximus tempor. Maecenas et enim laoreet, pharetra risus vel.
          </div>
          <div class="more-content-card" style="height: 330px">
            Sed tristique, nunc sit amet pellentesque pharetra, sapien urna.</div>
          <div class="more-content-card">
            Cras ut urna quis nisi luctus molestie tincidunt sed ipsum. Donec gravida laoreet erat.
          </div>
        </div>
      </div>
    </div>
    <div style="background: #f9f9f9">
      <div class="feedback-content more-content">
        <div class="feedback-top">
          <h1 style="fontSize: 35px">Get in touch</h1>
          <p style="color: #878787">Lorem ipsum dolor sit amet, consectetur venenatis tincidunt.</p>
        </div>
        <div class="feedback-left">
          <el-input v-model="form.input" placeholder="Nmae" class="feedback-left-name"></el-input>
          <el-input v-model="form.email" placeholder="Email" class="feedback-left-email"></el-input>
          <el-input v-model="form.message" placeholder="Message" type="textarea" :rows="4" class="feedback-left-message"></el-input>
          <button class="container-bottom-button feedback-button">Send Message</button>
        </div>
        <div class="feedback-right">
          <div>
            <h1 style="margin-top: 0; fontSize: 35px">Contact Info</h1>
            <p style="color: #878787">Lorem ipsum dolor sit consectetur adipiscing morbi venenatis et tortor consectetur adipisicing lacinia tortor morbi ultricies.</p>
          </div>
          <div></div>
        </div>
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
export default class HomeView extends Vue {
  content = 'Praesent eleifend tristique nisl, nec finibus urna posuere nec. Quisque vel nunc eget arcu maximus facilisis non eu nisi. Aliquam ullamcorper est a nisl imperdiet luctus.'

  imageTop = 0

  showCard = false

  showCard2 = false

  form = {
    input: '',
    email: '',
    message: ''
  }

  mounted () {
    window.addEventListener('scroll', this.show)
  }

  backTop () {
    const timer = setInterval(function () {
      const osTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      const ispeed = Math.floor((888 - osTop) / 5)
      document.documentElement.scrollTop = osTop + ispeed
      if (osTop === 880) {
        clearInterval(timer)
      }
    }, 30)
  }

  show () {
    const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
    this.imageTop = top
    if (top > 200) {
      this.showCard = true
    }
    if (top > 1100) {
      this.showCard2 = true
    }
  }
}
</script>
<style>
.home {
  background: url(../../../public/image/home-bg.jpg) 50% 0 repeat-y fixed;
  -webkit-box-align: center;
  display: flex;
  align-items: center;
  height: 100vh;
  position: relative;
  background-size: cover;
}
.home .container {
  margin: auto;
  position: relative;
  width: 70%;
  top: 0;
}
.container-top h1{
  color: #ffffff;
  font-size: 45px;
  line-height: normal;
  margin-bottom: 15px;
  visibility: visible;
  animation-fill-mode: both;
  animation-name: fadeInUp;
  animation-duration: 0.5s;
}
.container-bottom {
  position: absolute;
  right: 0;
  color: #f0f0f0;
  font-size: 16px;
  font-weight: normal;
  line-height: 25px;
  letter-spacing: 0.2px;
  margin-bottom: 40px;
  width: 623px;
  word-wrap: break-word;
  animation-name: fadeInUp;
  animation-duration: 0.8s;
}
.container-bottom-button {
  animation-name: fadeInUp;
  animation-duration: 1.1s;
  width: 170px;
  height: 50px;
  text-align: center;
  border: 0;
  border-radius: 25px;
  background: #282828;
  color: white;
  font-family: 'Poppins', sans-serif;
  transition: all ease-in-out 0.3s
}
.container-bottom-button:hover {
  background: white;
  color: #282828;
  cursor: pointer;
}
.more-content {
  width: 1170px;
  height: 480px;
  padding: 80px 0;
  margin: 0 auto;
}
.more-content-text {
  text-align: center;
  animation-name: run;
  animation-duration: 1s;
}
.more-content-text h2 {
  color: #2b2b2b;
  font-size: 35px;
  line-height: 52px;
  margin: 0 0 10px
}
.more-content-text p {
  color: #878787;
  font-size: 16px;
  font-weight: normal;
  line-height: 25px;
  letter-spacing: 0.2px;
  margin: 0 0 10px;
}
.more-content-cards {
  display: flex;
  margin-top: 40px;
  justify-content: space-around;
}
.more-content-card {
  background: #fff;
  transition: all ease-in-out 0.3s;
  border-radius: 5px;
  width: 262px;
  height: 357px;
  position: relative;
  top: 0;
  animation-name: run;
  animation-duration: 1s;
}
.different {
  background: #2b2b2b;
  animation-name: run;
  animation-duration: 0.7s;
}
.more-content-card:hover {
  background: #2b2b2b;
  color: white;
  top: -6px;
}
.feedback-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.feedback-top {
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
}
.feedback-left {
  width: 49%;
  margin: 30px 0 0 20px;
  height: 320px;
}
.feedback-left-name {
  width: 48%;
  margin-bottom: 20px;
  font-size: 18px;
  margin-right: 20px;
}
.feedback-left-email {
  width: 48%;
  font-size: 18px;
}
.feedback-left-message {
  width: 99%;
  font-size: 18px;
}
.feedback-button {
  font-size: 16px;
  font-weight: 600;
  margin-top: 35px;
  float: right;
}
.feedback-right {
  width: 46%;
  padding-left: 20px;
  text-align: left;
}
@keyframes run{
  from{
    top: 150px;
    /* opacity: 0; */
  }
  to{
    top: 0;
    /* opacity: 1; */
  }
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    visibility: visible;
    -webkit-transform: none;
            transform: none;
  }
}
</style>
