<script setup lang="ts"></script>

<template>
  <textarea rows="100" cols="100">
<script>
  const options = {
    threshold: 0.3,
    keys: [
      "circlename",
      "circlenamekana",
      "penname",
      "pennamekana"
    ]
  };
</script>
<script>
  var fuse = new Fuse(data, options);
  var result = fuse.search(text4); //検索クエリ
</script>
<script>
  const sortableTable = new SortableTable();
  // set table element
  sortableTable.setTable(document.querySelector('#my-table1'));

  // set callback function for table cell custom rendering
  sortableTable.setCellRenderer((col, row) => {
    const colValue = row[col.id]

    // cell-is-a-header
    if (col.isHeader) {
      if (typeof colValue !== 'undefined') {
        return `<th>${colValue}</th>`;
      }
      return '<th></th>';
    }
    // cell-is-not-a-header
    if (typeof colValue !== 'undefined') {
      if (col.id === 'twitter' && colValue != '') {
        return `<td><div class="sns"><a
    href="https://twitter.com/${colValue}"
    target="_blank"><img
    src="https://ji-work.com/test_rts/wp-content/uploads/2021/12/Logo-blue.svg"></a><a href="https://x.com/${colValue}"
    target="_blank"><img
    src="http://reitaisai.com/arts10/wp-content/uploads/sites/32/2023/09/logo-black.png"></a></div></td>`;
      } else if (col.id === 'pixiv' && colValue != '') {
        return `<td><div class="sns"><a href="https://www.pixiv.net/users/${colValue}" target="_blank"><img src="https://ji-work.com/test_rts/wp-content/uploads/2022/01/pixiv_icon-1.svg"></a></div></td>`;
      } else if (col.id === 'web' && colValue != '') {
        return `<td><div class="sns"><a href="${colValue}" target="_blank"><img src="https://ji-work.com/test_rts/wp-content/uploads/2022/01/web_icon.svg"></a></div></td>`;
      } else if (col.id === 'circlenamekana' || col.id === 'pennamekana') {
        return `<td class="is-hidden">${colValue}</td>`;
      } else {
        return `<td>${colValue}</td>`;
      }

    }
    return '<td></td>';
  });
  // set data to be sorted
  sortableTable.setData(data);


  // handling events
  sortableTable.events()
    .on('sort', (event) => {
      console.log(`[SortableTable#onSort]
    event.colId=${event.colId}
    event.sortDir=${event.sortDir}
    event.data=\n${JSON.stringify(event.data)}`);
    });

  // button handlers
  document.querySelector('#btnSortName')
    .addEventListener('click', () => {
      sortableTable.sort('name', 'toggle');//'asc','desc','toggle'
    });
  document.querySelector('#btnSortPrice')
    .addEventListener('click', () => {
      sortableTable.sort('price', 'asc');
    });
  document.querySelector('#btnSortWeight')
    .addEventListener('click', () => {
      sortableTable.sort('weight', 'desc');
    });
  document.querySelector('#btnReset')
    .addEventListener('click', () => {
      sortableTable.resetData();
    });


</script>

<script>
  (function (document) {
    'use strict';
    var LightTableFilter = (function (Arr) {
      var _input;

      function _onInputEvent(e) {
        _input = e.target;
        var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
        Arr.forEach.call(tables, function (table) {
          Arr.forEach.call(table.tBodies, function (tbody) {
            Arr.forEach.call(tbody.rows, _filter);
          });
        });
      }

      function _filter(row) {
        var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
        row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
      }

      return {
        init: function () {
          var inputs = document.getElementsByClassName('light-table-filter');
          Arr.forEach.call(inputs, function (input) {
            input.oninput = _onInputEvent;
          });
        }
      };
    })(Array.prototype);

    document.addEventListener('readystatechange', function () {
      if (document.readyState === 'complete') {
        LightTableFilter.init();
      }
    });

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
