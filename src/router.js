import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../src/pages/HomePage.vue";
import ShoppingCart from "../src/pages/ShoppingCartPage.vue";
import LoginPage from "../src/pages/LoginPage.vue";
import ProductPage from "../src/pages/ProductPage.vue";
import ProductsPage from "../src/pages/ProductsPage.vue";
import AboutUs from "../src/pages/AboutUs.vue";
import ContactUs from "../src/pages/ContactUs.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/shopping-cart",
    name: "ShoppingCart",
    component: ShoppingCart,
  },
  {
    path:"/login",
    name:"LoginPage",
    component: LoginPage,
  },
  {
    path:"/product/:id",
    name:"ProductPage",
    component: ProductPage,
  },
  {
    path:"/products",
    name:"ProductsPage",
    component:ProductsPage,
  },
  {
    path:"/about",
    name:"AboutUs",
    component:AboutUs,
  },
  {
    path:"/contact",
    name:"ContactUs",
    component:ContactUs,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;