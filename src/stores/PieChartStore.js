import Chartist from 'chartist'
const PieChartStore = {
  data: {
    Chartist: Chartist,
    preferencesChart: {
      data: {
        labels: ['62%', '32%', '6%'],
        series: [62, 32, 6]
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
      $Chartist['Pie']('.ct-chart', chartData, {})
    }
  }
}

export default PieChartStore
