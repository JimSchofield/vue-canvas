<template>
  <div @click="makeRect">
    <VueCanvas>
      <cvs-image
        :url="this.image"
      ></cvs-image>
      <CvsRectangle
        v-for="(rectangle, key) in rectangles"
        :key="key"
        :x="rectangle.x"
        :y="rectangle.y"
        :width="rectangle.width"
        :height="rectangle.height"
      ></CvsRectangle>
      <CvsCircle
        v-for="(circle, key) in circles"
        :key="`circle${key}`"
        :x="circle.x"
        :y="circle.y"
        :radius="circle.radius"
      ></CvsCircle>
    </VueCanvas>
  </div>
</template>

<script>
import VueCanvas from "./Components/VueCanvas.vue";
import CvsRectangle from "./Components/Shapes/Rectangle";
import CvsCircle from "./Components/Shapes/Circle";
import CvsImage from './Components/Shapes/Image';

import ImageExample from './assets/2009-Coyote-Yosemite.jpg';

export default {
  name: "App",
  components: {
    CvsCircle,
    CvsImage,
    CvsRectangle,
    VueCanvas,
  },
  data() {
    return {
      image: ImageExample,
      rectangles: [],
      circles: [
        {
          x: 100,
          y: 100,
          radius: 20
        },
        {
          x: 200,
          y: 200,
          radius: 50
        }
      ]
    };
  },
  methods: {
    makeRect(event) {
      this.rectangles.push({
        x: event.clientX - 5,
        y: event.clientY - 5,
        width: 10,
        height: 10
      });
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
canvas {
  display: block;
}
</style>