<script setup lang="ts">
onMounted(() => {
  window.document.scrollingElement?.scrollTo(0, 0)
})
</script>

<template>
  <div class="back">
    <div class="central">
      <div class="found">
        <h1>404 Not Found</h1>
        <h2 class="h2pc">お探しのページが見つからなかったのー、めぇ。</h2>
        <h2 class="h2sp">お探しのページが<br />見つからなかったのー、めぇ。</h2>
        <a-sleep class="sleep" />
        <a-sleepsp class="sleepsp" />
        <a-link-button link="/" class="back-button">
          ホームに戻る
        </a-link-button>
      </div>
    </div>
    <div class="king flex">
      <div class="left">
        <div>
          <img class="cir1" src="../assets/img/error/cir1.svg" />
          <img class="cir1sp" src="../assets/img/error/cir1sp.svg" />
        </div>
        <div>
          <img class="leaf1" src="../assets/img/error/leaf1.svg" />
          <img class="leaf1sp" src="../assets/img/error/leaf1sp.svg" />
        </div>
      </div>
      <div class="right">
        <div>
          <img class="cir2sp" src="../assets/img/error/cir2sp.svg" />
        </div>
        <div>
          <img class="leaf2" src="../assets/img/error/leaf2.svg" />
        </div>
        <div>
          <img class="cir2" src="../assets/img/error/cir2.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.back {
  position: relative;
  height: 100vh;
  background-color: $main-soft;
  overflow: hidden;
}
.central {
  position: absolute;
  width: 100vw;
  z-index: 2;
}
.found {
  margin: 82px auto;
  text-align: center;
}
.sleep {
  @include mq(until-pc) {
    display: none;
  }
}
.sleepsp {
  margin-top: 40px;
  @include mq(from-pc) {
    display: none;
  }
}
.h2pc {
  margin-top: -30px;
  @include mq(until-pc) {
    display: none;
  }
}
.h2sp {
  margin-top: -10px;
  @include mq(from-pc) {
    display: none;
  }
}
.back-button {
  margin: 2vw auto;
}
.king {
  position: absolute;
  width: 100vw;
}
.left {
  display: inline-block;
  width: 50vw;
}
.cir1 {
  width: 8vw;
  margin-top: 92px;
  margin-left: 13vw;
  @include mq(until-tab) {
    display: none;
  }
}
.cir1sp {
  width: 15vw;
  margin-top: 92px;
  margin-left: 5vw;
  @include mq(from-tab) {
    display: none;
  }
}
.leaf1 {
  width: 400px;
  margin-top: 250px;
  margin-left: -100px;
  @include mq(until-tab) {
    display: none;
  }
  @media screen and (min-width: 741px) and (max-width: 980px) {
    margin-top: 570px;
    margin-left: -100px;
  }
}
.leaf1sp {
  width: 27vh;
  margin-top: 58vh;
  margin-left: -8vh;
  @include mq(from-tab) {
    display: none;
  }
}
.right {
  display: inline-block;
  width: 50vw;
}
.cir2 {
  width: 10vw;
  margin-top: -130px;
  margin-left: 22vw;
  @include mq(until-pc) {
    display: none;
  }
}
.cir2sp {
  width: 10vw;
  margin-top: 200px;
  margin-left: 35vw;
  @include mq(from-pc) {
    display: none;
  }
}
.leaf2 {
  @include mq(from-pc) {
    width: 400px;
    margin-top: 170px;
    margin-left: 28vw;
  }
  @include mq(until-tab) {
    width: 200px;
    margin-top: 38vh;
    margin-left: 20vw;
  }
  @media screen and (min-width: 741px) and (max-width: 980px) {
    width: 400px;
    margin-top: 470px;
    margin-left: 8vw;
  }
}
</style>
