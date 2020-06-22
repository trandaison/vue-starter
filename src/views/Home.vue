<template>
  <Layout>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </Layout>
</template>

<script>
// @ is an alias to /src
import Layout from '@/views/layouts/Default.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    Layout,
    HelloWorld,
  },
};
</script>
