<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'サークルカット格納',
})

const config = useRuntimeConfig()
</script>

<template>
  <o-article-template title="サークルカット格納">
    <m-article-window head="作業概要">
      <template #head>
        <p>社務所サーバーに格納されているサークルカットをGoogleフォルダにアップロードする。</p>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1gX8Jk6HutEtAxBp_7eAPrmQLaX6hxcnY"
                  target="blank"
                  rel="noopener"
                  >サクカを格納するフォルダ</a
                >を開く。
              </li>
              <li>新しいフォルダを作成して「（会期英略称小文字）」にリネームする。</li>
              <li>
                <a href="http://192.168.11.6:8080/cgi-bin/">社務所サーバー</a>にアクセスする。
                <ul>
                  <li>ユーザー名：pri_staff <br />※zimu_staffではないので注意</li>
                  <li>パスワード：{{ config.public.pri_staff_password }}</li>
                </ul>
              </li>
              <li>
                「\\192.168.11.6\020.rts個人情報作業領域\(kaiki)\マスタ作業領域\納品_yymmdd」を開き、「（会期）_Cut1|2」の中にある画像ファイルを全て2.のフォルダにアップロードする。
              </li>
              <li>アップロードには時間がかかるので、キューを入れたら次の作業へ。</li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-check-list :items="items" link="/before-fix/tsv" width="350" next="マスタファイル処理" />
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style scoped lang="scss"></style>
