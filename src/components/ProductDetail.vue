<template>
  <div class="product-detail">
    <img :src="product.image" :alt="product.name" />
    <div class="details">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <span class="price">{{ product.price }}</span>
      <button @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      product: {
        name: "Product 1",
        description: "This is product 1",
        price: "$10.00",
        image: "https://via.placeholder.com/400x400?text=Product+1",
      },
    };
  },
  methods: {
    addToCart(product) {
      // Add product to cart
    },
  },
};
</script>

<style scoped>
.product-detail {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

img {
  display: block;
  margin-right: 2rem;
  max-width: 50%;
  height: auto;
}

.details {
  flex: 1;
}

h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.price {
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
</style>