<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    link: 'https://awesome.quasar.dev'
  }
]

export default {
  name: 'Login',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
