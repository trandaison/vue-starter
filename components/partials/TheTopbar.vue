<template>
  <b-navbar
    toggleable="lg"
    variant="light"
    fixed="top"
    class="border-bottom bg-white"
  >
    <b-navbar-brand href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        height="29px"
        width="29px"
      >
        <g fill-rule="nonzero" transform="translate(0 50)" fill="none">
          <path
            d="M227.92099 83.45116l-13.6889 24.10141-46.8148-82.44693L23.7037 278.17052h97.3037c0 13.31084 10.61252 24.10142 23.70371 24.10142H23.70371c-8.46771 0-16.29145-4.59601-20.5246-12.05272-4.23315-7.4567-4.23272-16.64312.00114-24.0994L146.89383 13.05492c4.23415-7.45738 12.0596-12.05138 20.5284-12.05138 8.46878 0 16.29423 4.594 20.52839 12.05138l39.97037 70.39623z"
            fill="#2F495E"
          />
          <path
            d="M331.6642 266.11981l-90.05432-158.56724-13.6889-24.10141-13.68888 24.10141-90.04445 158.56724c-4.23385 7.45629-4.23428 16.64271-.00113 24.09941 4.23314 7.4567 12.05689 12.05272 20.5246 12.05272h166.4c8.46946 0 16.29644-4.591 20.532-12.04837 4.23555-7.45736 4.23606-16.64592.00132-24.10376h.01976zM144.7111 278.17052L227.921 131.65399l83.19012 146.51653h-166.4z"
            fill="#2F495E"
          />
          <path
            d="M396.04938 290.22123c-4.23344 7.45557-12.05656 12.0507-20.52345 12.0507H311.1111c13.0912 0 23.7037-10.79057 23.7037-24.10141h40.66173L260.09877 74.98553l-18.4889 32.56704L227.921 83.45116l11.65432-20.51634c4.23416-7.45738 12.0596-12.05138 20.5284-12.05138 8.46879 0 16.29423 4.594 20.52839 12.05138l115.41728 203.185c4.23426 7.457 4.23426 16.6444 0 24.1014z"
            fill="#2F495E"
          />
        </g>
      </svg>
      <span class="ml-4 brand-gradient">Nuxt Stater</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form class="py-2 py-lg-0">
          <b-input-group size="sm" class="mr-sm-2">
            <b-form-input :placeholder="$t('headerBar.searchPlaceholder')" />
            <b-input-group-append>
              <b-button size="sm" text="Button" variant="dark">
                <b-icon icon="search"></b-icon>
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-nav-form>

        <b-nav-item-dropdown :key="$i18n.locale" right class="mx-lg-2">
          <template #text>
            <b-icon icon="globe"></b-icon>
          </template>

          <b-dropdown-item
            v-for="locale in $i18n.locales"
            ref="langMenu"
            :key="locale"
            :to="switchLocalePath(locale)"
            :disabled="$i18n.locale === locale"
          >
            {{ $t(`headerBar.lang.${locale}`) }}
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown v-if="$auth.loggedIn" right>
          <template #button-content>
            <img
              :src="$auth.user.avatar"
              alt="User's avatar"
              class="rounded-circle border"
              height="28px"
            />
            <em class="mx-1">{{ $auth.user.name }}</em>
          </template>
          <b-dropdown-item href="#">
            <b-icon icon="person" class="mr-2"></b-icon>
            {{ $t('headerBar.profileLink') }}
          </b-dropdown-item>
          <b-dropdown-item href="#" @click="logout">
            <b-icon icon="power" class="mr-2"></b-icon>
            {{ $t('headerBar.logoutLink') }}
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <NavLinks class="d-lg-none" />
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import NavLinks from '~/components/partials/NavLinks.vue';

@Component({ name: 'TheTopbar', components: { NavLinks } })
export default class TheTopbar extends Vue {
  async logout() {
    this.$nuxt.$loading.start();
    await this.$auth.logout();
    this.$router.push('/login');
  }
}
</script>
