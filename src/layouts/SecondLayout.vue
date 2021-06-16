
<template>
  <div>
    <q-layout view="lHh lpr lFf"  class="shadow-2 bg-cor-fundo">
      <q-page-container>
        <router-view />
    </q-page-container>
    </q-layout>
  </div>
</template>

<script>

export default {
  name: 'MainLayout'
}
</script>

<style scoped>
.bg-cor-fundo{
  background-color: rgba(72, 52, 30, 0.124)
}
</style>
