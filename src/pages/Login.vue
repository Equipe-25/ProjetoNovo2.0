<template class="template">
  <div class="window-height window-width row justify-center fullscreen">
    <div class="my-card">
            <div class="column q-gutter-y-md text-center">
                    <q-img
                src="icons/Tree-removebg-preview.png"
                      :ratio="1"/>
              <h4 class="h4">SustentApp</h4>
              <q-input v-model="text" dense outlined color="green-5" label="Login"/>
              <q-input v-model="text2" dense outlined color="green-5" type="password" label="Senha" />
              <q-btn outline rounded color="brown-5" class="Enter" label="Enter" @click="$router.push('home')"/>
              <a class="cadastre-se mouse"><q-side-link @click="$router.push('cadastro')">Cadastre-se</q-side-link></a>
              <a class="esqueceu mouse"><q-side-link @click="$router.push('esqueceu-a-senha')">Esqueceu sua senha?</q-side-link></a>
              <div>
          </div>
    </div></div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      text: '',
      text2: ''
    }
  },
  methods: {
    cadastro () {
      console.log('teste')
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

.cadastre-se{
    width: 75px;
    height: 16px;
    left: 51p;
    top: 556px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #50C730;
}

.esqueceu{
  position: absolute;
  width: 121px;
  height: 22px;
  left: 698px;
  top: 550px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #50C730;
}

.h4{
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: #50C730;

}

.Enter{
  color: #A8711D;
}

.mouse{
  cursor: pointer;
}

</style>
