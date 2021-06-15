<template class="template">
  <div class="window-width row fullscreen flex-center">
    <div class="my-card">
      <div v-if="!enviado" class="q-gutter-y-md">
        <h4 class="h4">Esqueci minha senha :(</h4>
          <q-input v-model="email" dense outlined color="green-5" label="Digite seu email"/>
            <div class="row justify-between">
              <div class="q-ma-xs">
                <q-btn outline rounded color="green-5" label="Voltar" @click="$router.push('login')"/>
              </div>
              <div class="q-ma-xs">
                <q-btn rounded color="green" class="avanca glossy" label="Recuperar Senha" @click="recuperar"/>
              </div>
            </div>
          <div>
        </div>
      </div>
      <div v-else>
        <h4 class="h4">Um link de recuperação foi enviado para seu email :)</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      enviado: false
    }
  },
  methods: {
    recuperar () {
      this.enviado = true
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
