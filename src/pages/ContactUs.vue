<template>
    <NavigationBar />
    <div class="contact-us">
      <h1>联系我们</h1>
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">姓名</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="email">电子邮件</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="message">留言</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit">提交</button>
      </form>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import NavigationBar from '@/components/NavigationBar.vue';
  export default defineComponent({
    name: 'ContactUs',
    components: {
      NavigationBar,
    },
    setup() {
      const name = ref('');
      const email = ref('');
      const message = ref('');
  
      const submitForm = () => {
        // 提交表单的逻辑
      };
  
      return {
        name,
        email,
        message,
        submitForm,
      };
    },
  });
  </script>
  
  <style scoped>
  .contact-us {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .contact-form {
    max-width: 600px;
    width: 100%;
    margin-top: 50px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button[type="submit"] {
    background-color: #1890ff;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button[type="submit"]:hover {
    background-color: #40a9ff;
  }
  </style>