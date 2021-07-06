<template>
  <div class="three-js">
    <h1>This is for learning Three JS.</h1>
    <ThreeJs />
  </div>
</template>

<script>
import ThreeJs from "../components/ThreeJs.vue";

export default {
  name: "Test",
  components: {
    ThreeJs,
  },
};
</script>
