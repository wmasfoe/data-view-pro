<template>
  <common-card :title="'今日交易用户数'" :value="'87123124'">
    <template>
      <div ref="chart" class="chart"></div>
    </template>
    <template #total>
      <span>退货率</span>
      <span class="bold">{{ "5.74%" }}</span>
    </template>
  </common-card>
</template>

<script>
import CommonCard from "@/components/common/Card";
export default {
  name: "TotalTrade",
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
        color: "skyblue",
        xAxis: {
          type: "category",
          data: [
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
          ],
          show: false,
        },
        yAxis: {
          show: false,
        },

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
          backgroundColor: "rgba(50, 50, 50, 0.7)",
          textStyle: {
            color: "#fff",
          },
          // extraCssText: 'width: 100px',
          position: function (pos, params, el, elRect, size) {
            var obj = { top: -40 };
            obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
            return obj;
          },
        },
        series: [
          {
            type: "bar",
            data: [620, 300, 200, 356, 456, 296, 234, 467, 234, 457],
            barWidth: "60%",
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

<style lang="scss" scoped></style>
