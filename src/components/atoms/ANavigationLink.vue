<script setup lang="ts">
  interface Props {
    to?: string
    sentence?: string
    open?: boolean
    big?: boolean
  }
  
  const props = withDefaults(defineProps<Props>(), {
    to: "",
    sentence: "",
    open: false,
    big: false
  })

  interface Emits {
    (e: 'menuOpen'): void
  }
  const emits = defineEmits<Emits>()

  const router = useRouter();
  const clickHandler = (e: Event) => {
    if (!props.open) {
      return
    }
    if (props.to.startsWith('/')) {
      router.push(props.to)
    } else if (props.to.startsWith('http')) {
      location.assign(props.to)
    } else if (props.to === 'menu') {
      e.preventDefault()
      emits('menuOpen')
    }
  }
  const imgUrl = new URL(`../../assets/img/template/${props.sentence.toLowerCase() +(props.open ? '' : '_gray')}.svg`, import.meta.url).href
</script>

<template>
  <!-- <div class="a-navigation-link" @click="clickHandler"> -->
  <div class="a-navigation-link" @click="clickHandler">
    <!-- <img
      :src="
        `../../assets/img/template/${
          props.sentence.toLowerCase() + (props.open ? '' : '_gray')
        }.svg`
      "
      class="img"
    /> -->
    <img :src="`/img/template/${
          sentence.toLowerCase() + (open ? '' : '_gray')
        }.svg`" alt="" class="img">
    <span :class="`${props.open ? 'green' : 'gray'}`">{{ sentence }}</span>
  </div>
</template>

<style lang="scss" scoped>
.a-navigation-link {
  text-decoration: none;
  color: $text1;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  margin-left: 4%;
  margin-right: 4%;
}
.aa-navigation-link:hover {
  text-decoration: underline;
}
.img {
  margin-bottom: 4px;
}
.green {
  color: $main-dull;
}
.gray {
  color: rgb(184, 184, 184);
}
</style>
