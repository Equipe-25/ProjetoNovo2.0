<template class="template">
  <div class="window-width row fullscreen flex-center">
    <div class="my-card">
      <div class="q-gutter-y-md">
        <h4 class="h4">Cadastre-se</h4>
        <q-input
          v-model="nickname"
          class="botoes"
          outlined
          color="green-5"
          label="Nome Completo"
          dense
        />
        <q-input
          dense
          v-model="email"
          outlined
          color="green-5"
          type="email"
          label="E-mail válido"
        />
        <q-input
          dense
          v-model="city"
          outlined
          color="green-5"
          label="Cidade"
        />
        <!-- <q-input dense v-model="endereco" outlined color="green-5" label="Endereço" /> -->
        <!-- <q-input dense v-model="complement" autogrow outlined color="green-5" label="Complemento"/> -->
        <q-input
          dense
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
          outlined
          color="green-5"
          label="Senha"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-input
          dense
          v-model="confirm"
          :type="isPwd2 ? 'password' : 'text'"
          outlined
          color="green-5"
          label="Confirmar senha"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd2 ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd2 = !isPwd2"
            />
          </template>
        </q-input>
        <div class="row justify-between">
          <div class="q-ma-xs">
            <q-btn
              outline
              rounded
              color="green-5"
              label="Voltar"
              @click="$router.push('login')"
            />
          </div>
          <div class="q-ma-xs">
            <q-btn
              rounded
              class="glossy Cadastrar"
              color="green"
              label="Cadastrar"
              @click="cadastrar"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Http } from "../http/http";

export default {
  data() {
    return {
      nickname: "",
      city: "",
      email: "",
      password: "",
      confirm: "",
      isPwd: true,
      isPwd2: true,
    };
  },
  methods: {
    cadastrar() {
      if(this.password == this.confirm && this.password != ""){
        Http.post("createuser", {
          nickname: this.nickname,
          city: this.city,
          email: this.email,
          password: this.password,
        }).then((response) => {
          console.log(response)
          this.publicacoes = response.data;
        }).catch((error)=>{
          console.log(error);
        })
      }
    },
  },
};
</script>
<style lang="sass" scoped>
.h4
  font-family: Roboto
  font-style: normal
  font-weight: 900
  font-size: 36px
  line-height: 42px
  color: #50C730

.Cadastrar

  left: 10px
</style>
