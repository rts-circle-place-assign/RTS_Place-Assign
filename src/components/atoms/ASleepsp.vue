<template>
  <div class="wrapper">
    <img class="top" src="../../assets/img/error/Z.svg" />
    <img class="middle" src="../../assets/img/error/Z.svg" />
    <img class="bottom" src="../../assets/img/error/Z.svg" />
    <img class="may" src="../../assets/img/error/maysp.svg" />
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
  width: 17px;
  margin-top: 20px;
  margin-left: 14.3px;
  animation: to 3s ease 0s infinite forwards;
}
.middle {
  position: absolute;
  width: 11.5px;
  margin-top: 48.6px;
  margin-left: 31.5px;
  animation: mid 3s ease 0s infinite forwards;
}
.bottom {
  position: absolute;
  width: 5.7px;
  margin-top: 67.5px;
  margin-left: 42.9px;
  opacity: 0;
  animation: bot 3s ease 0s infinite forwards;
}
.may {
  width: 200px;
}
</style>
