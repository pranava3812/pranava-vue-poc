<template>
  <div class="card card-user">
    <div class="content">
      <form>
        <div class="form-group">
          <label for="exampleOpen">Tesla Model S</label>
          <textarea v-model="stats.tesla" class="form-control" id="exampleOpen" placeholder="Enter Open"></textarea>
        </div>

        <div class="form-group">
          <label for="exampleBounce">BMW 5 Series</label>
          <textarea v-model="stats.bmw" class="form-control" id="exampleBounce" placeholder="Enter Bounce"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="updateProfile">Submit</button>
      </form>
    </div>
    <hr>
  </div>
</template>
<script>
  import LineChartStore from 'stores/LineChartStore'
  export default {
    components: {
      LineChartStore
    },
    data () {
      return {
        stats: {
          tesla: LineChartStore.data.salesChart.data.series[0],
          bmw: LineChartStore.data.salesChart.data.series[1]
        }
      }
    },
    methods: {
      updateProfile () {
        console.log('Your data: ' + JSON.stringify(this.stats))
        let teslaStats = (this.stats.tesla.constructor === Array ? this.stats.tesla.join(',').split(',')
          : this.stats.tesla.split(','))
        teslaStats = teslaStats.map(teslaStat => Number(teslaStat))
        let bmwStats = (this.stats.bmw.constructor === Array ? this.stats.bmw.join(',').split(',')
          : this.stats.bmw.split(','))
        bmwStats = bmwStats.map(bmwStat => Number(bmwStat))
        if (teslaStats.length !== 5 || bmwStats.length !== 5) {
          alert('Please enter 5 comma separated values')
          return
        }

        let values = []
        values.push(teslaStats)
        values.push(bmwStats)
        LineChartStore.methods.addSalesStats(values, this.$Chartist)
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
