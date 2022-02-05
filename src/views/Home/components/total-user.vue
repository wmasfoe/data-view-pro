<template>
  <common-card :title="'累计用户数'" :value="'4564254123'">
    <template>
      <div ref="chart" class="chart"></div>
    </template>
    <template #total>
      <div class="total-wrapper">
        <div class="decrease">
          <span>日同比</span>
          <span class="bold">{{ "86.00%" }}</span>
        </div>
        <div class="mouth increase">
          <span>月同比</span>
          <span class="bold">{{ "132.50%" }}</span>
        </div>
      </div>
    </template>
  </common-card>
</template>

<script>
import CommonCard from "@/components/common/Card";
export default {
  name: "TotalUser",
  components: {
    CommonCard,
  },
  async mounted() {
    await this.$nextTick();
    this.initCharts();
  },
  methods: {
    initCharts() {
      const myChart = this.$echarts.init(this.$refs.chart);

      myChart.setOption({
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: {
          type: "category",
          show: false,
        },
        series: [
          {
            type: "bar",
            stack: "总量", // 使用 stack 将两条线归为一类
            data: [200],
            barWidth: 10,
          },
          {
            type: "bar",
            stack: "总量", // 使用 stack 将两条线归为一类
            data: [300],
          },
          {
            type: "custom",
            data: [200], // 和第一个 bar 保持一致
            renderItem: (params, api) => {
              // api.value 可以拿到 data 中的值，value(0) 相当于 data[0]
              const value = api.value(0);
              // 计算坐标
              const endPoint = api.coord([value], 0);

              return {
                type: "group",
                position: endPoint,
                children: [
                  {
                    type: "path",
                    shape: {
                      // 这里的 d 是 svg 标签 path 属性对象中的 d 属性，绘制出来的就是 svg 图标
                      d: "M878.592 250.88q29.696 0 48.128 11.264t24.576 29.696 0 41.472-26.624 45.568q-82.944 92.16-159.744 180.224t-148.48 164.864q-19.456 20.48-45.568 31.744t-53.76 11.776-53.248-8.704-43.008-28.672q-39.936-44.032-82.944-90.112l-88.064-92.16q-43.008-46.08-85.504-90.624t-79.36-86.528q-17.408-19.456-22.528-40.448t1.024-38.4 23.552-28.672 45.056-11.264q35.84 0 98.816-0.512t137.728-0.512l153.6 0 150.528 0 125.952 0 79.872 0z", // svg标签 中 d 属性
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: "cover",
                    },
                    style: {
                      fill: "blue", // 填充色
                    },
                  },
                  {
                    type: "path",
                    shape: {
                      d: "M896 768l-80.896 0-131.072 0-155.648 0-159.744 0-141.312 0-100.352 0q-24.576 0-39.936-11.264t-20.992-28.672-0.512-38.4 22.528-41.472q37.888-40.96 79.872-86.016t86.016-91.136l86.016-92.16q44.032-46.08 83.968-89.088 18.432-19.456 44.032-28.672t52.736-8.704 53.248 11.776 45.568 31.744q70.656 73.728 147.456 159.744t160.768 184.32q19.456 23.552 26.624 46.592t2.56 40.96-20.48 29.184-40.448 11.264z", // svg标签 中 d 属性
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: "cover",
                    },
                    style: {
                      fill: "blue", // 填充色
                    },
                  },
                ],
              };
            },
          },
        ],
        grid: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.total-wrapper {
  display: flex;
  flex-direction: row;
  .mouth {
    margin-left: 10px;
  }
}
</style>
