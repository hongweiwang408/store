<template>
    <NavigationBar />
    <div class="about-us">
      <div class="hero-image">
        <h1>关于我们</h1>
        <p>我们是一家致力于为客户提供最优质商品和服务的商城。</p>
      </div>
      <div class="content">
        <h2>我们的使命</h2>
        <p>我们的使命是为客户提供最好的购物体验，并确保他们对我们的服务感到满意。</p>
        <h2>我们的历史</h2>
        <p>我们成立于2010年，最初只是一个小型的线下商店。随着时间的推移，我们逐渐扩大了规模，并于2015年开始了在线销售。</p>
        <h2>我们的团队</h2>
        <p>我们的团队由经验丰富的行业专家组成，他们致力于为客户提供最高质量的服务。</p>
      </div>
    </div>
  </template>
  
  <script>
  import NavigationBar from "@/components/NavigationBar.vue";
   export default {
    name: 'AboutUs',
    components: {
    NavigationBar
    },
    }; 
</script>

  <style scoped>
  .about-us {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .hero-image {
    background-image: url('../assets/logo.png');
    background-size: cover;
    color: #fff;
    text-align: center;
    padding: 100px 20px;
  }
  
  .content {
    max-width: 800px;
    margin: 50px auto;
    text-align: justify;
  }
  
  h2 {
    margin-top: 50px;
  }
  </style>