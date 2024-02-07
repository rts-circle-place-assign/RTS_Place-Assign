<script setup lang="ts"></script>

<template>
  <textarea rows="100" cols="100">
    <script>
  const sortableTable = new SortableTable()
  // set table element
  sortableTable.setTable(document.querySelector('#my-table1'))

  // set callback function for table cell custom rendering
  sortableTable.setCellRenderer((col, row) => {
    const colValue = row[col.id]

    // cell-is-a-header
    if (col.isHeader) {
      if (typeof colValue !== 'undefined') {
        return `<th>${colValue}</th>`
      }
      return '<th></th>'
    }
    // cell-is-not-a-header
    if (typeof colValue !== 'undefined') {
      if (col.id === 'twitter' && colValue != '') {
        return `<td><a href="https://twitter.com/${colValue}" target="_blank"><img src="http://reitaisai.com/rts19/wp-content/uploads/sites/29/2022/02/Logo-blue.svg"></a></td>`
      } else if (col.id === 'pixiv' && colValue != '') {
        return `<td><a href="https://www.pixiv.net/users/${colValue}" target="_blank"><img src="http://reitaisai.com/rts19/wp-content/uploads/sites/29/2022/02/pixiv_icon.svg"></a></td>`
      } else if (col.id === 'web' && colValue != '') {
        return `<td><a href="${colValue}" target="_blank"><img src="http://reitaisai.com/rts19/wp-content/uploads/sites/29/2022/02/web_icon.svg"></a></td>`
      } else if (col.id === 'circlenamekana' || col.id === 'pennamekana') {
        return `<td class="is-hidden">${colValue}</td>`
      } else {
        return `<td>${colValue}</td>`
      }
    }
    return '<td></td>'
  })
  // set data to be sorted
  sortableTable.setData(data)

  // handling events
  sortableTable.events().on('sort', event => {
    console.log(`[SortableTable#onSort]
        event.colId=${event.colId}
        event.sortDir=${event.sortDir}
        event.data=\n${JSON.stringify(event.data)}`)
  })

  // button handlers
  document.querySelector('#btnSortName').addEventListener('click', () => {
    sortableTable.sort('name', 'toggle') //'asc','desc','toggle'
  })
  document.querySelector('#btnSortPrice').addEventListener('click', () => {
    sortableTable.sort('price', 'asc')
  })
  document.querySelector('#btnSortWeight').addEventListener('click', () => {
    sortableTable.sort('weight', 'desc')
  })
  document.querySelector('#btnReset').addEventListener('click', () => {
    sortableTable.resetData()
  })
</script>

<script>
  ;(function (document) {
    'use strict'
    var LightTableFilter = (function (Arr) {
      var _input
      function _onInputEvent(e) {
        _input = e.target
        var tables = document.getElementsByClassName(
                _input.getAttribute('data-table')
        )
        Arr.forEach.call(tables, function (table) {
          Arr.forEach.call(table.tBodies, function (tbody) {
            Arr.forEach.call(tbody.rows, _filter)
          })
        })
      }

      function _filter(row) {
        var text = row.textContent.toLowerCase(),
                val = _input.value.toLowerCase()
        row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row'
      }

      return {
        init: function () {
          var inputs = document.getElementsByClassName('light-table-filter')
          Arr.forEach.call(inputs, function (input) {
            input.oninput = _onInputEvent
          })
        },
      }
    })(Array.prototype)

    document.addEventListener('readystatechange', function () {
      if (document.readyState === 'complete') {
        LightTableFilter.init()
      }
    })
  })(document)
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-color/2.1.2/jquery.color.js"></script>
<script>
  $('#text4')
          .focus(function () {
            $('.password_box').animate(
                    {
                      borderTopColor: '#4F240A',
                      borderLeftColor: '#4F240A',
                      borderRightColor: '#4F240A4',
                      borderBottomColor: '#4F240A',
                    },
                    200
            )
          })
          .blur(function () {
            $('.password_box').animate(
                    {
                      borderTopColor: '#d3d3d3',
                      borderLeftColor: '#d3d3d3',
                      borderRightColor: '#d3d3d3',
                      borderBottomColor: '#d3d3d3',
                    },
                    200
            )
          })
</script>

<script>
  (function(d) {
    var config = {
              kitId: 'ngg8tel',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
</script>

  </textarea>
</template>

<style scoped lang="scss">
textarea {
  font-size: 0.9rem;
  height: 150px;
}
</style>
