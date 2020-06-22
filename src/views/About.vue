<template>
  <Layout>
    <div class="about">
      <h1>This is an about page</h1>
      <p>You are authenticated. You can see the secret page!</p>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/views/layouts/Default.vue';

export default {
  name: 'Home',
  components: {
    Layout,
  },
};
</script>
