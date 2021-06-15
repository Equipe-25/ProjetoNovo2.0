<template class="template">
  <div class="q-pa-lg container">
    <q-card class="my-card q-mb-lg">
       <q-list bordered padding>
      <q-item-label header>Configurações de Usuário</q-item-label>

      <q-item clickable v-ripple @click="$router.push('redefinir-senha')">
        <q-item-section>
          <q-item-label>Redefinir Senha </q-item-label>
          <q-item-label caption>
            Aqui você poderá alterar a senha
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Outra Configuração</q-item-label>
          <q-item-label caption>
            Poderá ter outra configuração aqui em breve
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    </q-card>
  </div>
</template>

<script>

export default {
  data () {
    return {
      text: ''
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
