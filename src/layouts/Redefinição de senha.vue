<template class="template">
<div class="window-width row fullscreen flex-center">
    <div class="my-card">
            <div class="q-gutter-y-md">
              <h4 class="h4">Redefinir Senha</h4>

              <q-input filled v-model="senhaAn" outlined color="green-5" label="Senha Antiga"/>
              <q-input filled v-model="senhaAt" outlined color="green-5" label="Senha Atual"/>

              <q-btn outline rounded color="brown-5" label="Cancelar" @click="$router.replace('layouts/Login.vue')"/>
              <q-btn outline rounded color="brown-5" background-color="#A8711D" class="avanca" label="Avançar" @click="$router.replace('layouts/Feed.vue')"/>

              <div>
          </div>
    </div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      password: ''
    }
  }
}
</script>
<style lang="sass" scoped>
.h4
  font-family: Roboto
  font-style: normal
  font-weight: 900
  font-size: 36px
  line-height: 42px
  color: #50C730

.Avanca

  left: 10px

</style>
