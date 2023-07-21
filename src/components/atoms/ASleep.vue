<template>
  <div class="wrapper">
    <img class="top" src="../../assets/img/error/Z.svg" />
    <img class="middle" src="../../assets/img/error/Z.svg" />
    <img class="bottom" src="../../assets/img/error/Z.svg" />
    <img class="may" src="../../assets/img/error/may2.svg" />
  </div>
</template>

<style lang="scss" scoped>
@keyframes bot {
  0% {
    opacity: 0;
  }
  33% {
    opacity: 100;
  }
  100% {
    opacity: 100;
  }
}
@keyframes mid {
  0% {
    opacity: 0;
  }
  33% {
    opacity: 0;
  }
  66% {
    opacity: 100;
  }
  100% {
    opacity: 100;
  }
}
@keyframes to {
  0% {
    opacity: 0;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}
.wrapper {
  position: relative;
}
.top {
  position: absolute;
  width: 34px;
  margin-top: 40px;
  margin-left: 28.6px;
  animation: to 3s ease 0s infinite forwards;
}
.middle {
  position: absolute;
  width: 22.9px;
  margin-top: 97.1px;
  margin-left: 62.9px;
  animation: mid 3s ease 0s infinite forwards;
}
.bottom {
  position: absolute;
  width: 11.4px;
  margin-top: 134.9px;
  margin-left: 85.7px;
  opacity: 0;
  animation: bot 3s ease 0s infinite forwards;
}
.may {
  width: 400px;
}
</style>
