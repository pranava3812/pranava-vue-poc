<template>
  <div class="card card-user">
    <div class="content">
      <!--POC: This is for giving inputs for the pie chart. sum should be 100-->
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
    <!--<div class="text-center">-->
      <!--<div class="row">-->
        <!--<div v-for="(info,index) in details" :class="getClasses(index)">-->
          <!--<h5>{{info.title}}-->
            <!--<br>-->
            <!--<small>{{info.subTitle}}</small>-->
          <!--</h5>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>
<script>
  /*POC: import the pie chart data from pie chart store*/
  import PieChartStore from 'stores/PieChartStore'
  export default {
    components: {
      PieChartStore
    },
    data () {
      return {
        /*POC: map the  v-model="stats.open" accordingly mentioned in the template above */
        stats: {
          open: PieChartStore.data.preferencesChart.data.series[0],
          bounce: PieChartStore.data.preferencesChart.data.series[1],
          unsubscribe: PieChartStore.data.preferencesChart.data.series[2]
        },
        // details: [
        //   {
        //     title: PieChartStore.data.preferencesChart.data.labels[0],
        //     subTitle: 'Open'
        //   },
        //   {
        //     title: PieChartStore.data.preferencesChart.data.labels[1],
        //     subTitle: 'Bounce'
        //   },
        //   {
        //     title: PieChartStore.data.preferencesChart.data.labels[2],
        //     subTitle: 'Unsubscribe'
        //   }
        // ]
      }
    },
    methods: {
      updateProfile () {
       /*POC: Get the values entered accordingly and update the pie chart*/
        let values = Object.values(this.stats)
        values = values.map(value => Number(value))
        /*POC: check if the sum of values entered is =100 or not or else throw alert*/
        if (values[0] + values[1] + values[2] !== 100) {
          alert('sum of values should be equal to 100')
          return
        }
        PieChartStore.methods.addEmailStats(values, this.$Chartist)
      },

      /*POC: No need as of now for poc*/
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
