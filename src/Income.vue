<template>
  <div>
    <table>
      <income-data></income-data>
    </table>
  </div>
</template>

<script>
import IncomeData from './components/IncomeData'

export default {
  components: {
    'income-data': IncomeData
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  methods: {
    clear () {
      this.msg = ''
    }
  }
}
</script>
