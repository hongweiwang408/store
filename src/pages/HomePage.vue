<template>
  <a-layout>
    <NavigationBar />
    <a-content>
      <ImageCarousel />
      <ProductList />
      <a-button type="primary" class="cart-button" shape="round" size="large" @click="goToShoppingCart">购物车</a-button>
    </a-content>
  </a-layout>
</template>

<script>
import { defineComponent } from "vue";
import { Layout, Button } from "ant-design-vue";
import NavigationBar from "@/components/NavigationBar.vue";
import ProductList from "@/components/ProductList.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    "a-layout": Layout,
    "a-content": Layout.Content,
    "a-button": Button,
    NavigationBar,
    ProductList,
    ImageCarousel,
  },
  methods: {
    goToShoppingCart() {
      this.$router.push("/shopping-cart");
    },
  },
});
</script>

<style scoped>
.home-page {
  background-color: #f5f5f5;
}

.cart-button {
  margin-top: 20px;
}
</style>