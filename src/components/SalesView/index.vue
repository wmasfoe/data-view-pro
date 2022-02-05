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
        <div class="sales_chart"></div>
        <div class="sales_list"></div>
      </template>
    </el-card>
  </div>
</template>

<script>
import { defineComponent, toRefs, reactive } from "@vue/composition-api";
export default defineComponent({
  name: "SalesView",
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
    });

    function onMenuSelect(index) {
      scopedState.menuActiveIndex = index;
    }

    return {
      ...toRefs(scopedState),
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

  .sales_chart {
    width: 70%;
    height: 100%;
  }
  .sales_list {
    width: 30%;
    height: 100%;
  }
}
</style>

<style lang="scss">
.el-card__header {
  border-bottom: none;
  padding: 0;
}
</style>
