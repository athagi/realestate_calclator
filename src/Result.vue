<template>
  <div>
    <button @click="calc()">calc</button>
    <table>
      <div id="result">
        <tr v-for="i in items" v-bind:key="i.view_name">
          <td>{{ i.view_name }}</td>
          <td>
            <input type="text" v-bind:class="i.name" value="0">{{ i.unit }}
          </td>
        </tr>
  </div>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {view_name: '実効年間収入（含む空室リスク）', name: 'income', unit: '円'},
        {view_name: '運営費（年）', name: 'ops_cost', unit: '円'},
        {view_name: 'NOI', name: 'ops_cost', unit: '円'},
        {view_name: '年間返済額', name: 'repayment', unit: '円'},
        {view_name: '税引き前キャッシュフロー', name: 'cashflow', unit: '円'},
        {view_name: '総収益率FCR（％）', name: 'fcr', unit: '%'},
        {view_name: 'ローン定数(k)', name: 'loan_const', unit: '%'},
        {view_name: 'イールドギャップ(YG)', name: 'yield_gap', unit: '%'}
      ]
    }
  },
  methods: {
    calc () {
      var element = document.getElementById('input-data')
      console.log(element)
    }
  }
}
</script>
