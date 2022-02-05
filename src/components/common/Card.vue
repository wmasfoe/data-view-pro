<template>
  <div class="common-card">
    <el-card class="box-card">
      <div class="title">{{ title }}</div>
      <div class="value">{{ value | computedValue }}</div>
      <div class="chart">
        <slot></slot>
      </div>
      <div class="line"></div>
      <div class="total">
        <slot name="total">{{ total | computedValue }}</slot>
      </div>
    </el-card>
  </div>
</template>

<script>
import { filterMixin } from "@/mixins";
export default {
  name: "CommonCard",
  mixins: [filterMixin],
  props: {
    title: {
      type: String,
      default: "累计销售额",
    },
    value: {
      type: String,
      default: "61549673",
    },
    total: {
      type: String,
      default: "昨日销售额 2000",
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  font-size: 12px;
  color: #999;
}
.value {
  font-size: 25px;
  color: #000;
  margin-top: 5px;
  letter-spacing: 1px;
}
.chart {
  width: 100%;
  height: 50px;
}
.line {
  margin: 10px 0;
  border-top: 1px solid #eee;
}
.total {
  color: #666;
  font-size: 12px;
}
</style>

<style lang="scss">
.bold {
  color: #333;
  margin-left: 5px;
  font-weight: 700;
}
.increase {
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    border: 3px solid;
    border-color: transparent transparent red transparent;
    margin: 0 0 3px 5px;
  }
}
.decrease {
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    border: 3px solid;
    border-color: green transparent transparent transparent;
    margin: 3px 0 0 5px;
  }
}

.chart {
  height: 100%;
  width: 100%;
}
</style>
