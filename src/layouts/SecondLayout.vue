
<template>
  <div>
    <q-layout view="lHh lpr lFf"  class="shadow-2">
      <q-page-container>
        <router-view />
    </q-page-container>
    </q-layout>
  </div>
</template>

<script>

export default {
  name: 'MainLayout'
  // components: {},
  // data () {
  //   return {
  //     tab: 'images',
  //     leftDrawerOpen: false
  //   }
  // }
}
</script>
