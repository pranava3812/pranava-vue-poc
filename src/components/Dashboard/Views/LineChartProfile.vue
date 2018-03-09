<template>
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <h1>Description</h1>
        <p> This is the description for the feature of charts changing upon inputs given by the user.
          <br/>This is the exercise given for vue js with chart js. <br/>
          Please enter the inputs as 5 numbers as comma separated values . </p>
      </div>
      <div class="col-lg-4 col-md-5">
        <line-chart-details>
        </line-chart-details>
      </div>
      <div class="col-lg-8 col-md-7">
        <chart-card :chart-data="activityChart.data" :chart-options="activityChart.options" >
          <h4 class="title" slot="title">2015 Sales</h4>
          <span slot="subTitle"> All products including Taxes</span>
          <span slot="footer">
            <i class="ti-check"></i> Data information certified</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Tesla Model S
            <i class="fa fa-circle text-warning"></i> BMW 5 Series
          </div>
        </chart-card>
      </div>
    </div>
</template>
<script>
  import LineChartDetails from './UserProfile/LineChartDetails.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import LineChartStore from 'stores/LineChartStore'
  export default {
    components: {
      LineChartDetails,
      ChartCard,
      LineChartStore
    },
    data () {
      return {
        activityChart: LineChartStore.data.salesChart
      }
    }
  }

</script>
<style>

</style>
