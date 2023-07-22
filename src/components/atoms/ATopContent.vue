<script setup lang="ts">
type Background =
  | 'main-dark'
  | 'sub4-soft'
  | 'sub4-dull'
  | 'sub3-soft'
  | 'main-soft'
  | 'sub1-soft'
  | 'white'
  | ''
interface Props {
  backcolor?: string
  wordcolor: string
  title: string
  sub: string
  text?: string
}
const props = withDefaults(defineProps<Props>(), {
  backcolor: "",
  wordcolor: "main-dark",
  title: "",
  sub: "",
  text: ""
})

const colorcode1 = computed(() => {
  switch (props.backcolor) {
    case 'main-dark':
      return '#153d26'
    case 'sub4-soft':
      return '#e4f1f9'
    case 'sub4-dull':
      return '#cbe6f8'
    case 'sub3-soft':
      return '#fefadb'
    case 'main-soft':
      return '#d6eadf'
    case 'sub1-soft':
      return '#c8daad'
    default:
      return ''
  }
})
const colorcode2 = computed(() => {
  switch (props.wordcolor) {
    case 'main-dark':
      return '#153d26'
    case 'white':
      return '#FFFFFF'
    default:
      return '#153d26'
  }
})
const space = ref('')
</script>

<template>
  <div class="content" :style="{ 'background-color': colorcode1 }">
    <h1 class="title mb-0" :style="{ color: colorcode2, 'letter-spacing': space }">{{ title }}</h1>
    <span
      class="d-block sub"
      :style="{ color: colorcode2 }"
    >
      {{ sub }}
    </span>
    <p v-if="text" class="text">{{ text }}</p>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding-top: 8vh;
}
.title {
  letter-spacing: 0.1em;
  margin-left: 6vw;
  line-height: 1.2em;
}
.sub {
  letter-spacing: 0.1em;
  margin-left: calc(6vw + 3px);
  margin-bottom: -1px;
  font-size: 12px;
  line-height: 14px;
  font-family: 'DNP Shuei Mgothic Std L', sans-serif;
}
.text {
  margin-left: 5.8vw;
  margin-bottom: 5vh;
}
</style>
