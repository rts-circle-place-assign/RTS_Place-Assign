<script setup lang="ts">
interface Props {
  page: string
  path: string
  title: string
  sub: string
}

withDefaults(defineProps<Props>(), {
  page: "",
  path: "",
  title: "",
  sub: ""
})
</script>

<template>
  <div class="button">
    <nuxt-link class="img" :to="page">
      <img :src="`../../assets/img/top/${path}`" />
      <p class="title">{{ title }}</p>
      <p class="sub">{{ sub }}</p>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.button {
  width: 20vw;
  background-image: url('../../assets/img/top/searchcircle.png');
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 600px) {
    width: 44vw;
  }
  @media screen and (min-width: 601px) and (max-width: 780px){
    width: 40vw;
  }
  @media screen and (min-width: 781px) and (max-width: 1060px){
    width: 28vw;
  }
  transition-duration: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
}
.img {
  width: 16vw;
  height: 16vw;
  display: grid;
  place-content: center;
  place-items: center;
  margin-top: 1.8vw;
  margin-left: 2.2vw;
  border-radius: 50%;
  transition: all 200ms ease-in;
  text-decoration: none;
  @media screen and (max-width: 600px) {
    width: 35vw;
    height: 35vw;
    margin-top: 4.1vw;
    margin-left: 5.1vw;
  }
  @media screen and (min-width: 601px) and (max-width: 780px){
    width: 31.8vw;
    height: 31.8vw;
    margin-top: 3.7vw;
    margin-left: 4.6vw;
  }
  @media screen and (min-width: 781px) and (max-width: 1060px){
    width: 22.2vw;
    height: 22.2vw;
    margin-top: 2.7vw;
    margin-left: 3.2vw;
  }
}
img {
  display: inline;
  width: 5vw;
  margin-top: -1vw;
  @media screen and (max-width: 600px) {
    width: 11vw;
  }
  @media screen and (min-width: 601px) and (max-width: 780px){
    width: 10vw;
  }
  @media screen and (min-width: 781px) and (max-width: 1060px){
    width: 7vw;
  }
}
p {
  margin: 0;
  position: relative;
  color: $text1;
  text-align: center;
}
.title {
  font-size: 16px;
  @media screen and (max-width: 370px) {
    font-size: 10px;
  }
  @media screen and (min-width: 371px) and (max-width: 480px){
    font-size: 13px;
  }
}
.sub {
  font-size: 12px;
}
</style>
