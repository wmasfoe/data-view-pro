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
                <div class="chart"></div>
              </div>
              <div class="chart_wrapper">
                <div class="chart_search chart_title">搜索量</div>
                <div class="chart_search_number chart_data">
                  {{ search_number | computedValue }}
                </div>
                <div class="chart"></div>
              </div>
            </div>
            <div class="list">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
              </el-table>
              <el-pagination></el-pagination>
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
          <template></template>
        </Card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "@vue/composition-api";
import { filterMixin } from "@/mixins";
import Card from "./withCard";
export default defineComponent({
  name: "FooterView",
  mixins: [filterMixin],
  components: {
    Card,
  },
  setup() {
    const scopedState = reactive({
      tableData: [],
      classSelected: "品类",
      search_user_num: 123456,
      search_number: 123456,
    });
    return {
      ...toRefs(scopedState),
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
    width: 50%;
    min-height: 50px;
  }
}
</style>
