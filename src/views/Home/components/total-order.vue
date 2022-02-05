<template>
  <common-card :title="'累计订单数'" :value="'12346634'">
    <template>
      <div
        ref="chart"
        class="chart"
        :style="{ height: '100%', width: '100%' }"
      ></div>
    </template>
    <template #total>
      <span>昨日订单量</span>
      <span class="bold">{{ "300000" | computedValue }}</span>
    </template>
  </common-card>
</template>

<script>
import CommonCard from "@/components/common/Card";
import { filterMixin } from "@/mixins";
export default {
  name: "TotalOrder",
  mixins: [filterMixin],
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
          type: "category",
          show: false,
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: "line",
            data: [620, 300, 200, 356, 456, 296, 234, 467, 234, 457],
            areaStyle: {
              color: "red",
            },
            lineStyle: {
              width: 0,
            },
            itemStyle: {
              opacity: 0,
            },
            smooth: true,
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
