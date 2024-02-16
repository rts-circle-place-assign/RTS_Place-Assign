<template>
  <table>
    <tr>
      <th colspan="4">カウント</th>
    </tr>
    <tr>
      <th>色</th>
      <th class="gaitousp">該当SP数</th>
      <th class="gaisyusp">外周抜きSP数</th>
      <th class="remainsp">残り島中SP数</th>
    </tr>
    <tr>
      <th class="sp">ピンク</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th class="sp">オレンジ</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th class="sp">イエロー</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <!-- <tr>
      <th class="sp">グリーン</th>
      <td></td>
      <td></td>
      <td></td>
    </tr> -->
    <tr>
      <th class="sp">なし</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th class="sp">合計</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/management.scss';
//.gaitousp {
//  width: 5vw;
//}
//.gaisyusp,
//.remainsp {
//  width: 5vw;
//}
.sp {
  height: 6vh;
  //width: 5vw;
}
</style>
