<script setup lang="ts">
interface Props {
  title: string
}
defineProps<Props>()

interface Emits {
  (e: 'input', text: string): void
}
const emits = defineEmits<Emits>()
</script>

<template>
  <m-article-window>
    <template #head>
      <m-article-paragraph :secondhead="title">
        <template #secondhead>
          <label for="" class="contenteditable mt-20">
            <div
              class="contenteditable"
              contenteditable="true"
              role="textbox"
              @input="emits('input', $event.target.textContent)"
            ></div>
          </label>
        </template>
      </m-article-paragraph>
    </template>
  </m-article-window>
</template>

<style lang="scss" scoped>
.contenteditable {
  display: flex;
  align-items: flex-start;
  & .label {
    color: red;
    font-weight: bold;
    width: 64px;
    min-width: 64px;
    padding-top: 4px;
  }
  & .contenteditable {
    width: calc(100% - 64px);
    min-height: 70px;
    padding: 8px 12px;
    border: 2px solid $main-dull;
    &:focus-visible {
      outline: none;
      border-color: $accent;
    }
  }
}
</style>
