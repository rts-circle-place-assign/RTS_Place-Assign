<template>
  <div class="wrapper flex align-center">
    <img src="~/assets/img/template/footer_leaf.svg" class="img" />
    <span class="official-sns">Official SNS</span>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  color: $text1;
  height: 100%;
  position: relative;
  width: 150px;
  @media screen and (max-width: 400px) {
    width: 30%;
  }
}
.img {
  height: 180%;
  margin-right: -20px;
}
.official-sns {
  font-size: 18px;
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
}
</style>
