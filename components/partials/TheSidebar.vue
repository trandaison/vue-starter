<template>
  <b-sidebar
    id="sidebar-no-header"
    :visible="visible"
    aria-labelledby="sidebar-no-header-title"
    sidebar-class="border-right"
    bg-variant="dark"
    text-variant="light"
    no-header
    shadow
    no-close-on-route-change
    width="240px"
    z-index="10"
    v-on="$listeners"
  >
    <template #default>
      <div class="p-3">
        <h4 id="sidebar-no-header-title">{{ $t('sidebar.customHeader') }}</h4>
      </div>
      <NavLinks class="mb-3" link-classes="text-light" />
    </template>
  </b-sidebar>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import NavLinks from '~/components/partials/NavLinks.vue';

const SM_BREAK_POINT = 991;

@Component({ name: 'TheSidebar', components: { NavLinks } })
export default class TheSidebar extends Vue {
  private visible = process.server ? true : window.innerWidth > SM_BREAK_POINT;
  private delayId: any = null;

  beforeMount() {
    this.updateVisible();
  }

  mounted() {
    window.addEventListener('resize', this.pageResizeHandler);
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.pageResizeHandler);
  }

  pageResizeHandler() {
    clearTimeout(this.delayId);
    this.delayId = setTimeout(this.updateVisible, 250);
  }

  updateVisible() {
    this.visible = window.innerWidth > SM_BREAK_POINT;
    this.$emit('change', this.visible);
  }
}
</script>
