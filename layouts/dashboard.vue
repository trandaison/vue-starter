<template>
  <div id="wrapper" class="bg-light">
    <TheTopbar />
    <TheSidebar />
    <div class="content-page">
      <div class="content">
        <Nuxt />
      </div>
      <TheFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TheTopbar from '~/components/partials/TheTopbar.vue';
import TheFooter from '~/components/partials/TheFooter.vue';
import TheSidebar from '~/components/partials/TheSidebar.vue';

@Component({
  name: 'DashboardLayout',
  components: { TheTopbar, TheFooter, TheSidebar },
})
export default class DashboardLayout extends Vue {}
</script>

<style lang="scss" scoped>
.content-page {
  margin-left: 240px;
  overflow: hidden;
  margin-top: 56px;
}

.content {
  padding: 0 12px;
  min-height: calc(100vh - 97px);
}
</style>
