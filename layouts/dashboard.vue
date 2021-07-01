<template>
  <div id="wrapper" class="bg-light">
    <TheTopbar />
    <TheSidebar
      :class="{ hidden: !sidebarVisible }"
      @change="onSidebarChanged"
    />
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
export default class DashboardLayout extends Vue {
  private sidebarVisible: boolean = true;

  onSidebarChanged(visible: boolean) {
    this.sidebarVisible = visible;
  }
}
</script>

<style lang="scss" scoped>
.content-page {
  margin-left: 240px;
  overflow: hidden;
  margin-top: 56px;
  transition: margin 0.3s ease;
}

.content {
  padding: 0 12px;
  min-height: calc(100vh - 97px);
}

.b-sidebar-outer {
  &.hidden {
    & + .content-page {
      margin-left: 0;
    }
  }
}
</style>
