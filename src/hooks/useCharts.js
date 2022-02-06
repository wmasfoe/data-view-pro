import { ref, onMounted, nextTick } from "@vue/composition-api";
import * as echarts from "echarts";

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

    chartRef.value.setOption(options);
  });

  return {
    chartDom,
    chartRef,
  };
}
