<template>
  <a-carousel autoplay>
    <a-carousel-slide v-for="(image, index) in images" :key="index">
      <a-image :src="image.src" :alt="image.alt" />
    </a-carousel-slide>
  </a-carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, CarouselSlide, Image } from "ant-design-vue";

export default defineComponent({
  name: "ImageCarousel",
  components: {
    "a-carousel": Carousel,
    "a-carousel-slide": CarouselSlide,
    "a-image": Image,
  },
  data() {
    return {
      images: [
        {
          src: require("../assets/logo.png"),
          alt: "Slide 1",
        },
        {
          src: require("../assets/logo.png"),
          alt: "Slide 2",
        },
        {
          src: require("../assets/logo.png"),
          alt: "Slide 3",
        },
      ],
    };
  },
});
</script>

<style scoped>
/* 由于使用了Ant Design Vue的组件，因此不需要再添加额外的样式 */
</style>