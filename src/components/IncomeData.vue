<template>
  <div id="input-data">
    <tr v-for="i in items" :key="i.view_name">
      <td>{{ i.view_name }}</td>
      <td>
        <input type="text" v-bind:class="i.name" value="0">{{ i.unit }}
      </td>
    </tr>
  </div>
</template>

<script>

export default {
  data () {
    return {
      items: [
        {view_name: '家賃収入（月）', name: 'income', unit: '円'},
        {view_name: '空室リスク（％）', name: 'empty_room_rate', unit: '%'},
        {view_name: '運営費（月）', name: 'ops_cost', unit: '円'},
        {view_name: 'ローン返済（月）', name: 'loan_month', unit: '円'},
        {view_name: '借入総額', name: 'loan_total', unit: '円'},
        {view_name: '利率', name: 'rate', unit: '%'}
      ]
    }
  }
}
</script>
