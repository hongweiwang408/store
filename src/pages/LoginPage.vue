<template>
  <div class="login">
    <a-row justify="center">
      <a-col :span="12">
        <a-card title="Login" class="card-wide">
          <a-form @submit.prevent="login">
            <a-form-item label="Username" class="item-wide">
              <a-input v-model="username" required class="input-wide" />
            </a-form-item>
            <a-form-item label="Password" class="item-wide">
              <a-input-password v-model="password" required class="input-wide" />
            </a-form-item>
            <a-form-item class="item-wide">
              <a-button type="primary" html-type="submit" class="button-wide">Login</a-button>
            </a-form-item>
          </a-form>
          <p>Don't have an account? <router-link to="/register">Register</router-link></p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Form, Input, Button, Card, Row, Col } from "ant-design-vue";

export default defineComponent({
  name: "LoginPage",
  components: {
    "a-form": Form,
    "a-form-item": Form.Item,
    "a-input": Input,
    "a-input-password": Input.Password,
    "a-button": Button,
    "a-card": Card,
    "a-row": Row,
    "a-col": Col,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // 点击登录按钮跳转到首页
      this.$router.push("/");
    },
  },
});
</script>

<style scoped>
.item-wide .ant-form-item-control-input {
  width: 100%;
}
</style>