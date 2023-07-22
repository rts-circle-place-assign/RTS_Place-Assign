# APopup.vueの使い方

```ts
const popupOpen = ref(false)
const setPopupOpen = (state: boolean) => (popupOpen.value = state)
```

```html
<template #secondhead>
  <p>あああ</p>
  <img src="https://reitaisai.com/arts10/wp-content/uploads/sites/32/2023/05/circle-newcomer-1.png" alt="" class="access-map cursor-zoomin" @click="setPopupOpen(true)">
</template>
<a-popup :isOpen="popupOpen" @close="setPopupOpen(false)">
  <img src="https://reitaisai.com/arts10/wp-content/uploads/sites/32/2023/05/circle-newcomer-1.png" alt="">
</a-popup>
```
