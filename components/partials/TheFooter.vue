<template>
  <footer class="footer border-top">
    <div class="py-2 px-4 text-center text-muted">
      &copy; {{ year }}. All Rights Reserved.
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ name: 'TheFooter' })
export default class TheFooter extends Vue {
  get year() {
    return new Date().getFullYear();
  }
}
</script>

<style scoped>
.footer {
  bottom: 0;
}
</style>
