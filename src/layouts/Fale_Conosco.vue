<template class="template">
  <div class="fullscrean">
      <div>
        <h3>Fale Conosco</h3>
      </div>
      <p>Telefone: (00) 90000-0000</p>
      <p>E-mail: deskhelp@gmail.com </p>
      <div class="Input">
          <q-input filled v-model="digite" autogrow outlined color="green-5" label="Digite Aqui"/>
      </div>
        <q-btn outline rounded color="brown-5" label="Cancelar" @click="$router.replace('layouts/login.vue')"/>
        <q-btn outline rounded color="brown-5" background-color="#A8711D" class="Enviar" label="Enviar" @click="$router.replace('layouts/login.vue')"/>
 </div>

</template>

<script>
export default {
  data () {
    return {
      digite: ''
    }
  }
}
</script>
