const LineChartStore = {
  data: {
    salesChart: {
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        series: [
          [542, 543, 520, 680, 653],
          [230, 293, 380, 480, 503]
        ]
      },
      options: {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: '245px'
      }
    }
  },
  methods: {
    addSalesStats (data, $Chartist) {
      let chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        series: data
      }
      $Chartist['Line']('.ct-chart', chartData, {})
    }
  }
}

export default LineChartStore
