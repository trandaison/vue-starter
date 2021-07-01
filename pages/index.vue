<template>
  <h1>{{ $t('welcome') }}</h1>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ name: 'Index', layout: 'dashboard', middleware: 'auth' })
export default class Index extends Vue {}
</script>
