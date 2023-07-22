<script setup lang="ts">
useHead({
  title: "サークル検索"
})
const { data: thisPlaceAssignData } = await useFetch('/api/thisPlaceAssign', {key: 'thisPlaceAssignData'})
const start = ref<number>(1);
const end = ref<number>(1);
const currentPage = ref<number>(1);
const ids = ref<Array>([1, 3, 5, 7])
const getIds = computed(() => {
  start.value = (currentPage.value - 1) * 12;
  end.value = currentPage.value * 12;
  return ids.value.slice(start.value, end.value);
});
console.log(getIds.value)
const getPaginateCount = computed(() => {
  return Math.ceil(ids.value.length / 12);
});
const paginateClickCallback = (pageNum: number) => {
  currentPage.value = pageNum;
};
const route = useRoute();
watch(route, () => {
  currentPage.value = 1;
});
</script>

<template>
  <o-article-template title="企画検索">
    <div class="flex wrap justify-center">
      <o-kikaku-card v-for="i in getIds" :key="i" :id="i" class="okikaku"></o-kikaku-card>
    </div>
    <!-- <client-only>
      <div class="flex wrap justify-center">
        
      </div>
    </client-only> -->
    <!-- <client-only>
      <paginate
        v-if="getIds.length !== 0"
        v-model="currentPage"
        :page-count="getPaginateCount"
        :click-handler="paginateClickCallback"
        container-class="pagination"
        page-class="page-item"
        page-link-class="page-link"
        prev-class="page-item"
        prev-link-class="page-link"
        next-class="page-item"
        next-link-class="page-link"
        :first-last-button="true"
        prev-text="<"
        next-text=">"
        first-button-text="<<"
        last-button-text=">>"
        :hide-prev-next="true"
        class="paginate"
      />
    </client-only> -->
  </o-article-template>
</template>

<style lang="scss" scoped>
.okikaku {
  text-align: left;
}
.paginate {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
}
:deep(.pagination) {
  list-style: none;
}
:deep(.page-link) {
  color: $main_dull;
  @include mq(from-pc) {
    font-size: 22px !important;
  }
  @include mq(from-tab) {
    font-size: 20px !important;
  }
  @include mq(from-sp) {
    font-size: 18px !important;
  }
}
:deep(.page-item) {
  list-style: none;
  color: $main_dull;
  margin: 10px 8px;
  @include mq(from-pc) {
    font-size: 22px;
  }
  @include mq(from-tab) {
    font-size: 20px;
  }
  @include mq(from-sp) {
    font-size: 18px;
  }
  &.active > a {
    background-color: $main_dull;
    color: white;
    padding: 0 0.5em;
    width: 1.5em;
    height: 1.5em;
    font-weight: 700;
    border-radius: 50%;
  }
}
</style>
