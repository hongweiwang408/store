<template>
  <a-layout>
    <NavigationBar />
    <a-content>
      <a-row :gutter="16">
        <a-col :xs="24" :sm="12" :md="8" :lg="6" v-for="product in products" :key="product.id">
          <a-card :cover="product.image">
            <a-card-meta :title="product.name" :description="product.description">
              <template #avatar>
                <a-icon type="shopping-cart" />
              </template>
              <template #description>
                <span class="price">{{ product.price }}</span>
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </a-content>
  </a-layout>
</template>

<script>
import { defineComponent } from "vue";
import { Layout, Row, Col, Card, Icon } from "ant-design-vue";
import NavigationBar from "@/components/NavigationBar.vue";

export default defineComponent({
  name: "ProductsPage",
  components: {
    "a-layout": Layout,
    "a-row": Row,
    "a-col": Col,
    "a-card": Card,
    "a-icon": Icon,
    NavigationBar,
  },
  data() {
    return {
      products: [
        {
          id: "1",
          name: "Product 1",
          description: "This is product 1",
          price: "$10.00",
          image: "https://via.placeholder.com/400x400?text=Product+1",
        },
        {
          id: "2",
          name: "Product 2",
          description: "This is product 2",
          price: "$20.00",
          image: "https://via.placeholder.com/400x400?text=Product+2",
        },
        {
          id: "3",
          name: "Product 3",
          description: "This is product 3",
          price: "$30.00",
          image: "https://via.placeholder.com/400x400?text=Product+3",
        },
      ],
    };
  },
});
</script>

<style scoped>
.price {
  font-weight: bold;
}
</style>