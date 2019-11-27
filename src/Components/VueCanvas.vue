<template>
  <div>
    <canvas ref="canvas"></canvas>
    <slot />
  </div>
</template>

<script>
export default {
  name: "VueCanvas",
  data() {
    return {
      canvas: null,
      thing: {
        ctx: null
      }
    };
  },
  methods: {
    forceUpdate() {
      this.$forceUpdate();
    }
  },
  provide() {
    return {
      globalCanvas: this.thing,
      rerender: this.forceUpdate
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.thing.ctx = this.canvas.getContext("2d");
  }
};
</script>