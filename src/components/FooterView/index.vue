<template>
  <div class="footer_view_wrapper">
    <el-row :gutter="20">
      <el-col :span="12">
        <Card title="关键词搜索">
          <template>
            <div class="chart_box_wrapper">
              <div class="chart_wrapper">
                <div class="chart_search_user chart_title">搜索用户数</div>
                <div class="chart_search_user_number chart_data">
                  {{ search_user_num | computedValue }}
                </div>
                <div class="chart" ref="searchUserChart"></div>
              </div>
              <div class="chart_wrapper">
                <div class="chart_search chart_title">搜索量</div>
                <div class="chart_search_number chart_data">
                  {{ search_number | computedValue }}
                </div>
                <div class="chart" ref="searchTotalChart"></div>
              </div>
            </div>
            <div class="list">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="order" label="排行" width="180">
                </el-table-column>
                <el-table-column prop="kw" label="关键词" width="180">
                </el-table-column>
                <el-table-column prop="totalSearch" label="总搜索量">
                </el-table-column>
                <el-table-column prop="userSearch" label="用户搜索量">
                </el-table-column>
                <el-table-column prop="click" label="点击率" width="180">
                </el-table-column>
              </el-table>
              <el-pagination
                background
                class="pagination"
                layout="prev, pager, next"
                :page-size="pageSize"
                :page-count="currentPage"
                :total="tableDataTotal"
                @prev-click="(pageNum) => pageChange(pageNum)"
                @next-click="(pageNum) => pageChange(pageNum)"
                @current-change="(pageNum) => pageChange(pageNum)"
              ></el-pagination>
            </div>
          </template>
        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="分类销售排行">
          <template #radioGroup>
            <el-radio-group size="small" v-model="classSelected">
              <el-radio-button label="品类" />
              <el-radio-button label="商品" />
            </el-radio-group>
          </template>
          <template>
            <div class="chart"></div>
          </template>
        </Card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  watchEffect,
} from "@vue/composition-api";
import { filterMixin } from "@/mixins";
import { useCharts } from "@/hooks";
import Card from "./withCard";
import { getKWTableData } from "@/api";

export default defineComponent({
  name: "FooterView",
  mixins: [filterMixin],
  components: {
    Card,
  },
  setup() {
    const scopedState = reactive({
      tableData: [],
      tableDataTotal: 0,
      currentPage: 1,
      pageSize: 4,
      classSelected: "品类",
      search_user_num: 123456,
      search_number: 123456,
    });

    const { chartDom: searchUserChart } = useCharts({
      xAxis: {
        type: "category",
        boundaryGap: false, // 取消 图标和 dom 边缘之间的空白
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: "line",
          data: [100, 200, 213, 123, 126, 264, 129, 231, 325, 153],
          areaStyle: {
            color: "rgba(95,187,255, .5)",
          },
          lineStyle: {
            color: "rgb(95,187,255)",
          },
          itemStyle: {
            opacity: 0,
          },
          smooth: true,
        },
      ],
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    });

    const { chartDom: searchTotalChart } = useCharts({
      xAxis: {
        type: "category",
        boundaryGap: false, // 取消 图标和 dom 边缘之间的空白
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: "line",
          data: [100, 200, 213, 123, 126, 264, 129, 231, 325, 153],
          areaStyle: {
            color: "rgba(95,187,255, .5)",
          },
          lineStyle: {
            color: "rgb(95,187,255)",
          },
          itemStyle: {
            opacity: 0,
          },
          smooth: true, // 平滑的折线
        },
      ],
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    });

    function pageChange(num) {
      scopedState.currentPage = num;
    }

    async function initState() {
      const {
        state,
        data: { total, list },
      } = await getKWTableData({
        currentPage: scopedState.currentPage,
        pageSize: scopedState.pageSize,
      });
      if (state) {
        scopedState.tableData = list;
        scopedState.tableDataTotal = total;
      }
    }

    watchEffect(() => {
      initState();
    });

    return {
      ...toRefs(scopedState),
      searchUserChart,
      searchTotalChart,
      pageChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.footer_view_wrapper {
  margin-top: 20px;
  width: 100%;
}
.chart_box_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  margin-top: 20px;
  .chart_wrapper {
    width: 100%;
    padding: 0 10px;
  }
  .chart_title {
    color: #999;
    font-size: 14px;
  }
  .chart_data {
    font-size: 22px;
    color: #333;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .chart {
    height: 50px;
  }
}
.list {
  margin-top: 20px;
  padding: 0 20px 20px;
}
.pagination {
  margin-top: 20px;
  text-align: right;
}
</style>
