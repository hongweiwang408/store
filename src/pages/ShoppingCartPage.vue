<template>
  <a-layout>
    <NavigationBar />
    <a-content>
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>
          <a href="/">Home</a>
        </a-breadcrumb-item>
        <a-breadcrumb-item>Shopping Cart</a-breadcrumb-item>
      </a-breadcrumb>
      <a-table :columns="columns" :dataSource="cart" rowKey="name">
        <template #quantity="{ text, record }">
          <a-space>
            <a-button @click="decrementQuantity(record)">-</a-button>
            {{ text }}
            <a-button @click="incrementQuantity(record)">+</a-button>
          </a-space>
        </template>
        <template #total="{ text }">
          {{ text }}
        </template>
        <template #action="{ record }">
          <a-button type="danger" @click="removeFromCart(record)">Remove</a-button>
        </template>
        <template #footer>
          <a-row>
            <a-col :span="3">Total:</a-col>
            <a-col :span="3">{{ total }}</a-col>
            <a-col :span="18"></a-col>
          </a-row>
        </template>
      </a-table>
    </a-content>
  </a-layout>
</template>

<script>
import { defineComponent } from "vue";
import { Layout, Breadcrumb, Table, Button, Space, Row, Col } from "ant-design-vue";
import NavigationBar from "@/components/NavigationBar.vue";

export default defineComponent({
  name: "ShoppingCartPage",
  components: {
    "a-layout": Layout,
    "a-content": Layout.Content,
    "a-breadcrumb": Breadcrumb,
    "a-breadcrumb-item": Breadcrumb.Item,
    "a-table": Table,
    "a-button": Button,
    "a-space": Space,
    "a-row": Row,
    "a-col": Col,
    NavigationBar,
  },
  
  data() {
    return {
      cart: [
        {
          name: "Product 1",
          price: "$10.00",
          quantity: 1,
        },
        {
          name: "Product 2",
          price: "$20.00",
          quantity: 2,
        },
        {
          name: "Product 3",
          price: "$30.00",
          quantity: 3,
        },
      ],
      columns: [
        {
          title: "Product",
          dataIndex: "name",
        },
        {
          title: "Price",
          dataIndex: "price",
        },
        {
          title: "Quantity",
          dataIndex: "quantity",
          scopedSlots: { customRender: "quantity" },
        },
        {
          title: "Total",
          dataIndex: "total",
          scopedSlots: { customRender: "total" },
        },
        {
          title: "",
          dataIndex: "",
          scopedSlots: { customRender: "action" },
        },
      ],
    };
  },
  computed: {
    total() {
      return this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    incrementQuantity(item) {
      item.quantity++;
    },
    decrementQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    removeFromCart(item) {
      const index = this.cart.indexOf(item);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
  },
});
</script>

<style scoped>
.shopping-cart {
  margin-bottom: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #333;
  color: #fff;
}

th,
td {
  padding: 0.5rem;
  text-align: left;
  border: 1px solid #ccc;
}

tfoot td {
  text-align: right;
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