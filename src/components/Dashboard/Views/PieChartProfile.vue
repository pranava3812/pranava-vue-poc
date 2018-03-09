<template>
  <div class="row">
    <div class="col-lg-12 col-md-12">
      <h1>Description</h1>
      <p> This is the description for the feature of charts changing upon inputs given by the user.
        <br/>This is the exercise given for vue js with chart js. <br/> Please enter the inputs that are summable to 100. </p>
    </div>
    <div class="col-lg-4 col-md-5">
      <pie-chart-details>
      </pie-chart-details>
    </div>
    <div class="col-lg-8 col-md-7">
      <chart-card :chart-data="preferencesChart.data"  chart-type="Pie">
        <h4 class="title" slot="title">Email Statistics</h4>
        <span slot="subTitle"> Last campaign performance</span>
        <span slot="footer">
            <i class="ti-timer"></i> Campaign set 2 days ago</span>
        <div slot="legend">
          <i class="fa fa-circle text-info"></i> Open
          <i class="fa fa-circle text-danger"></i> Bounce
          <i class="fa fa-circle text-warning"></i> Unsubscribe
        </div>
      </chart-card>
    </div>
  </div>
</template>
<script>
  import PieChartDetails from './UserProfile/PieChartDetails.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import PieChartStore from 'stores/PieChartStore'
  export default {
    components: {
      PieChartDetails,
      ChartCard,
      PieChartStore
    },
    data () {
      return {
        preferencesChart: PieChartStore.data.preferencesChart
      }
    }
  }

</script>
<style>

</style>
