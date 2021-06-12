<template class="template">
<div class="window-width row fullscreen flex-center">
    <div class="my-card">
            <div class="q-gutter-y-md">
              <h4 class="h4">Cadastre-se</h4>
              <q-input filled  v-model="nome"  class="botoes" outlined color="green-5" label="Nome Completo" :dense="dense"/>
              <q-input filled v-model="email"  outlined color="green-5" type="email" label="E-mail válido" />
              <q-input filled v-model="telefone"  outlined color="green-5" type="tel" label="Contato"/>
              <q-input filled v-model="endereco" outlined color="green-5" label="Endereço" />
              <q-input filled v-model="complement" autogrow outlined color="green-5" label="Complemento"/>
              <q-input filled v-model="password" :type="isPwd ? 'password' : 'text'" outlined color="green-5" label="Senha">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                    @click="isPwd = !isPwd"/>
                </template>
              </q-input>
              <q-input filled v-model="confirma" type="password" outlined color="green-5" label="Confirmar senha"/>

              <q-btn outline rounded color="brown-5" label="Cancelar" @click="$router.replace('layouts/Login.vue')"/>
              <q-btn outline rounded color="brown-5" background-color="#A8711D" class="Cadastrar" label="Cadastrar" @click="$router.replace('layouts/Feed.vue')"/>

              <div>
          </div>
    </div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nome: '',
      email: '',
      telefone: '',
      endereco: '',
      complement: '',
      confirma: '',
      password: '',
      isPwd: true,

      dense: false
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

.Cadastrar

  left: 10px

</style>
