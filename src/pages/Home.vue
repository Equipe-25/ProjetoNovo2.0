<template>
    <div class="q-pa-lg">
    <div class="container">
      <q-card class="my-card q-mb-lg">
        <div class="q-pa-md">
          <q-input v-model="form.publicacao" class="q-pb-md" outlined color="green-5" type="textarea" label="No que está pensando?"/>
          <q-input
            class="q-pb-md"
            @input="val => { file = val[0] }"
            outlined
            type="file"
            hint="Escolha uma foto"
          />
          <div class="row justify-end">
              <q-btn class="glossy enter" rounded color="green" label="Publicar" @click="publicar"/>
          </div>
        </div>
      </q-card>

      <q-card v-for="(p, id) in publicacoes" :key="id" class="my-card q-mb-lg">
        <q-card-section>
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img :src="p.foto">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label><strong>{{p.nome}}</strong></q-item-label>
                <q-item-label caption>
                  {{p.tempo}}
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />

            <q-card-section class="col-4">
              <div class="q-pa-sm">
                {{p.publicacao}}
              </div>
              <div v-if="p.imagem" class="col-4">
                <q-img
                  :src="p.imagem"
                  :ratio="16/9"
                />
                <q-card-actions>
                  <q-btn flat round color="red" icon="favorite" />
                  <q-btn flat round color="primary" icon="share" />
                  <q-btn flat round color="green-5" icon="bookmark" />
                </q-card-actions>
              </div>
            </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      form: {
        nome: 'Holdor Maneiro',
        publicacao: '',
        tempo: '1 s',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kristian_Nairn_%28cropped%29.jpg/140px-Kristian_Nairn_%28cropped%29.jpg',
        imagem: 'https://coralplaza.com.br/wp-content/uploads/2018/10/208179-arte-potiguar-conheca-o-artesanato-do-rio-grande-do-norte-1.jpg'
      },
      publicacoes: [
        {
          nome: 'João das Neves',
          foto: 'https://cdn.quasar.dev/img/boy-avatar.png',
          publicacao: 'Texto muito bonito aqui.',
          tempo: '2 h',
          imagem: 'https://imagens-revista.vivadecora.com.br/uploads/2018/09/Artesanatos-em-geral-garrafas-com-barbante.jpg'
        }
      ]
    }
  },
  methods: {
    publicar () {
      this.publicacoes.unshift({
        nome: this.form.nome,
        publicacao: this.form.publicacao,
        foto: this.form.foto,
        tempo: this.form.tempo,
        imagem: this.form.imagem
      })
      this.form.publicacao = ''
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
