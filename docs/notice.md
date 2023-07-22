# Nuxt3移行で気づいたこと

Nuxt2 + Composition APIで組んだ博麗神社例大祭配置webシステムを、テンプレート部分は96から引き継ぎつつNuxt3 + Composition APIで組みなおしてみようという~~無謀な~~取り組みをしている。多分フルスクラッチする。

## 全体的に

- 分かってはいたけど、今までのNuxt講習会は半分役に立たない（逆に言うと、半分は役に立つということであるが）。あまりに破壊的な変更が多すぎる。
  -  いっそのことこれを機にReact+Next.jsに乗り換えては？というレベル。
- 一番は公式ドキュメントを読むことだが、[このページ](https://reffect.co.jp/vue/nuxt3/)も分かりやすかった。実践レベルであればこれを見てみるとよいかも。

## sass周り

- sass-mqが使えなくなっている？`($from:)`が解釈されていないみたい。仕方なく
```scss
$breakpoints: (
  sp: 'screen and (max-width: 440px)', // $until: $spと同じ
  from-tab: 'screen and (min-width: 441px)',
  until-tab: 'screen and (max-width: 740px)',
  from-pc: 'screen and (min-width: 981px)',
  until-pc: 'screen and (max-width: 960px)',
  pc: 'screen and (min-width: 1201px)'
)!default;

@mixin mq($breakpoint) {
  @media #{map-get($breakpoints, $breakpoint)} {
      @content;
  }
}
```
と書いて、1つのbreakpointにつきfromとuntilでそれぞれ2つずつ`@include mq()`を書いているイメージ。
- v-deep周りの書き方が変わっていた（これはNuxt3移行によるものではないが）。
```scss:APopup.vue
.content {
  & :deep(img) {
    width: 100%;
  }
}
// 以下の書き方だと怒られる。
.content {
  & ::v-deep img {
    width: 100%;
  }
}
```
このように、`:deep(selector)`と書かないといけない。書かないと↓みたいに怒られる。[こちらの記事](https://zenn.dev/mihorin1729/articles/21f0b44f9cbfc4)を参考に書き換えた。
```bash
 WARN [@vue/compiler-sfc] ::v-deep usage as a combinator has been deprecated. Use :deep(<inner-selector>) instead.
```

## propsについて

- nuxt2での
```ts
props: {
  link: {
    type: String,
    default: '',
    required: true,
  },
},
```
という書き方はしない。
```ts
interface Props {
  link?: string
}
const props = withDefaults(defineProps<Props>(), {
  link: ""
})
// const props =~は、以下の書き方も可
withDefaults(defineProps<Props>(), {
  link: ""
})
```
と分けて書く。ここで、`required: false`の場合はキー名の後に`?`をつける。
- propsをscript内で呼び出すには、`const props = ~`で始めること。また、呼び出すときは`props.hoge`だけでよく、nuxt2 composition apiで使っていた`.value`は要らない。
```ts
const external = computed(() => (props.link.startsWith('http')))
```

## head（特にtitle）について

- Nuxt2までの`plugin/createHead`あるいは`nuxt.config.ts`での`meta`ではなく、`useHead`を使う。`default.vue`で`title`という引数を持つタイトル名テンプレートを作り、各ページ（`index.vue`など）で`useHead`の`title`に入れることで完成する。
```ts:default.vue
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - 博麗神社例大祭 配置関連ウェブシステム` : '博麗神社例大祭 配置関連ウェブシステム';
  },
});
```
```ts: index.vue
useHead({
  title: "トップページ"
})
```

## エラーページについて

- 置き場所が変わっている。Nuxt2では`~/layouts/error.vue`だったが、Nuxt3では`./error.vue`（`app.vue`と同じ階層）だそう。[こちら](https://zenn.dev/kakkoyakakko/articles/329801deb185b8)を参照。

## 動的コンポーネントについて

- `<component :is="componentName">`で呼び出す`componentNam`の書き方が変わっている。
Nuxt2では
```ts:ALinkButton.vue(old)
const componentName = computed(() => {
  if (props.disabled) return 'div'
  return external.value ? 'a' : 'nuxt-link'
})
```
でよかったが、Nuxt3ではエラーが出た。
```ts:ALinkButton.vue
const componentName = computed(() => {
  if (props.disabled) return 'div'
  return external.value ? 'a' : resolveComponent('nuxt-link') // resoveComponent('hoge-hoge')と書く
})
```
こう書けばエラーが出なかった。
