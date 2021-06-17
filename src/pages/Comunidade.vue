<template>
  <div class="q-pa-lg container">
    <q-card class="my-card q-mb-lg">
      <div class="q-pa-md">
        <q-input v-model="form.titulo" class="q-pb-md" outlined color="green-5" label="Nome do produto"/>
        <q-input v-model="form.descricao" class="q-pb-md" outlined color="green-5" type="textarea" label="Descrição"/>
        <div class="row">
          <div class="col q-pr-xs">
            <q-input
              v-model="form.fotoProduto"
              class="q-pb-md"
              @input="val => { file = val[0] }"
              outlined
              type="file"
              hint="Escolha uma foto"
            />
          </div>
          <div class="col q-pl-xs">
            <q-input v-model="form.preco" class="q-pb-md" outlined color="green-5" label="Preço"/>
          </div>
        </div>
        <div class="row justify-end">
            <q-btn class="glossy enter" rounded color="green" label="Publicar" @click="publicar"/>
        </div>
      </div>
    </q-card>

    <q-card>
        <q-card-section class="row flex-center" style="padding-top: 50px">
          <div class="q-mr-md q-mb-lg" style="width: 90%">
            <q-card>
              <q-card-section>
                <div class="text-h5" style="color: green"><strong>{{"Nome do Produto Aqui"}}</strong></div>
              </q-card-section>
              <q-img :src="'https://i.ibb.co/prmjr26/108926286-2954814104622865-4347383683472703677-n.jpg'" :ratio="2/1" />
              <q-card-section style="color: rgba(73, 70, 70, 0.946)">
                {{"Frase bem grande de descrição Lorem ypsilon top das galázias só pra preencher.Frase bem grande de descrição Lorem ypsilon top das galázias só pra preencher.Frase bem grande de descrição Lorem ypsilon top das galázias só pra preencher."}}
                <div class="row q-mt-lg">
                  <div class="col">
                    <q-btn class="glossy enter" rounded color="green" label="Comprar" @click="comprar"/>
                  </div>
                  <div class="text-subtitle2 text-right col borda-texto" style="color: gray; font-size: 25px">{{"R$ 18,50"}}</div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-card-section>
    </q-card>
  </div>
</template>

<script>

export default {
  data () {
    return {
      form: {
        titulo: '',
        descricao: '',
        fotoProduto: '',
        preco: ''
      }
    }
  },
  methods: {
    publicar () {
      console.log('publicar')
    },
    comprar () {
      console.log('comprar')
    }
  }
}
</script>

<style scoped>
.container {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: rgba(73, 70, 70, 0.946)
}
.borda-texto{
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: rgba(0, 0, 0, 0.755);
}
</style>
