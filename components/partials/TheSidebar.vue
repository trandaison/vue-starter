<template>
  <b-sidebar
    id="sidebar-no-header"
    aria-labelledby="sidebar-no-header-title"
    sidebar-class="border-right"
    bg-variant="dark"
    text-variant="light"
    visible
    no-header
    shadow
    width="240px"
    z-index="10"
  >
    <template #default>
      <div class="p-3">
        <h4 id="sidebar-no-header-title">Custom header</h4>
      </div>
      <nav class="mb-3">
        <b-nav vertical>
          <b-nav-item active link-classes="text-light">
            <b-icon icon="command" class="mr-3 ml-1" />
            Active
          </b-nav-item>
          <b-nav-item link-classes="text-light">
            <b-icon icon="folder2-open" class="mr-3 ml-1" />
            Link
          </b-nav-item>
          <b-nav-item link-classes="text-light">
            <b-icon icon="gear" class="mr-3 ml-1" />
            Another Link
          </b-nav-item>
        </b-nav>
      </nav>
    </template>
  </b-sidebar>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ name: 'TheSidebar' })
export default class TheSidebar extends Vue {}
</script>
