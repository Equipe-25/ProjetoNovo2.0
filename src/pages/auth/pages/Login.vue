<template class="template">
  <div class="window-height window-width row justify-center fullscreen">
    <div class="my-card">
            <div class="column q-gutter-y-md text-center">
                    <q-img
                src="icons/Tree-removebg-preview.png"
                      :ratio="1"/>
              <h3 class="title">SustentApp</h3>
              <q-input v-model="email" dense outlined color="green-5" label="Login"/>
              <q-input v-model="passwordUser" dense outlined color="green-5" type="password" label="Senha" />
              <q-btn class="glossy enter" rounded color="green" label="Logar" @click="ActionLoginUser($data)"/>
              <div class="row justify-between">
                <div class="q-ma-xs">
                  <a class="mouse" style="color: green" @click="$router.push('cadastro')">Cadastre-se</a>
                </div>
                <div class="q-ma-xs">
                  <a class="mouse" style="color: green" @click="$router.push('esqueceu-a-senha')">Esqueceu sua senha?</a>
                </div>
              </div>
              <div>
          </div>
    </div></div>
  </div>

</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      email: '',
      passwordUser: ''
    }
  },
  methods: {
    ...mapActions("auth", ['ActionLoginUser']),
    cadastro () {
      // console.log('teste')
      this.$router.push({
        name: 'cadastro'
      })
    }
  }
}
</script>

<style scoped>

.template{
  background-color: red
}

.my-card{
  width: 100%;
  max-width: 250px;
  height: auto;
}

.title{
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: 42px;
  color: #50C730;

}

.enter{
  color: #A8711D;
}

.mouse{
  cursor: pointer;
}

</style>
