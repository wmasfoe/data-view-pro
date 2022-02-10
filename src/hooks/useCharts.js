import { ref, onMounted, nextTick } from "@vue/composition-api";
import * as echarts from "echarts";

const chartMap = new Map();

/**
  使用这个 hook 对暴露的 chartDom 进行 ref 绑定，传入 echarts 配置项，会自动生成图表；
  如需使用图表实例请 await nextTick 之后使用暴露出的 chartRef
 */
export default function useCharts(options) {
  const chartDom = ref(null);
  const chartRef = ref(null);

  onMounted(async () => {
    await nextTick();
    chartRef.value = echarts.init(chartDom.value);

    // 记录图表与 options 之间的关系
    chartMap.set(chartRef.value.id, options);

    chartRef.value.setOption(options);
  });

  // 更新 data 并刷新 chart
  function refreshChartForData(chartRef, data = []) {
    // todo 现在只能更改一个 series 里面的 data，需要支持 series 里面所有 data 的替换 now
    if (!Array.isArray(data)) {
      throw new TypeError(`data ${data} is not Array`);
    }
    const id = chartRef.value.id;
    if (chartMap.has(id)) {
      // 取出配置
      const chartOptions = chartMap.get(id);
      chartOptions.series[0].data = data;
      chartRef.value.setOption(chartOptions);
    } else {
      throw new Error(`chart id ${id} not exist`);
    }
  }

  return {
    chartDom,
    chartRef,
    refreshChartForData,
  };
}
