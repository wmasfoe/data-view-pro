import { ref, onMounted, nextTick } from "@vue/composition-api";
import * as echarts from "echarts";

export default function useCharts(options) {
  const chartDom = ref(null);
  const chartRef = ref(null);

  onMounted(async () => {
    await nextTick();
    chartRef.value = echarts.init(chartDom.value);

    chartRef.value.setOption(options);
  });

  return {
    chartDom,
    chartRef,
  };
}
