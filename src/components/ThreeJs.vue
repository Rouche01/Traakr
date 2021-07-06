<template>
  <div class="container" ref="container"></div>
</template>

<script>
import { onMounted, ref } from "vue";
import { renderGlobe } from "../utils/globe3d";

export default {
  name: "ThreeJs",
  setup() {
    const container = ref(null);
    onMounted(() => {
      console.log(container.value);
      renderGlobe(container.value);
    });

    return {
      container,
    };
  },
};
</script>

<style scoped>
.container {
  height: 400px;
}
</style>
