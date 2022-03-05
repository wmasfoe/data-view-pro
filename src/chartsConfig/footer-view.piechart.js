export default {
  title: [
    {
      text: '品类分布',
      textStyle: {
        fontSize: '14px',
        color: '#666'
      },
      left: 20,
      top: 20
    },
    {
      text: '累计订单量',
      subtext: '333',
      // 偏移，使 text 位于环形图表中间
      x: '34%',
      y: '44%',
      textAlign: 'center',
      textStyle: {
        fontSize: '14px',
        color: '#999'
      },
      subtextStyle: {
        fontSize: '28px',
        color: '#333'
      }
    }
  ],
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  series: [
    {
      name: '品类分布',
      type: 'pie',
      data: [],
      label: {
        normal: {
          show: true,
          position: 'outer',
          formatter: function (params) {
            return params.data.legendname
          }
        }
      },
      labelLine: {
        length: '5px', // label 与 图例之间的连线长度
        length2: '3px',
        smooth: true
      },
      center: [
        // 圆心位置
        '35%',
        '50%'
      ],
      radius: [
        // 半径
        '45%',
        '60%'
      ],
      itemStyle: {
        borderWidth: 4, // 每项之间有间隔
        borderColor: '#fff'
      }
    }
  ],
  grid: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  legend: {
    type: 'scroll', // 高度超出可滚动
    orient: 'vertical', // 竖向排列
    height: 250,
    left: '70%',
    top: 'middle' // 居中
  },
  tooltip: {
    // 鼠标hover时展示
    trigger: 'item',
    formatter: function (params) {
      // hover 时的提示文本
      const toolTipText = `
            ${params.marker + params.data.legendname} <br />
            数量: ${params.data.value} <br />
            占比: ${params.data.percent}
          `

      return toolTipText
    }
  }
}
