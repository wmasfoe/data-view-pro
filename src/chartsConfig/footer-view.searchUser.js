export default {
  xAxis: {
    type: 'category',
    boundaryGap: false // 取消 图标和 dom 边缘之间的空白
  },
  yAxis: {
    show: false
  },
  series: [
    {
      type: 'line',
      data: [100, 200, 213, 123, 126, 264, 129, 231, 325, 153],
      areaStyle: {
        color: 'rgba(95,187,255, .5)'
      },
      lineStyle: {
        color: 'rgb(95,187,255)'
      },
      itemStyle: {
        opacity: 0
      },
      smooth: true
    }
  ],
  grid: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}
