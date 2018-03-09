import Chartist from 'chartist'
const PieChartStore = {
  data: {
    Chartist: Chartist,
    preferencesChart: {
      data: {
        /*POC: starting shown percentage*/
        labels: ['62%', '32%', '6%'],
        series: [62, 32, 6]
      },
      options: {}
    }
  },
  methods: {
    /*POC: Depending upon the input given, change the pie chart*/
    addEmailStats (data, $Chartist) {
      let chartData = {
        labels: data.map(da => da + '%'),
        series: data
      }
      $Chartist['Pie']('.ct-chart', chartData, {})
    }
  }
}

export default PieChartStore
