<template>
  <table>
    <thead>
      <tr>
        <th colspan="2">担当者サイン</th>
      </tr>
    </thead>
    <tbody class="sign">
      <tr>
        <th>ホチキス・クリップ<br />チェック</th>
        <td></td>
      </tr>
      <tr>
        <th>なかよし有無別<br />カウント</th>
        <td></td>
      </tr>
      <tr>
        <th>付箋付き<br />カウント</th>
        <td></td>
      </tr>
      <tr>
        <th>外周抜き後<br />カウント</th>
        <td></td>
      </tr>
      <tr>
        <th>キャラ分け</th>
        <td></td>
      </tr>
      <tr>
        <th>キャラ分け<br />チェック</th>
        <td></td>
      </tr>
      <tr>
        <th>キャラソート</th>
        <td></td>
      </tr>
      <tr>
        <th>キャラソート<br />チェック</th>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/management.scss';
.sign {
  & td {
    width: 20vw;
    height: 4vh;
  }
  & th {
    font-size: 0.8rem;
  }
}
</style>
