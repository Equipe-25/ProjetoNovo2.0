<template>
  <!-- <q-page padding>
      <q-page class="container">
    <section id="formacoes">
      <div class="row q-pa-lg juntity-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <q-card class="my-card">
            <q-item clickable v-ripple>
              <q-item-section side>
                <q-avatar rounded size="48px">
                  <img src="../../ícones/account_circle_black_24dp.svg" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Mary</q-item-label>
              </q-item-section>
              <q-item-section side>
                3 min ago
              </q-item-section>
            </q-item>
            <img src="../assets/imagens/artesanato.jpg">
            <q-card-section>
              <div class="text-h6">Bolsa estilosa feita de tampinhas de guaraná! Temos mais exemplos!</div>
              <div class="text-subtitle2">Para conferir basta entrar em contato!</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>

      </div>
    </section>
  </q-page> -->
      <!-- <q-page class="container">
    <section id="formacoes">
      <div class="row q-pa-lg juntity-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <q-card class="my-card">
            <q-item clickable v-ripple>
              <q-item-section side>
                <q-avatar rounded size="48px">
                  <img src="../../ícones/account_circle_black_24dp.svg" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Roberto Brito</q-item-label>
              </q-item-section>
              <q-item-section side>
                3 min ago
              </q-item-section>
            </q-item>
            <img src="../../assets/imagens/artesanato.jpg">
            <q-card-section>
              <div class="text-h6">Bolsa estilosa feita de tampinhas de guaraná! Temos mais exemplos!</div>
              <div class="text-subtitle2">Para conferir basta entrar em contato!</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
      <q-page class="container">
    <section id="formacoes">
      <div class="row q-pa-lg juntity-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <q-card class="my-card">
            <q-item clickable v-ripple>
              <q-item-section side>
                <q-avatar rounded size="48px">
                  <img src="../../ícones/account_circle_black_24dp.svg" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Juliana Paiva</q-item-label>
              </q-item-section>
              <q-item-section side>
                3 min ago
              </q-item-section>
            </q-item>
            <img src="../../assets/imagens/artesanato.jpg">
            <q-card-section>
              <div class="text-h6">Bolsa estilosa feita de tampinhas de guaraná! Temos mais exemplos!</div>
              <div class="text-subtitle2">Para conferir basta entrar em contato!</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
      <q-page class="container">
    <section id="formacoes">
      <div class="row q-pa-lg juntity-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <q-card class="my-card">
            <q-item clickable v-ripple>
              <q-item-section side>
                <q-avatar rounded size="48px">
                  <img src="../../ícones/account_circle_black_24dp.svg" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Mary</q-item-label>
              </q-item-section>
              <q-item-section side>
                3 min ago
              </q-item-section>
            </q-item>
            <img src="../../assets/imagens/artesanato.jpg">
            <q-card-section>
              <div class="text-h6">Bolsa estilosa feita de tampinhas de guaraná! Temos mais exemplos!</div>
              <div class="text-subtitle2">Para conferir basta entrar em contato!</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
      <q-page class="container">
    <section id="formacoes">
      <div class="row q-pa-lg juntity-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <q-card class="my-card">
            <q-item clickable v-ripple>
              <q-item-section side>
                <q-avatar rounded size="48px">
                  <img src="../../ícones/account_circle_black_24dp.svg" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Mary</q-item-label>
              </q-item-section>
              <q-item-section side>
                3 min ago
              </q-item-section>
            </q-item>
            <img src="../../assets/imagens/artesanato.jpg">
            <q-card-section>
              <div class="text-h6">Bolsa estilosa feita de tampinhas de guaraná! Temos mais exemplos!</div>
              <div class="text-subtitle2">Para conferir basta entrar em contato!</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
  </q-page> -->
  <!-- </q-page> -->
</template>

<script>
export default {
  // name: 'PageName',
  name: 'PageIndex',
  data () {
    return {
      usuario: []
    }
  },
  methods: {
    listaUsuario () {
      console.log('listagem...')
      this.$axios.get('http://localhost:3000/').then(response => {
        console.log(response)
      })
    }
  },
  beforeMount () {
    this.listaUsuario()
  }
}
</script>
