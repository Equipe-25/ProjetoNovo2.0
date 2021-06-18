<template class="template">
<div class="window-width row fullscreen flex-center">
    <div class="my-card">
            <div class="q-gutter-y-md">
              <h4 class="h4">Redefinir Senha</h4>
              <q-input v-model="senha" dense outlined type="password" color="green-5" label="Senha Antiga"/>
              <q-input v-model="senhaDesejada" dense outlined type="password" color="green-5" label="Senha Desejada"/>
              <div class="row justify-between">
                <div class="q-ma-xs">
                  <q-btn outline rounded color="green-5" label="Voltar" @click="goBack"/>
                </div>
                <div class="q-ma-xs">
                  <q-btn rounded color="green" class="avanca glossy" label="Redefinir Senha" @click="redefinir"/>
                </div>
              </div>
              <div>
          </div>
    </div></div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import { Http } from "../http/http";
// import {Notify} from ""

export default {
  data () {
    return {
      senha: '',
      senhaDesejada: ''
    }
  },
  computed: {
    ...mapState('auth', ["user"]),
  },
  methods: {
    goBack(){
      window.history.back();
    },
    redefinir() {
      Http.post(`resetpassword`, {password: this.senhaDesejada}).then((res) => {
        console.log(res)
      });
    },
  },
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
