<template>
  <common-card :title="'累计销售额'" :value="'￥12346634'">
    <template>
      <div class="change increase">
        <span>日同比</span>
        <span class="bold">105.25%</span>
      </div>
      <div class="change decrease">
        <span>月同比</span>
        <span class="bold">105.25%</span>
      </div>
    </template>
    <template #total>
      <span>昨日销售额</span>
      <span class="bold">{{ "￥300000" | computedValue }}</span>
    </template>
  </common-card>
</template>

<script>
import CommonCard from "@/components/common/Card";
import { filterMixin } from "@/mixins";
export default {
  name: "TotalSales",
  mixins: [filterMixin],
  components: {
    CommonCard,
  },
};
</script>

<style lang="scss" scoped>
.change {
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 3px;
  color: #666;
}
</style>
