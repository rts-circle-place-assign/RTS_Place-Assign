<script setup lang="ts">
import { useKikakuCardById } from '../../lib/hooks'

const { data: thisPlaceAssignData } = await useFetch('/api/thisPlaceAssign', {
  key: 'thisPlaceAssignData',
})
const route = useRoute()
// const kikaku = thisPlaceAssignData.value[route.params.id - 1]
const kikaku = useKikakuCardById(
  thisPlaceAssignData.value,
  Number(route.params.id)
)
</script>

<template>
  <div v-if="kikaku">
    <a-kikaku-img :kikaku="kikaku" />
    <div>
      <o-kikaku-title :kikaku="kikaku" />
      <div class="kabu">
        <m-article-window>
          <template #head>
            <m-article-paragraph secondhead="合体・連結情報">
              <template #secondhead>
                <m-joint-info :kikaku="kikaku" />
              </template>
            </m-article-paragraph>
            <a-fav-button :id="kikaku.id" />
          </template>
        </m-article-window>
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<style lang="scss" scoped>
.kabu {
  width: 80vw;
  max-width: 700px;
  margin: auto;
}
.articles {
  width: 80vw;
  max-width: 700px;
  margin: auto;
}
.come-on-online {
  margin: auto auto;
  padding: 20px;
}
:deep(.slot) {
  width: 80vw;
  max-width: min(700px, calc(100% - 20px));
}
.go-popup {
  z-index: 20;
}
</style>
