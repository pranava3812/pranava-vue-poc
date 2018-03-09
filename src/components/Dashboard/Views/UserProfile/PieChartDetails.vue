<template>
  <div class="card card-user">
    <div class="content">
      <form>
        <div class="form-group">
          <label for="exampleOpen">Open</label>
          <input v-model="stats.open" type="number" min="0" max="100" class="form-control" id="exampleOpen" placeholder="Enter Open">
        </div>

        <div class="form-group">
          <label for="exampleBounce">Bounce</label>
          <input v-model="stats.bounce" type="number" min="0" max="100" class="form-control" id="exampleBounce" placeholder="Enter Bounce">
        </div>

        <div class="form-group">
          <label for="exampleUnsubscribe">Unsubscribe</label>
          <input v-model="stats.unsubscribe" type="number" min="0" max="100" class="form-control" id="exampleUnsubscribe" placeholder="Enter Unsubscribe">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="updateProfile">Submit</button>
      </form>
    </div>
    <hr>
  </div>
</template>
<script>
  import PieChartStore from 'stores/PieChartStore'
  export default {
    components: {
      PieChartStore
    },
    data () {
      return {
        stats: {
          open: PieChartStore.data.preferencesChart.data.series[0],
          bounce: PieChartStore.data.preferencesChart.data.series[1],
          unsubscribe: PieChartStore.data.preferencesChart.data.series[2]
        }
      }
    },
    methods: {
      updateProfile () {
        console.log('Your data: ' + JSON.stringify(this.stats))
        let values = Object.values(this.stats)
        values = values.map(value => Number(value))
        if (values[0] + values[1] + values[2] !== 100) {
          alert('sum of values should be equal to 100')
          return
        }
        PieChartStore.methods.addEmailStats(values, this.$Chartist)
      },
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      }
    }
  }

</script>
<style>

</style>
