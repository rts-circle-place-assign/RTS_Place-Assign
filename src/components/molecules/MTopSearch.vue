<script setup lang="ts"></script>

<template>
  <div class="searchwrapper">
    <a-top-content backcolor="" wordcolor="white" title="企画情報" sub="SEARCH">
      <a-search-box
        class="searchbar"
        pcyoko="55%"
        spyoko="80%"
        :tate="60"
        barcolor="#fefadb"
        buttonkado="30px 0px 0px 30px"
        barkado="0px 30px 30px 0px"
        defaultword="検索"
      />
      <div class="flex justify-center">
        <a-top-search-button
          page="/map"
          path="/img/top/map_main_dull.svg"
          :title="'map'"
          :sub="'place-search'"
        />
        <a-top-search-button
          page="/fix/"
          path="/img/top/fix.svg"
          :title="'データ修正トップページ'"
          :sub="'申込データの修正'"
        />
      </div>
      <div class="flex align-start bottom">
        <img
          class="bottomimg mt--6 mr--24"
          src="../../assets/img/template/h3_leaf_green.svg"
        />
        <h3 class="nakamidashi my-0">おすすめ企画</h3>
        <img
          class="bottomimg mt-4"
          src="../../assets/img/template/h3_dots.svg"
        />
      </div>
    </a-top-content>
  </div>
</template>

<style lang="scss" scoped>
.searchwrapper {
  background-image: url('../../assets/img/top/searchbg_pc.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-left: -2px;
  padding-bottom: 9vw;
  overflow: hidden;
  @include mq(until-tab) {
    margin-top: -10vw;
    padding-top: 5vw;
    background-image: url('../../assets/img/top/searchbg_sp.svg');
  }
  @media screen and (min-width: 741px) and (max-width: 980px) {
    padding-top: 5vw;
  }
  @media screen and (min-width: 1250px) {
    padding-top: 5vw;
    padding-bottom: 15vw;
  }
  @media screen and (min-width: 2000px) {
    padding-bottom: 35vw;
  }
}
.searchbar {
  margin: 60px auto;
}
.bottom {
  margin: 6vw 0 10px 6vw;
}
.bottomimg {
  display: inline-block;
  margin: 2vw 0;
}
.nakamidashi {
  color: white;
}
.mend {
  display: flex;
  justify-content: center;
  @media screen and (max-width: 740px) {
    flex-wrap: wrap;
  }
}
.osusume {
  width: 15vw;
  margin: 1vw;
  @media screen and (max-width: 740px) {
    width: 35vw;
  }
  transition-duration: 0.15s;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
