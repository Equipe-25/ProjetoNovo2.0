<template class="template">
<div class="window-width row fullscreen flex-center">
    <div class="my-card">
            <div class="q-gutter-y-md">
              <h4 class="h4">Redefinir Senha</h4>
              <q-input v-model="senha" dense outlined type="password" color="green-5" label="Senha Antiga"/>
              <q-input v-model="senhaAtual" dense outlined type="password" color="green-5" label="Senha Atual"/>
              <div class="row justify-between">
                <div class="q-ma-xs">
                  <q-btn outline rounded color="green-5" label="Voltar" @click="$router.push('login')"/>
                </div>
                <div class="q-ma-xs">
                  <q-btn rounded color="green" class="avanca glossy" label="Redefinir Senha" @click="$router.push('home')"/>
                </div>
              </div>
              <div>
          </div>
    </div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      senha: '',
      senhaAtual: ''
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
