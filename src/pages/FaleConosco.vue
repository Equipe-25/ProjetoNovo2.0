<template class="template">
  <div class="q-pa-lg">
    <div class="container">
      <q-card class="my-card">
        <q-card-section>
          <div>
            <h3 class="q-ma-md">Fale Conosco</h3>
          </div>
          <q-input v-model="nome" class="q-pb-md" dense outlined color="green-5" label="Nome"/>
          <q-input v-model="email" class="q-pb-md" dense outlined color="green-5" label="E-mail"/>
          <q-input v-model="telefone" class="q-pb-md" dense outlined color="green-5" label="Telefone"/>
          <q-input v-model="mensagem" class="q-pb-md" outlined color="green-5" type="textarea" label="Mensagem"/>
          <q-btn outline rounded color="green-5" class="q-mr-md" label="Voltar" @click="$router.push('login')"/>
          <q-btn class="glossy" rounded color="green" label="Enviar" @click="enviar"/>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    }
  },
  methods: {
    enviar () {
      console.log('NOTIFY AQUI')
      // Notify({
      //   color: 'green ',
      // textColor: 'white',
      //   message: 'Contato enviado com sucesso!',
      //   position: 'top',
      //   timeout: 3000
      // })
    }
  }
}
</script>

<style scoped>
.container {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}
</style>
