<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <total-sales />
      </el-col>
      <el-col :span="6">
        <total-order />
      </el-col>
      <el-col :span="6">
        <total-trade />
      </el-col>
      <el-col :span="6">
        <total-user />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from "@/views/Home/components/total-sales";
import TotalOrder from "@/views/Home/components/total-order";
import TotalTrade from "@/views/Home/components/total-trade";
import TotalUser from "@/views/Home/components/total-user";
export default {
  name: "TopView",
  components: {
    TotalSales,
    TotalOrder,
    TotalTrade,
    TotalUser,
  },
};
</script>

<style scoped></style>
