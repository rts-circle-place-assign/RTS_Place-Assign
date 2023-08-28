<script setup lang="ts">
const kaikiStore = useKaikiStore()
const { state } = kaikiStore
const kaiki = state.value.kaikiEn.toLowerCase()
</script>

<template>
  <footer class="footer relative print-none" :style="{ '--pb': '120px' }">
    <div class="inner-wrapper">
      <img src="~/assets/img/template/footer_logo.svg" class="footer-logo" />
      <div class="sns">
        <a-footer-official-sns />
        <a-footer-sns-link />
      </div>
      <div class="policy">
        <a
          :href="'https://reitaisai.com/' + kaiki + '/'"
          class="footer-policy"
          target="blank"
          rel="noopener"
        >
          <span>例大祭公式ウェブサイト</span>
        </a>
        <a
          href="https://gogatsusai.jp/96/visitor/"
          class="footer-policy"
          target="blank"
          rel="noopener"
        >
          <span>第96回五月祭ウェブサイト</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $sub3-soft;
  width: 100%;
  padding-bottom: var(--pb);
  @include mq(from-pc) {
    padding-bottom: 0;
  }
}
.inner-wrapper {
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;
  @include mq(until-tab) {
    flex-direction: column;
  }
  @include mq(from-tab) {
    justify-content: space-between;
    margin-right: 1%;
    margin-left: 1%;
  }
  @include mq(from-pc) {
    height: 20vh;
  }
}
.footer-logo {
  height: 110%;
  @include mq(until-tab) {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    margin-top: 13px;
  }
  @media screen and (min-width: 1000px) {
    margin-top: 15px;
  }
}
.sns {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 25px;
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and (min-width: 400px) {
    width: 100vw;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @include mq(from-tab) {
    width: 50%;
  }
  @media screen and (min-width: 1000px) {
    height: 35px;
  }
}
.policy {
  @include mq(until-tab) {
    width: 100vw;
    display: flex;
    justify-content: center;
  }
  @include mq(from-tab) {
    width: 35%;
    display: flex;
    justify-content: space-around;
  }
}
.footer-policy {
  text-decoration: none;
  color: $text1;
  @include mq(until-tab) {
    margin-left: auto;
    margin-right: auto;
  }
}
.footer-policy:hover {
  text-decoration: underline;
}
</style>
