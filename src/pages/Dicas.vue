<template>
  <div class="q-pa-lg container">
    <q-card class="my-card q-mb-lg">
      <q-card-section>
          <q-item>
            <q-item-section>
              <q-item-label><strong><h4 class="q-ma-xs"># 5 Dicas para Melhorar sua Vida (e ajudar o meio ambiente)</h4> </strong></q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-card-section class="col-4">
            <div class="col-4">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/0ZXfzZTI8OI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
          </q-card-section>
      </q-card-section>
    </q-card>

    <q-card class="my-card q-mb-lg">
      <q-card-section>
          <q-item>
            <q-item-section>
              <q-item-label><strong><h4 class="q-ma-xs"># Dia Mundial do Meio Ambiente</h4> </strong></q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-card-section class="col-4">
            <div class="q-pa-sm">
              Sustentabilidade é um conceito que vem ganhando a cada dia mais visibilidade. Isso ocorre, também, porque o planeta está chegando em um nível de comprometimento de suas capacidades de equilíbrio, impactando de forma desastrosa na vida das pessoas, da flora e da fauna mundial.
            </div>
            <div class="col-4">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/UOqjTVoJ5Vo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </q-card-section>
      </q-card-section>
    </q-card>

    <q-card class="my-card q-mb-lg">
      <q-card-section>
          <q-item>
            <q-item-section>
              <q-item-label><strong><h4 class="q-ma-xs"># 10 Dicas Importantes para Preservar o Meio Ambiente</h4> </strong></q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-card-section class="col-4">
            <div class="q-pa-sm">
              <ol>
                <li>{{t1}}</li><br>
                <li>{{t2}}</li><br>
                <li>{{t3}}</li><br>
                <li>{{t4}}</li><br>
                <li>{{t5}}</li><br>
                <li>{{t6}}</li><br>
                <li>{{t7}}</li><br>
                <li>{{t8}}</li><br>
                <li>{{t9}}</li><br>
                <li>{{t10}}</li>
              </ol>
            </div>
          </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Dicas',
  data () {
    return {
      t1: 'Preserve as árvores. Não realize podas ilegais e nunca desmate uma área. É importante também não colocar fogo em propriedades, pois isso pode atingir matas preservadas.',
      t2: 'Cuide bem dos cursos de água. Nunca coloque lixo em rios, lagos e outros ambientes aquáticos e, principalmente, preserve a mata em volta desses locais. Essa mata protege contra erosão e assoreamento.',
      t3: 'Não pesque em épocas de reprodução e obedeça às regras que indicam a quantidade de pescado permitida. Também é importante não realizar a caça ilegal.',
      t4: 'Nunca compre animais silvestres sem registro. Ao comprar animais ilegais, você está construindo para o tráfico de animais, um problema mundial que afeta a biodiversidade de uma região, podendo até mesmo levar espécies à extinção.',
      t5: 'Cuide bem do seu lixo. Nunca jogue lixo no chão, importando-se sempre com o destino adequado dele. Separar o lixo reciclável é importante para diminuir a quantidade de lixo nas grandes cidades.',
      t6: 'Reutilize, reaproveite e recicle tudo que for possível. Caixas e plásticos, por exemplo, podem ser utilizados para acondicionar alguns objetos. Roupas que você não utiliza mais podem ser doadas. Alguns produtos podem virar itens de decoração. O importante é sempre ter em mente que quanto mais diminuímos a nossa produção de lixo, mais preservamos o meio ambiente.',
      t7: 'Reduza o consumo de água. Para isso, basta criar maneiras de aproveitar melhor água, como reutilizar a água da máquina de lavar, armazenar a água da chuva, não lavar calçadas com água e diminuir o tempo de banho.',
      t8: 'Reduza o consumo de energia elétrica. Evite o consumo exagerado, lembrando-se sempre de deixar aparelhos desligados quando não estiverem sendo usados e apagar as luzes que estão iluminando ambientes desnecessários.',
      t9: 'Evite andar apenas de carro. Os carros poluem o meio ambiente, por isso, sempre que possível, opte por deixar o carro em casa. Você sempre pode optar por utilizar o transporte público de sua região, criar sistemas de caronas, andar de bicicleta ou ainda ir a pé, dependendo da distância a ser percorrida.',
      t10: 'Compre apenas o necessário. A dica aqui é sempre se perguntar antes de uma compra: Eu realmente preciso? A produção exagerada de produtos ocasiona a exploração de nossos recursos de maneira descontrolada. Assim sendo, só consuma o necessário e só adquira produtos realmente importantes.'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.container {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}
/* .my-card{
  width: 100%;
  max-width: 300px;
} */
</style>
