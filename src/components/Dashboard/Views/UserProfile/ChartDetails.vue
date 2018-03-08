<template>
  <div class="card card-user">
    <div class="content">
      <form>
        <div class="form-group">
          <label for="exampleOpen">Open</label>
          <input type="number" class="form-control" id="exampleOpen" placeholder="Enter Open">
        </div>

        <div class="form-group">
          <label for="exampleBounce">Bounce</label>
          <input type="number" class="form-control" id="exampleBounce" placeholder="Enter Bounce">
        </div>

        <div class="form-group">
          <label for="exampleUnsubscribe">Unsubscribe</label>
          <input type="number" class="form-control" id="exampleUnsubscribe" placeholder="Enter Unsubscribe">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div v-for="(info,index) in details" :class="getClasses(index)">
          <h5>{{info.title}}
            <br>
            <small>{{info.subTitle}}</small>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        details: [
          {
            title: '62%',
            subTitle: 'open'
          },
          {
            title: '6%',
            subTitle: 'Bounce'
          },
          {
            title: '32%',
            subTitle: 'Unsubscribe'
          }
        ]
      }
    },
    methods: {
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
