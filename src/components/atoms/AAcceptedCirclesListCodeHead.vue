<script setup lang="ts">
const kaikiStore = useKaikiStore()
const kaikiEn = kaikiStore.state.value.kaikiEn
const kaikiEnSmall = kaikiEn.toLowerCase()
</script>

<template>
  <textarea rows="100" cols="100">
    <div class="content-wrapper" data-v-40f64b9c>
  <div class="container">
    <div class="indent" data-v-40f64b9c data-v-61371668>
      <p data-v-40f64b9c data-v-61371668>本リストは受付サークル一覧です。</p>
      <p data-v-40f64b9c data-v-61371668>
        一部の不備のサークルを除き、今回申込をいただいたサークルさんには基本的にすべてスペースをご用意できる予定ではありますが、当選を保証するものではありませんのでご注意ください。
      </p>
      <p data-v-40f64b9c data-v-61371668>配置事故防止のため、申込時の成年向け頒布物有無とメディアコードを掲載しています。あわせてご確認ください。なお、合体先サークルと連結して配置するために申込内容が変更される可能性があります。<br>
        <b data-v-40f64b9c data-v-61371668
        >※申込をされたにもかかわらず一覧に名前がない場合、または掲載内容が申込内容と異なる場合は、お手数ですが2/16（金）までに</b
        ><a href="/rts21/contacts" target="_blank" rel="noopener" data-v-61371668>問い合わせフォーム</a
        >よりご連絡ください。
      </p>
    </div>
    <details>
      <summary data-v-a171f2f8 data-v-2b304856>
        <div class="flex how-to-use">
          <img
                  src="http://reitaisai.com/rts19/wp-content/uploads/sites/29/2022/02/questionmark.svg"
                  class="questionmark"
          />
          <h3>このページの使い方</h3>
        </div>
      </summary>
      <div class="use-wrapper">
        <div class="how-to-search">
          <h3>検索機能</h3>
          <img
                  src="http://reitaisai.com/rts19/wp-content/uploads/sites/29/2022/02/search.gif"
                  class="gifimg"
          />
          <p>
            「サークル名」「サークル名かな」「ペンネーム」「ペンネームかな」を対象として検索できます。
          </p>
          <p>
            「検索」と書かれた入力欄に検索したい文字列を入力すると、該当するサークルが表示されます。
          </p>
          <p>
            ※「サークル名かな」で検索する際は、ひらがなまたは英数字をご入力ください。また、<u
          >英数字には全角・半角の区別があります。</u
          >
          </p>
        </div>
        <div class="how-to-sort">
          <h3>ソート機能</h3>
          <img
                  src="http://reitaisai.com/rts19/wp-content/uploads/sites/29/2022/02/sort.gif"
                  class="gifimg"
          />
          <p>
            「サークル名」「ペンネーム」の文字列を対象としてソートできます。
          </p>
          <p>
            ソートしたい基準の列の先頭を一度クリックすると、その列の読み仮名について昇順にソートされます。もう一度クリックすると、降順でソートされます。
          </p>
        </div>
      </div>
    </details>
    <div class="group">
      <label for="text4" id="textbox1"></label>
      <div class="password_box">
        <div class="password_inner">
          <input
                  type="search"
                  class="light-table-filter"
                  data-table="order-table"
                  id="text4"
          />
          <p class="password_string">検索したい文字列を入力</p>
        </div>
      </div>
    </div>
    <div class="sortable-table">
      <table id="my-table1" class="sorttbl order-table">
        <thead>
        <tr>
          <th scope="col" data-id="circlename" sortable>サークル名</th>
          <th scope="col" data-id="circlenamekana" sortable class="is-hidden">
            サークル名かな
          </th>
          <th scope="col" data-id="penname" sortable>ペンネーム</th>
          <th scope="col" data-id="pennamekana" sortable class="is-hidden">
            ペンネームかな
          </th>
          <th scope="col" data-id="media" sortable >
            配置希望メディア
          </th>
          <th scope="col" data-id="seijin" sortable >
            成年向け頒布物有無
          </th>
        </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/@riversun/sortable-table/lib/sortable-table.js"></script>

  </textarea>
</template>

<style scoped lang="scss">
textarea {
  font-size: 0.9rem;
  height: 150px;
}
</style>
