<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Circle, getMedia, getSakuhin, cutURL } from '~/lib/hooks'
interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()

const windowWidth = ref(0)
onMounted(() => {
  windowWidth.value = window.innerWidth
  window.addEventListener('load', getWindowWidth)
  window.addEventListener('resize', getWindowWidth)
})
const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
const media = getMedia(props.kikaku.mediacode)
const sakuhin = getSakuhin(props.kikaku.sakuhincode)
const popupOpen = ref(false)
const setPopupOpen = (state: boolean) => (popupOpen.value = state)
const isAdult = props.kikaku.seijin === 1 ? '成年向け頒布物あり' : '成年向け頒布物なし'
</script>

<template>
  <div class="title_wrapper">
    <div v-if="windowWidth < 741" class="save-title">
      <div class="flex wowo">
        <a-kikaku-card-thumbnail
          class="winner mr-10 cursor-zoomin"
          :kikaku="kikaku"
          radius="15px"
          border="6px solid #cce6f6"
          @click="setPopupOpen(true)"
        />
        <a-popup :isOpen="popupOpen" @close="setPopupOpen(false)">
          <img :src="cutURL(kikaku.cutId)" alt="" />
        </a-popup>

        <div>
          <!-- <a v-scroll-to="'#element'" href="#" class="gotoonline">
            <div class="flex globe-back">
              <img
                class="image"
                :src="require(`~/assets/img/kikaku/details/globe_white.svg`)"
              />
              <div class="globe-font">globe</div>
            </div>
          </a> -->
          <div class="flex direction-column">
            <div class="catekyo-no-oya">
              <p class="catekyo">
                {{ media }}
              </p>
            </div>
            <div v-if="kikaku.sakuhincode !== null" class="catekyo-no-oya">
              <p class="catekyo">{{ sakuhin }}</p>
            </div>
            <div :class="{ adult: kikaku.seijin === 1 }" class="catekyo-no-oya">
              <p class="catekyo">{{ isAdult }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="title border name">
        <ruby>
          {{ kikaku.circlename }}
          <rt>{{ kikaku.circlenamekana }}</rt>
        </ruby>
      </div>
      <div class="org">
        <ruby>
          {{ kikaku.penname }}
          <rt>{{ kikaku.pennamekana }}</rt>
        </ruby>
      </div>
    </div>
    <div v-else class="save-title">
      <a-kikaku-card-thumbnail
        class="winner mr-10 cursor-zoomin"
        :kikaku="kikaku"
        radius="15px"
        @click="setPopupOpen(true)"
      />
      <a-popup :isOpen="popupOpen" @close="setPopupOpen(false)">
        <img :src="cutURL(kikaku.cutId)" alt="" />
      </a-popup>
      <div class="wowo">
        <div class="flex wrap">
          <!-- <a v-scroll-to="'#element'" href="#" class="gotoonline">
            <div v-if="withOnline" class="flex globe-back">
              <img
                class="image"
                :src="require(`~/assets/img/kikaku/details/globe_white.svg`)"
              />
              <div class="globe-font">{{ $t('globe') }}</div>
            </div>
          </a> -->
          <div class="flex">
            <div class="catekyo-no-oya">
              <p class="catekyo">
                {{ media }}
              </p>
            </div>
            <div v-if="kikaku.sakuhincode !== null" class="catekyo-no-oya">
              <p class="catekyo">{{ sakuhin }}</p>
            </div>
            <div :class="{ adult: kikaku.seijin === 1 }" class="catekyo-no-oya">
              <p class="catekyo">{{ isAdult }}</p>
            </div>
          </div>
        </div>
        <div class="title border name">
          <ruby>
            {{ kikaku.circlename }}
            <rt>{{ kikaku.circlenamekana }}</rt>
          </ruby>
        </div>
        <div class="org">
          <ruby>
            {{ kikaku.penname }}
            <rt>{{ kikaku.pennamekana }}</rt>
          </ruby>
        </div>
      </div>
    </div>
    <div class="flex grass-wrapper">
      <hr class="hr" />
      <img class="mr-5 ml-8" src="../../assets/img/kikaku/details/sp_title.svg" />
      <hr class="hr" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title_wrapper {
  position: relative;
  // height: 245px;
  min-height: calc(100vw * 173 / 375 + 20px);
  background-image: url('~/assets/img/kikaku/details/sp_titlebg.png');
  background-size: 100% calc(100% - 30px);
  background-position-x: center;
  background-position-y: 20px;
  background-repeat: no-repeat;
  @include mq(from-tab) {
    background-image: url('~/assets/img/kikaku/details/pc_titlebg.svg');
    background-position-x: center;
    background-position-y: 0;
    background-size: 100%;
    // height: 150px;
    min-height: 150px;
  }
}
.save-title {
  width: 310px;
  margin: auto auto;
  @include mq(from-tab) {
    width: 80vw;
    display: flex;
    padding-top: 20px;
  }
  @include mq(from-pc) {
    width: 800px;
  }
}
.wowo {
  align-items: flex-end;
  position: relative;
  // z-index: 10;
  @include mq(from-tab) {
    margin-bottom: 20px;
  }
}
.catekyo-no-oya {
  position: relative;
  margin-right: 10px;
  & .adult {
  }
}
.catekyo {
  height: fit-content;
  font-size: 10px;
  color: $main-dark;
  margin-bottom: 0;
  white-space: nowrap;
  &::after {
    position: absolute;
    background: radial-gradient(circle farthest-side, #000, #000 50%, transparent 50%, transparent);
    background-size: 4px;
    content: '';
    display: inline-block;
    height: 4px;
    width: 100%;
    left: 0;
    top: 26px;
    @include mq(sp) {
      top: 20px;
    }
    @include mq(from-tab) {
      top: 30px;
    }
  }
  @include mq(sp) {
    margin-top: 0px;
    margin-bottom: 5px;
  }
  @include mq(from-tab) {
    font-size: 12px;
  }
}
.adult {
  background-color: $text3;
  & p {
    color: white;
    max-height: fit-content;
  }
}
.winner {
  // width: calc(100vw * 83 / 353);
  border-radius: 15px;
  background-color: #cce6f6;
  @include mq(from-tab) {
    background-color: transparent;
    width: fit-content;
    height: fit-content;
  }
}
.globe-back {
  background-color: $sub1-dull;
  color: $sub3-soft;
  border-radius: 9999px;
  padding: 2px 10px;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2);
  @include mq(from-tab) {
    margin-top: 10px;
    align-items: center;
    margin-right: 5px;
  }
}
.image {
  border-radius: 15px;
  width: 20px;
  margin-right: 5px;
}
.globe-font {
  font-size: 11px;
}
.name {
  font-size: 18px;
  @include mq(from-tab) {
    font-size: 28px;
  }
}
.org {
  font-size: 12px;
  @include mq(from-tab) {
    font-size: 15px;
  }
}
.grass-wrapper {
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 7px;
  padding-bottom: 20px;
  left: calc((100vw - 312px) / 2);
  @include mq(from-tab) {
    display: none;
  }
}
.hr {
  border: 0.7px solid #333;
  width: 130px;
  margin: auto 0;
}
.gotoonline {
  text-decoration: none;
}
</style>
