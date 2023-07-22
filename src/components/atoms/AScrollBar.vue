<template>
  <div class="a-scrollbar">
    <div class="scrollbar-text">scroll</div>
    <div class="scrollbar-track">
      <div class="scrollbar-inner" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.a-scrollbar {
  display: grid;
  place-content: center;
  place-items: center;
  z-index: 10;
}
.scrollbar-text {
  writing-mode: vertical-rl;
  color: $main-dark;
}
.scrollbar-track {
  width: 2px;
  height: 80px;
  margin-top: 8px;
  background-color: white;
  border-radius: 9999px;
  overflow: hidden;
  .scrollbar-inner {
    position: relative;
    width: 2px;
    height: 80px;
    background-color: $main-dark;
    animation: scrolldown 1.5s ease-in-out infinite;

    @keyframes scrolldown {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(100%);
      }
    }
  }
}
</style>
