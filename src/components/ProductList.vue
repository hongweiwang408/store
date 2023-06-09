<template>
  <div class="product-list">
    <a-row gutter="16">
      <a-col :xs="24" :sm="12" :md="8" :lg="6" v-for="product in products" :key="product.name">
        <a-card hoverable :cover="product.image" @click="goToProductPage(product)">
          <a-card-meta :title="product.name" :description="product.description">
            <template #avatar>
              <a-icon type="shopping-cart" />
            </template>
            <template #description>
              <span class="price">{{ product.price }}</span>
            </template>
          </a-card-meta>
          <a-button type="primary" @click="addToCart(product)">Add to Cart</a-button>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Row, Col, Card, Icon, Button } from "ant-design-vue";

export default defineComponent({
  name: "ProductList",
  components: {
    "a-row": Row,
    "a-col": Col,
    "a-card": Card,
    "a-icon": Icon,
    "a-button": Button,
  },
  data() {
    return {
      products: [
        {
          name: "Product 1",
          description: "This is product 1",
          price: "$10.00",
          image: "https://via.placeholder.com/400x400?text=Product+1",
        },
        {
          name: "Product 2",
          description: "This is product 2",
          price: "$20.00",
          image: "https://via.placeholder.com/400x400?text=Product+2",
        },
        {
          name: "Product 3",
          description: "This is product 3",
          price: "$30.00",
          image: "https://via.placeholder.com/400x400?text=Product+3",
        },
      ],
    };
  },
  methods: {
    addToCart(product) {
      // Add product to cart
      //当被点击时候，shoppingcartpage.vue中的对应货物的increasequantity方法会被调用
      this.$emit("add-to-cart", product);

      this.$message.success(`Added ${product.name} to cart`);
    },
    goToProductPage(product) {

      this.$router.push("/product/" + product.id);
      // this.$router.push({ name: "ProductPage", params: { id: product.id } });
    },
  },
});
</script>

<style scoped>
.price {
  font-weight: bold;
}

.a-card-meta-description {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.a-card-meta-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #1890ff;
  background-color: #f0f2f5;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 16px;
}
</style>