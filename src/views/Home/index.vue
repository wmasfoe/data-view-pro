<template>
  <div class="home">
    <TopView />
    <SalesView />
    <MapView />
    <FooterView />
  </div>
</template>

<script>
import TopView from "@/components/TopView";
import FooterView from "@/components/FooterView";
import MapView from "@/components/MapView";
import SalesView from "@/components/SalesView";
export default {
  name: "Home",
  components: {
    TopView,
    FooterView,
    MapView,
    SalesView,
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: #eee;
}
</style>
