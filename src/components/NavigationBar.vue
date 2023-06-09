<template>
  <a-layout-header>
    <a-menu mode="horizontal" theme="dark">
      <a-menu-item key="home">
        <router-link to="/">Home</router-link>
      </a-menu-item>
      <a-menu-item key="products">
        <router-link to="/products">Products</router-link>
      </a-menu-item>
      <a-menu-item key="about">
        <router-link to="/about">About Us</router-link>
      </a-menu-item>
      <a-menu-item key="contact">
        <router-link to="/contact">Contact Us</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
import { defineComponent } from "vue";
import { Layout, Menu } from "ant-design-vue";

export default defineComponent({
  name: "NavigationBar",
  components: {
    "a-layout-header": Layout.Header,
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
  },
});
</script>

<style scoped>
/* 由于使用了Ant Design Vue的组件，因此不需要再添加额外的样式 */
</style>