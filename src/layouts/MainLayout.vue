
<template>
  <div>
    <q-layout view="lHh lpr lFf"  class="shadow-2">
      <q-header elevated style="background-color: green">
        <q-toolbar>
          <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
          <q-avatar>
              <q-img
                src="icons/rrr.png"
                      :ratio="1"/>
          </q-avatar>

          <q-toolbar-title>SustentApp</q-toolbar-title>
          <q-tabs v-model="tab">
            <q-tab @click="$router.push('home')" label="Página Inicial" />
            <q-tab @click="$router.push('perfil')" label="Perfil" />
            <q-tab @click="$router.push('comunidade')" label="Comunidade" />
            <q-tab @click="$router.push('sobre-nos')" label="Sobre Nós" />
            <q-tab @click="$router.push('fale-conosco')" label="Fale Conosco" />
          </q-tabs>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar> -->
          <!-- <q-btn flat round dense icon="person" /> -->
        </q-toolbar>

      </q-header>

      <q-page-container>
        <router-view />
    </q-page-container>
    </q-layout>
  </div>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {
      tab: 'images',
      leftDrawerOpen: false
    }
  }
}
</script>
