<template>
  <div class="home"></div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "Home",
  setup() {
    const state = ref(null);

    return {
      state,
    };
  },
});
</script>
