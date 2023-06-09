<template>
  <a-layout>
    <NavigationBar />
    <a-content>
      <div v-if="product">
        <a-row :gutter="16">
          <a-col :xs="24" :sm="12">
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
          <a-col :xs="24" :sm="12">
            <a-card>
              <a-card-meta :title="product.name">
                <template #description>
                  <p>{{ product.description }}</p>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </div>
      <div v-else>
        <p>Product not found</p>
      </div>
    </a-content>
  </a-layout>
</template>

<script>
import { defineComponent } from "vue";
import { Layout, Row, Col, Card, Icon } from "ant-design-vue";
import NavigationBar from "@/components/NavigationBar.vue";

export default defineComponent({
  name: "ProductPage",
  components: {
    "a-layout": Layout,
    "a-row": Row,
    "a-col": Col,
    "a-card": Card,
    "a-icon": Icon,
    NavigationBar,
  },
  props: {
    // 接收路由参数
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      product: null,
    };
  },
  created() {
    // 根据id获取产品数据
    this.product = getProductById(this.id);
  },
});

// 模拟获取产品数据的函数
function getProductById(id) {
  const products = [
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
  ];

  return products.find((product) => product.id === id);
}
</script>

<style scoped>
.price {
  font-weight: bold;
}
</style>