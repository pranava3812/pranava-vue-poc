import Chartist from 'chartist'
const PieChartStore = {
  data: {
    Chartist: Chartist,
    preferencesChart: {
      data: {
        labels: ['62%', '32%', '5%'],
        series: [62, 32, 5]
      },
      options: {}
    }
  },
  methods: {
    addEmailStats (data, $Chartist) {
      let chartData = {
        labels: data.map(da => da + '%'),
        series: data
      }
      $Chartist['Pie']('#div_912976142328', chartData, {})
    }
  }
}

export default PieChartStore
