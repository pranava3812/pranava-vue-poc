<template>
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <chart-details>

        </chart-details>
        <!--<members-card>-->

        <!--</members-card>-->
      </div>
      <div class="col-lg-8 col-md-7">
        <chart-card @click="moveToDetails" :chart-data="preferencesChart.data"  chart-type="Pie">
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
  export default {
    components: {
      EditProfileForm,
      ChartDetails,
      MembersCard
    }
  }

</script>
<style>

</style>
