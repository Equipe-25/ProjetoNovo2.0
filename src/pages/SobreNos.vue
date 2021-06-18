<template class="template">
  <div class="q-pa-lg">
    <div class="container">
      <q-card class="my-card">
        <q-card-section>
          <div>
            <h3 class="q-ma-md">Sobre nós</h3>
          </div>
          <p>
            {{texto}}
          </p>
          <p>
            {{texto2}}
          </p>
        </q-card-section>
        <q-card-section class="row flex-center">
          <div v-for="(card, index) in cards" :key="index" class="q-mr-md q-mb-lg" style="width: 43%">
            <q-card>
              <q-card-section>
                <div class="text-h5 text-center" style="color: green">{{card.nome}}</div>
                <div class="text-subtitle2 text-center" style="color: gray">{{card.arroba}}</div>
              </q-card-section>
              <!-- fotos online por 30 dia / permanentes em assets -->
              <q-img :src="card.foto" :ratio="1" />
              <q-card-section>
                <p class="text-center">
                {{card.frase}}
                </p>
              </q-card-section>
              <hr>
              <q-card-actions align="center">
                <q-img style="width: 15%" class="q-ml-lg q-mb-sm pointer" src="../assets/git.png" :ratio="1" @click="link(card.linkGitHub)" />
                <q-img style="width: 15%" class="q-ml-lg q-mb-sm pointer" src="../assets/linkedin.png" :ratio="1" @click="link(card.linkLinkedIn)" />
                <q-img style="width: 15%" class="q-ml-lg q-mb-sm pointer" src="../assets/insta.png" :ratio="1" @click="link(card.linkInsta)" />
              </q-card-actions>
            </q-card>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      texto: 'Visamos auxiliar o trabalho artesão, com intuito de oferecer maior acessibilidade para divulgação de duas obras.',
      texto2: 'A Sustentapp tem como objetivo contribuir com ações que sejam benéficas para o meio ambiente. Acreditamos que com a criatividade, pessoas podem transformar algo que não seja mais utilizado em um produto de uso.',
      cards: [
        {
          nome: 'Diogo Felipe Silva',
          arroba: '@diogoladorucki',
          foto: 'https://i.ibb.co/prmjr26/108926286-2954814104622865-4347383683472703677-n.jpg',
          frase: 'Sem sacrifícios, não há vitória.',
          linkInsta: 'https://www.instagram.com/diogoladorucki/',
          linkGitHub: 'https://github.com/diogofelipeladorucki',
          linkLinkedIn: 'https://www.linkedin.com/in/diogo-felipe/'
        },
        {
          nome: 'Sabrina Holanda',
          arroba: '@adnaloh_',
          foto: 'https://i.ibb.co/x37HwG8/sabrina.jpg',
          frase: 'Foco, força e fé.',
          linkInsta: 'https://www.instagram.com/adnaloh_/',
          linkGitHub: 'https://github.com/SabrinaHolanda',
          linkLinkedIn: 'https://www.linkedin.com/in/maria-sabrina/'
        },
        {
          nome: 'Edson Santana',
          arroba: '@edsonju99',
          foto: 'https://i.ibb.co/RPpzLz9/1245e577-45bb-4f9c-bda3-126dbc246785.jpg',
          frase: 'Aquele que não vive para servir, não serve para viver.',
          linkInsta: 'https://www.instagram.com/diogoladorucki/',
          linkGitHub: 'https://github.com/Edson-jr',
          linkLinkedIn: 'https://www.linkedin.com/in/edson-junior-2937b5144/'
        },
        {
          nome: 'Audrey Alison Pinheiro',
          arroba: '@audrey_pinheiro019',
          foto: 'https://i.ibb.co/89vMbww/audrey.jpg',
          frase: 'Você não vai vencer todos os dias, mas poderá lutar sempre e um dia vencerá.',
          linkInsta: 'https://www.instagram.com/audrey_pinheiro019/',
          linkGitHub: 'https://github.com/AUDREY-DEV-PROG',
          linkLinkedIn: 'https://www.linkedin.com/in/audrey-alison-6394451b5'
        }
      ]
    }
  },
  methods: {
    link (link) {
      window.open(link, '_blank')
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
.pointer{
  cursor: pointer;
}
hr{
  width: 80%;
  border: 0; border-top: 1px solid green;
}
</style>
