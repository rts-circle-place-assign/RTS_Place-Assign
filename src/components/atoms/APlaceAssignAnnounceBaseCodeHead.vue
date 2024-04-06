<script setup lang="ts"></script>

<template>
  <textarea rows="100" cols="100">
<div class="container content-wrapper">
  <p>本リストはサークル配置一覧です。</p>
  <p>サークル参加案内・サークル参加者向け会場図・宅配搬入識別票などは4月上旬公開予定です。</p>
  <details>
    <summary data-v-a171f2f8 data-v-2b304856>
      <div class="flex how-to-use">
        <img src="http://reitaisai.com/rts19/wp-content/uploads/sites/29/2022/02/questionmark.svg" class="questionmark">
        <h3>このページの使い方</h3>
      </div>
    </summary>
    <p>このページには、以下の機能が実装されています。</p>
    <div class="use-wrapper">
      <div class="how-to-search">
        <h3>検索機能</h3>
        <img src="http://reitaisai.com/rts19/wp-content/uploads/sites/29/2022/03/place-assign_search_1.gif"
             class="gifimg">
        <p>
          「スペース名」「スペース名かな」「サークル名」「サークル名かな」「ペンネーム」「ペンネームかな」を対象として検索できます。</p>
        <p>「検索」と書かれた入力欄に検索したい文字列を入力すると、該当するサークルが表示されます。</p>
        <p>※「サークル名かな」「ペンネームかな」で検索する際は、ひらがなまたは英数字をご入力ください。また、<u>英数字には全角・半角の区別があります。</u>
        </p>
      </div>
      <div class="how-to-sort">
        <h3>ソート機能</h3>
        <img src="http://reitaisai.com/rts19/wp-content/uploads/sites/29/2022/03/place-assign_sort_2.gif"
             class="gifimg">
        <p>「スペース名」「サークル名」「ペンネーム」の文字列を対象としてソートできます。</p>
        <p>
          ソートしたい基準の列の先頭を一度クリックすると、その列の読み仮名について昇順にソートされます。もう一度クリックすると、降順でソートされます。</p>
      </div>
    </div>
  </details>
  <div class="group">
    <label for="text4" id="textbox1"></label>
    <div class="password_box">
      <div class="password_inner">
        <input type="search" class="light-table-filter" data-table="order-table" id="text4">
        <p class="password_string">検索したい文字列を入力</p>
      </div>
    </div>
  </div>
  <div class="sortable-table">
    <table id="my-table1" class="sorttbl order-table">
      <thead>
      <tr>
        <th scope="col" data-id="space" sortable class="name">
          スペース
        </th>
        <th scope="col" data-id="circlename" sortable class="name">
          サークル名
        </th>
        <th scope="col" data-id="circlenamekana" sortable class="is-hidden">
          サークル名かな
        </th>
        <th scope="col" data-id="penname" sortable class="name">
          ペンネーム
        </th>
        <th scope="col" data-id="pennamekana" sortable class="is-hidden">
          ペンネームかな
        </th>
        <th scope="col" data-id="twitter" class="twitter">
          Twitter
        </th>
        <th scope="col" data-id="pixiv" class="pixiv">
          Pixiv
        </th>
        <th scope="col" data-id="web">
          Web
        </th>
      </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/@riversun/sortable-table/lib/sortable-table.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fuse.js/3.3.1/fuse.min.js"></script>
  </textarea>
</template>

<style scoped lang="scss">
textarea {
  font-size: 0.9rem;
  height: 150px;
}
</style>
