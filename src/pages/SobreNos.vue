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
          <div class="q-mr-md q-mb-lg" style="width: 40%">
            <q-card>
              <q-card-section>
                <div class="text-h5 text-center" style="color: green">Diogo Felipe Silva</div>
                <div class="text-subtitle2 text-center" style="color: gray">@diogoladorucki</div>
              </q-card-section>
              <q-img src="../assets/diogo.jpg" :ratio="1" />
              <q-card-section>
                <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </q-card-section>
              <hr>
              <q-card-actions align="center">
                <q-img style="width: 15%" class="q-ml-lg q-mb-sm pointer" src="../assets/git.png" :ratio="1" @click="link('https://github.com/diogofelipeladorucki')" />
                <q-img style="width: 15%" class="q-ml-lg q-mb-sm pointer" src="../assets/linkedin.png" :ratio="1" @click="link('https://www.linkedin.com/in/diogo-felipe/')" />
                <q-img style="width: 15%" class="q-ml-lg q-mb-sm pointer" src="../assets/insta.png" :ratio="1" @click="link('https://www.instagram.com/diogoladorucki/')" />
              </q-card-actions>
            </q-card>
          </div>
          <div class="q-ml-md q-mb-lg" style="width: 40%">
            <q-card>
              <q-card-section>
                <div class="text-h5 text-center" style="color: green">Diogo Felipe Silva</div>
                <div class="text-subtitle2 text-center" style="color: gray">@diogoladorucki</div>
              </q-card-section>
              <q-img src="../assets/diogo.jpg" :ratio="1" />
              <q-card-section>
                <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </q-card-section>
              <hr>
              <q-card-actions align="center">
                <q-img style="width: 15%" class="q-ml-lg q-mb-sm pointer" src="../assets/git.png" :ratio="1" @click="link('https://github.com/diogofelipeladorucki')" />
                <q-img style="width: 15%" class="q-ml-lg q-mb-sm pointer" src="../assets/linkedin.png" :ratio="1" @click="link('https://www.linkedin.com/in/diogo-felipe/')" />
                <q-img style="width: 15%" class="q-ml-lg q-mb-sm pointer" src="../assets/insta.png" :ratio="1" @click="link('https://www.instagram.com/diogoladorucki/')" />
              </q-card-actions>
            </q-card>
          </div>
          <div class="q-mr-md q-mb-lg" style="width: 40%">
            <q-card>
              <q-card-section>
                <div class="text-h5 text-center" style="color: green">Edson Santana</div>
                <div class="text-subtitle2 text-center" style="color: gray">@edsonju99</div>
              </q-card-section>
              <q-img src="../assets/ed.jpeg" :ratio="1" />
              <q-card-section>
                <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </q-card-section>
              <hr>
              <q-card-actions align="center">
                <q-img style="width: 15%" class="q-ml-lg q-mb-sm pointer" src="../assets/git.png" :ratio="1" @click="link('https://github.com/Edson-jr')" />
                <q-img style="width: 15%" class="q-ml-lg q-mb-sm pointer" src="../assets/linkedin.png" :ratio="1" @click="link('https://www.linkedin.com/in/edson-junior-2937b5144/')" />
                <q-img style="width: 15%" class="q-ml-lg q-mb-sm pointer" src="../assets/insta.png" :ratio="1" @click="link('https://www.instagram.com/edsonju99/')" />
              </q-card-actions>
            </q-card>
          </div>
          <div class="q-ml-md q-mb-lg" style="width: 40%">
            <q-card>
              <q-card-section>
                <div class="text-h5 text-center" style="color: green">Diogo Felipe Silva</div>
                <div class="text-subtitle2 text-center" style="color: gray">@diogoladorucki</div>
              </q-card-section>
              <q-img src="../assets/diogo.jpg" :ratio="1" />
              <q-card-section>
                <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </q-card-section>
              <hr>
              <q-card-actions align="center">
                <q-img style="width: 15%" class="q-ml-lg q-mb-sm pointer" src="../assets/git.png" :ratio="1" @click="link('https://github.com/diogofelipeladorucki')" />
                <q-img style="width: 15%" class="q-ml-lg q-mb-sm pointer" src="../assets/linkedin.png" :ratio="1" @click="link('https://www.linkedin.com/in/diogo-felipe/')" />
                <q-img style="width: 15%" class="q-ml-lg q-mb-sm pointer" src="../assets/insta.png" :ratio="1" @click="link('https://www.instagram.com/diogoladorucki/')" />
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
      texto: 'O termo sustentabilidade vem sendo utilizado com mais frequência em empresas e organizações desde a primeira década do século XXI. Medidas sustentáveis visam permitir as atividades humanas e a renovação dos recursos naturais.',
      texto2: 'A SustentApp é uma empresa emergente no estado, fornecendo condições aos seus colaboradores. Seus produtos correspondem às necessidades dos clientes de forma sustentável, poupando tempo, dinheiro e esforço com materiais de qualidade. Desta forma, a SustentApp atua com responsabilidade, assumindo um compromisso real com seus clientes. Esta união fornece produtos biodegradáveis com tecnologia de ponta. Pensamos na sustentabilidade desde a produção, incluindo a relação custo/benefício, redução de desperdícios e menor produção de lixo.'
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
