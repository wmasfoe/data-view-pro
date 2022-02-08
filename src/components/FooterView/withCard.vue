<template>
  <el-card>
    <template #header>
      <div class="header">
        <div class="title">{{ title }}</div>
        <div class="header_radio">
          <slot name="radioGroup"></slot>
        </div>
      </div>
    </template>
    <template>
      <div class="chartWrapper">
        <slot></slot>
      </div>
    </template>
  </el-card>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "WithCard",
  props: {
    title: {
      type: String,
      require: true,
    },
  },
  setup(props) {},
});
</script>

<style lang="scss" scoped>
.title {
  color: #333;
  font-size: 14px;
  font-weight: 500;
}
.header {
  position: relative;
  .header_radio {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
.chartWrapper {
  min-height: 452px;
}
</style>
