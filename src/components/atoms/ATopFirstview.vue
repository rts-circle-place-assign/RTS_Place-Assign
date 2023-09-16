<template>
  <div class="firstview flex relative">
    <h3 class="text">新緑の薫りが私を誘う。</h3>
    <div class="wrapper">
      <img src="../../assets/img/top/firstview_top_0428.png" alt="ファーストビュー画像" class="top" />
      <img src="../../assets/img/top/firstview_bottom.png" alt="ファーストビュー画像" class="bottom" />
    </div>
    <a-scroll-bar class="absolute scroll-bar" />
  </div>
</template>

<style lang="scss" scoped>
.firstview {
  background-color: $sub3-soft;
  @include mq(from-tab) {
    padding-bottom: 1vw;
  }
}
.text {
  position: absolute;
  writing-mode: vertical-rl;
  letter-spacing: 0.3em;
  color: $main-dull;
  margin-top: calc(90vh - 36px - 209px);
  margin-left: 6vw;
  z-index: 1;
  @include mq(until-pc) {
    display: none;
  }
}
.wrapper {
  position: relative;
  width: 100vw;
  background-color: $main-soft;
  padding-bottom: 15vh;
  @media screen and (min-width: 460px) {
    padding-bottom: calc(20vh + 80vw);
  }
  @include mq(from-tab) {
    width: 80vw;
    height: calc(100vh - 104px);
    margin: 48px auto;
    padding-bottom: 0px;
  }
}
.top {
  width: 40vw;
  margin-top: 5px;
  z-index: 2;
  @include mq(until-tab) {
    width: 96vw;
    margin-top: 20px;
  }
  @media screen and (min-width: 741px) and (max-width: 870px) {
    width: 75vw;
  }
  @media screen and (min-width: 871px) and (max-width: 980px) {
    width: 68vw;
  }
}
.bottom {
  width: 40vw;
  margin-top: 5vh;
  rotate: 15deg;
  @include mq(sp) {
    width: 200vw;
    margin-top: -80px !important;
    margin-bottom: 6vh;
    rotate: 0deg;
  }
  @include mq(until-tab) {
    width: 115vw;
    margin-top: -16vh !important;
    margin-left: -20vw;
    rotate: 0deg;
  }
  @include mq(from-tab) {
    position: absolute;
    right: -20px;
    bottom: -40px;
    @include mq(until-pc) {
      width: 400px;
      margin-top: calc(30vh - 50px);
      margin-left: calc(100vw - 770px);
    }
  }
}
.scroll-bar {
  top: 60vh;
  right: 5vw;
}
.banner {
  position: absolute;
  margin-top: calc(100vh - 18vw - 51px) !important;
  margin-left: 70vw;
  z-index: 3;
  @include mq(until-pc) {
    display: none;
  }
  &:hover {
    margin-top: calc(100vh - 19vw - 51px) !important;
    margin-left: 69vw;
  }
}
</style>
