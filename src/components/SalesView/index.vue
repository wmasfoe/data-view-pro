<template>
  <div class="sales">
    <el-card>
      <template #header>
        <div class="menu_wrapper">
          <el-menu
            class="el_menu"
            :default-active="menuActiveIndex"
            mode="horizontal"
            @select="onMenuSelect"
          >
            <el-menu-item class="el_menu_item" index="1">销售额</el-menu-item>
            <el-menu-item class="el_menu_item" index="2">访问量</el-menu-item>
          </el-menu>
          <div class="el_menu_item menu_right">
            <el-radio-group
              size="small"
              class="radio_group"
              v-model="radioSelect"
            >
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
            </el-radio-group>

            <el-date-picker
              v-model="date"
              size="small"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="datePickerOptions"
            >
            </el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="sales_main">
          <div class="sales_chart" ref="chartDom"></div>
          <div class="sales_list">
            <div class="top_list_title">排行榜</div>
            <div class="top_list_main">
              <template v-for="(item, index) in topListData">
                <div :key="item.id" class="top_list_item">
                  <div
                    :class="['top_list_order', index < 3 ? 'circle_fill' : '']"
                    class="order"
                  >
                    {{ index + 1 }}
                  </div>
                  <div class="name_or_money">
                    <span>{{ item.name }}</span>
                    <span>{{ item.money | computedValue }}</span>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
import {
  defineComponent,
  toRefs,
  reactive,
  onMounted,
} from "@vue/composition-api";
import { getSalesTopList } from "@/api";
import { filterMixin } from "@/mixins";
import { useCharts } from "@/hooks";

export default defineComponent({
  name: "SalesView",
  mixins: [filterMixin],
  setup() {
    function getDate(time) {
      const end = new Date();
      const start = new Date();
      return {
        start: start.setTime(start.getTime() - time),
        end,
      };
    }
    const scopedState = reactive({
      menuActiveIndex: "1",
      radioSelect: "今日",
      date: null,
      datePickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const { start, end } = getDate(3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const { start, end } = getDate(3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const { start, end } = getDate(3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      topListData: [],
    });

    function onMenuSelect(index) {
      scopedState.menuActiveIndex = index;
    }

    const { chartDom, chartRef } = useCharts({
      title: {
        text: "年度销售额",
        textStyle: {
          fontSize: 12,
          color: "#666",
        },
        left: 25,
        top: 20,
      },
      xAxis: {
        type: "category",
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        axisTick: {
          alignWithLabel: true, // 设置坐标轴 data.item 刻度线和标签对齐
        },
        axisLine: {
          lineStyle: {
            color: "#999",
          },
        },
        axisLabel: {
          color: "#333",
        },
      },
      yAxis: {
        axisLine: {
          show: false, // 隐藏坐标轴
        },
        axisTick: {
          show: false, // 隐藏坐标轴刻度
        },
        splitLine: {
          // 分割线样式
          lineStyle: {
            type: "dotted", // 分割线为: - - - - - -
          },
        },
      },
      series: [
        {
          type: "bar",
          barWidth: "35%",
          data: [200, 100, 200, 210, 220, 200, 300, 240, 233, 214, 123, 123],
        },
      ],
      grid: {
        top: 70,
        left: 60,
        right: 60,
        bottom: 50,
      },
    });

    onMounted(async () => {
      const { state, data } = await getSalesTopList();
      if (state) {
        scopedState.topListData = data;
      }
    });

    return {
      ...toRefs(scopedState),
      chartDom,
      onMenuSelect,
    };
  },
});
</script>

<style lang="scss" scoped>
.sales {
  margin-top: 20px;

  .menu_wrapper {
    display: flex;
    position: relative;

    .el_menu {
      width: 100%;
      padding-left: 20px;
      &_item {
        height: 50px;
        line-height: 50px;
      }
    }

    .menu_right {
      position: absolute;
      right: 20px;
    }

    .radio_group {
      margin-right: 20px;
    }
  }

  .sales_main {
    height: 270px;
    display: flex;
    flex-direction: row;
    .sales_chart {
      width: 70%;
      height: 100%;
    }
    .sales_list {
      width: 30%;
      height: 100%;
      font-size: 12px;
      overflow: hidden;

      .top_list_title {
        color: #666;
        font-weight: 500;
        margin-top: 20px;
      }
      .top_list_main {
        margin-top: 15px;
        .top_list_item {
          display: flex;
          flex-direction: row;
          height: 20px;
          padding: 6px 20px 6px 0;

          .order {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            font-weight: 500;
            width: 20px;
            height: 20px;
          }
          .circle_fill {
            background: #000;
            color: #fff;
          }
          .name_or_money {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-left: 10px;
          }
        }
      }
    }
  }
}

/deep/ {
  .el-card__header {
    border-bottom: none;
    padding: 0;
  }
  .el-card__body {
    padding: 0 0 20px;
  }
}
</style>
