<template>
  <div class="q-pa-lg container">
    <q-card class="my-card q-mb-lg">
      <div class="q-pa-md">
        <q-input
          v-model="form.titulo"
          class="q-pb-md"
          outlined
          color="green-5"
          label="Nome do produto"
        />
        <q-input
          v-model="form.descricao"
          class="q-pb-md"
          outlined
          color="green-5"
          type="textarea"
          label="Descrição"
        />
        <div class="row">
          <div class="col q-pr-xs">
            <input
              ref="file"
              type="file"
              accept="image/jpeg, image/png"
              style="display: none"
              @change="previewFiles"
            />
            <q-btn
              class="glossy enter col q-mt-sm"
              rounded
              color="green"
              label="Escolher arquivo"
              @click="$refs.file.click()"
            />
          </div>
          <div class="col q-pl-xs">
            <q-input
              v-model="form.preco"
              class="q-pb-md"
              outlined
              color="green-5"
              label="Preço"
            />
          </div>
        </div>
        <div class="row justify-end">
          <q-btn
            class="glossy enter"
            rounded
            color="green"
            label="Publicar"
            @click="uploadPost"
          />
        </div>
      </div>
    </q-card>

    <q-card v-for="(p, id) in publicacoes" :key="id" class="q-mb-lg">
      <q-card-section class="row flex-center" style="padding-top: 50px">
        <div class="q-mr-md q-mb-lg" style="width: 90%">
          <q-card>
            <q-card-section>
              <div class="text-h5" style="color: green">
                <strong>{{ p.title }}</strong>
              </div>
            </q-card-section>
            <img :src="p.image" />
            <q-card-section style="color: rgba(73, 70, 70, 0.946)">
              {{ p.description }}
              <div class="row q-mt-lg">
                <div class="col">
                  <q-btn
                    class="glossy enter"
                    rounded
                    color="green"
                    label="Comprar"
                    @click="comprar"
                  />
                </div>
                <div
                  class="text-subtitle2 text-right col borda-texto"
                  style="color: gray; font-size: 25px"
                >
                  {{ "R$ " }}{{ p.price }}
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { Http } from "../http/http";
export default {
  data() {
    return {
      form: {
        titulo: "",
        descricao: "",
        preco: "",
      },
      coverPictureFile: null,
      publicacoes: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    comprar() {
      console.log("Cazé, melhor professor!!!");
    },
    loadData() {
      Http.get("sales").then((response) => {
        this.publicacoes = response.data.reverse();
      });
    },
    uploadPost() {
      let data = new FormData();
      data.append("title", this.form.titulo);
      data.append("description", this.form.descricao);
      data.append("price", this.form.preco);
      data.append("image", this.coverPictureFile);
      Http.post(`sales`, data).then(() => {
        this.loadData();
      });
    },
    previewFiles({ target: { files } }) {
      if (files.length) {
        if (files[0].size > 8644444) {
          this.$q.notify({
            type: "info",
            color: "positive",
            textColor: "white",
            position: "center",
            message: `${this.$t("users.webPage.lengthImg")}`,
            timeout: 2000,
          });
        } else {
          const file = files[0];
          this.coverPictureFile = file;
          let url = URL.createObjectURL(file);
          this.webPagePicture = url;
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}
</style>
