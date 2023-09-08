<template>
  <table>
    <thead>
      <tr>
        <th colspan="4">流し込み担当</th>
      </tr>
      <tr>
        <th>範囲</th>
        <th>ジャンル</th>
        <th>事故SP数</th>
        <th>担当者<br />サイン</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="n of 6" :key="n">
        <td class="block">～</td>
        <td class="genre"></td>
        <td class="sp"></td>
        <td class="sign"></td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/management.scss';
.block {
  width: 5rem;
}
.genre {
  width: 8rem;
}
.sign {
  // width: 8rem;
  height: 3rem;
  width: 7rem;
}
.sp {
  width: 5rem;
}
</style>
