<script setup lang="ts">
import { computed, reactive, resolveComponent } from 'vue'
interface Props {
  text?: string
  isBold?: boolean
  itemValue: string
  link?: string
}
const props = withDefaults(defineProps<Props>(), {
  text: '',
  isBold: false,
  link: '',
})

const selectItems = reactive([])
const isLink = computed(() => {
  return props.link !== ''
})
const componentName = computed(() =>
  isLink.value ? resolveComponent('nuxt-link') : 'span'
)
</script>

<template>
  <div>
    <label :for="itemValue" class="label">
      <input
        :id="itemValue"
        v-model="selectItems"
        type="checkbox"
        class="input"
        :value="itemValue"
      />
      <span class="mark"></span>
      <component
        :is="componentName"
        :class="{ bold: isBold === true }"
        class="text"
        :to="link"
        >{{ text }}</component
      >
    </label>
    <div class="texts">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.label {
  padding: 12px 8px 0 8px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover > .mark {
    background: #dddddd !important;
    border: solid 2px $main-dull;
  }

  .input {
    margin: 0;
    width: 0;
    opacity: 0;
  }

  .input:focus + .mark {
    background: #dddddd !important;
    border: solid 2px $main-dull;
  }

  .input:checked + .mark {
    border: solid 2px $main-dull;
    background: #ffffff;
  }

  .input:checked + .mark::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
    width: 80%;
    height: 80%;
    background: url('http://reitaisai.com/arts9/wp-content/uploads/sites/30/2022/06/check-1.svg')
      no-repeat center;
    color: $main-dull;
    background-size: contain;
  }

  .mark {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 32px;
    height: 32px;
    border: solid 2px $sub2-dull;
    background: #ffffff;
    border-radius: 4px;
  }

  .text {
    margin-left: 12px;
    display: block;
    width: calc(100% - 44px); // .textのmargin-left(12px) + .inputのwidth(32px)
  }
}
.texts {
  margin-left: 52px;
}
</style>
