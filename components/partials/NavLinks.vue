<template>
  <nav>
    <b-nav vertical>
      <b-nav-item :link-classes="linkClasses" to="/">
        <b-icon icon="command" class="mr-3 ml-1" />
        {{ $t('sidebar.linkActive') }}
      </b-nav-item>
      <b-nav-item :link-classes="linkClasses">
        <b-icon icon="folder2-open" class="mr-3 ml-1" />
        {{ $t('sidebar.normalLink') }}
      </b-nav-item>
      <b-nav-item :link-classes="linkClasses">
        <b-icon icon="gear" class="mr-3 ml-1" />
        {{ $t('sidebar.anotherLink') }}
      </b-nav-item>
    </b-nav>
  </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component({ name: 'NavLinks' })
export default class NavLinks extends Vue {
  @Prop() readonly linkClasses!: string | string[] | Record<string, boolean>;
}
</script>
