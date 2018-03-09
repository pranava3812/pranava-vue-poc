<template>
    <div class="row">
      <div class="col-lg-3 col-md-4">
        <h1>Pie chart</h1>
        <p> This is pie chart which have a feature of changing upon inputs given by the user. This is the exercise given
        for vue js with chart js. Please enter the inputs that are summable to 100. </p>

      </div>
      <div class="col-lg-4 col-md-5">
        <chart-details>

        </chart-details>
        <!--<members-card>-->

        <!--</members-card>-->
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
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import ChartDetails from './UserProfile/ChartDetails.vue'
  import MembersCard from './UserProfile/MembersCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import PieChartStore from 'stores/PieChartStore'
  export default {
    components: {
      EditProfileForm,
      ChartDetails,
      MembersCard,
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
