
<template>
  <div>
    <q-layout view="lHh lpr lFf"  class="shadow-2 bg-cor-fundo">
      <q-header elevated class="bg-cor">
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
            <q-tab @click="$router.push('dicas')" label="Dicas" />
            <q-tab @click="$router.push('sobre-nos')" label="Sobre Nós" />
            <q-tab @click="$router.push('fale-conosco')" label="Fale Conosco" />
            <q-tab @click="$router.push('configuracoes')" label="Configurações" />
          </q-tabs>
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

<style scoped>
.bg-cor{
  background-color: rgba(36, 150, 36, 0.933)
}
.bg-cor-fundo{
  background-color: rgba(72, 52, 30, 0.124)
}
</style>
