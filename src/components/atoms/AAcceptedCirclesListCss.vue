<script setup lang="ts"></script>

<template>
  <textarea rows="100" cols="100">
.is-hidden{
display:none;
}
.container{
white-space: normal;
}
.sortable-table{
overflow: scroll;
}
.is-hidden{
display:none;
}
.twitter,.pixiv{
width: 5rem;
}
table img{
display:block;
margin: auto auto;
height: 1.2rem !important;
}
@media (min-width: 961px) {
  table img{
    height: 1.5rem !important;
}
}
#my-table1 td,th{
padding: .3rem;
}
@media (min-width: 961px) {
.sortable-table{
    overflow: visible;
}
}
input{
height:2.5rem;
margin-bottom: 1rem !important;
width: 20vw;
-webkit-box-shadow: 0px 1px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: 0px 1px rgba(255, 255, 255, 0.5);
  box-shadow: 0px 1px rgba(255, 255, 255, 0.5);
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
input:focus-visible{
border:solid 1px #EEA34A;
}
@media (max-width: 960px) {
input {
    width: 30vw;
}
}
@media (max-width: 640px) {
input {
    width: 50vw;
}
}
.flex{
display:flex;
}

details summary{
  list-style: none;
  position: relative;
  cursor: pointer;
  width: fit-content;
   margin: auto;
}
details summary::-webkit-details-marker {
  display: none;
}
details summary[data-v-2b304856]::after {
  position: absolute;
  top: 50%;
  right: 30px;
  transition: transform 0.5s;
  transform: translateY(-50%);
}
.gifimg{
  height: 100%;
}
.questionmark{
  width: 1.5rem;
}
.how-to-use{
  padding: .5rem;
  background-color: #f7eed4;
  width: fit-content;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 1.3rem;
  transition: 0.8s;
}
.how-to-use:hover{
  transition: 0.8s;
  background-color: #fbf7ea;
}
.how-to-search h3 , .how-to-sort h3{
  font-size: 1.4rem;
  font-weight: bold;
}

@media (min-width: 961px){
  .use-wrapper{
    display: flex;
  }
  .how-to-search{
    padding-right: .8rem;
    border-right: 1px solid #000;
    width: 140%;
  }
  .how-to-sort{
    padding-left: .8rem;
  }
}

@media (max-width: 960px){
  .how-to-search{
    padding-bottom: .5rem;
    border-bottom: 1px solid #000;
  }
}
details{
  margin-bottom: 2rem !important;
}
.use-wrapper{
  background-color: #f7eed4;
  border-radius: 10px;
  padding: .8rem;
}
.how-to-use h3{
  font-size: 1.5rem;
}

/* オープン時にアニメーションを設定 */
details[open] .use-wrapper {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  0% {
    opacity: 0; /* 透明 */
    transform: translateY(-10px); /* 上から表示 */
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

#inputbox1{
    padding: 10px 15px; /*ボックスを大きくする*/
    font-size: 1.2rem;
    border-radius: 3px; /*ボックス角の丸み*/
    box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
    border: 2px solid #ff9900;
    z-index: 10;
    outline: 0;
}
#inputbox1:focus{
    box-shadow: 0 0 5px 0 rgba(255,153,0,1);
    border: 2px solid #FFF !important;
    outline: 0;
}

.password_box{
    display: flex; /*アイコン、テキストボックスを調整する*/
    align-items: center; /*アイコン、テキストボックスを縦方向の中心に*/
    justify-content: center; /*アイコン、テキストボックスを横方向の中心に*/
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-bottom: 1.5rem;
}

.password_inner{
    width: 100%;
    height: 100%;
    background-color: transparent; /*.password_boxの枠線お角一部被るため透明に*/
    position: relative;
}

#text4{
    position: absolute;
    z-index: 1; /*.password_stringよりも上に配置*/
    height: 100%;
    width: 100%;
    top: 0; left: 0; bottom: 0; right: 0;
    border: none; /*枠線非表示*/
    outline: none; /*フォーカス時の枠線非表示*/
    padding: 0 10px;
    font-size: 16px;
    background-color: transparent; /*後ろの.password_stringを見せるため*/
    box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
}

.password_string{
    position: absolute;
    height: 100%;
    width: 15rem; /*文字列分の長さ*/
    top: 0; left: 0; bottom: 0; right: 0;
    padding-left: 10px; /*position: absolute;でのmarginは親要素はみ出す*/
    font-size: 1.2rem;
    line-height: 50px; /*文字列を縦方向にmiddleに見せるため*/
    background-color: transparent;
    color: #80868b;
    box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
    transition: all 0.2s;
    -webkit-transition: all 0.2s;
}
#text4:focus + .password_string{
    color: #000;
    font-size: .9rem;
    line-height: 10px;
    width: 12rem;
    height: 1rem;
    padding: 0 2px;
    transform:translate3d(5px, -6px, 0);
}
.text-center[data-v-7f9932e0] {
  text-align: center;
}
.button[data-v-c8190d06] {
  padding: 1em;
  display: block;
  width: 20vw;
  text-align: center;
  margin: 1rem auto;
}
@media (max-width: 960px) {
.button[data-v-c8190d06] {
    width: 50%;
    justify-content: center;
}
}
@media (max-width: 640px) {
.button[data-v-c8190d06] {
    width: 80%;
}
}
.post_content .content-wrapper a {
  color: #0366d6;
    text-decoration: none;
    transition: 0.5s;
}
.post_content .content-wrapper a:hover {
  opacity: 0.8;
}
.additional[data-v-61371668] {
  text-align: center;
  padding: 1rem;
  margin: 0.5rem;
  border: 3px solid #4f240a;
}
.post_content .content-wrapper a[data-v-4cf143a5] {
    color: #fff;
    text-decoration: none;
    text-align: center;
    display: block;
    padding: 1em;
    width: 20vw;
}
.indent {
  text-indent: 1rem;
}
  </textarea>
</template>

<style scoped lang="scss">
textarea {
  font-size: 0.9rem;
  height: 150px;
}
</style>
