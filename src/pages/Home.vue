<template>
  <div class="q-pa-lg container">
    <q-card class="my-card q-mb-lg">
      <div class="q-pa-md">
        <q-input
          v-model="form.publicacao"
          class="q-pb-md"
          outlined
          color="green-5"
          type="textarea"
          label="No que está pensando?"
        />
        <input
          ref="file"
          type="file"
          accept="image/jpeg, image/png"
          style="display: none"
          @change="previewFiles"
        />
        <div class="row">
          <div class="col">
            <q-btn
              class="glossy enter"
              rounded
              color="green"
              label="Escolher arquivo"
              @click="$refs.file.click()"
            />
          </div>
          <div class="col">
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
        </div>
      </div>
    </q-card>

    <q-card v-for="(p, id) in publicacoes" :key="id" class="my-card q-mb-lg">
      <q-card-section>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img
                :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kristian_Nairn_%28cropped%29.jpg/140px-Kristian_Nairn_%28cropped%29.jpg'"
              />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label
              ><strong>{{ p.userId.nickname }}</strong></q-item-label
            >
            <q-item-label caption>
              {{ p.created_at }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-card-section class="col-4">
          <div class="q-pa-sm">
            {{ p.text }}
          </div>
          <div v-if="p.image" class="col-4">
            <q-img :placeholder-src="p.image" :ratio="16 / 9" />
            <q-card-actions>
              <q-btn
                flat
                round
                color="red"
                icon="favorite"
                @click="likePost(p._id)"
              />
              {{ p.likes }}
              <q-btn flat round color="primary" icon="share" />
              <q-btn flat round color="green-5" icon="bookmark" />
            </q-card-actions>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { Http } from "../http/http";

export default {
  name: "Home",
  data() {
    return {
      form: {
        nome: "Holdor Maneiro",
        publicacao: "",
        tempo: "1 s",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kristian_Nairn_%28cropped%29.jpg/140px-Kristian_Nairn_%28cropped%29.jpg",
        imagem:
          "https://coralplaza.com.br/wp-content/uploads/2018/10/208179-arte-potiguar-conheca-o-artesanato-do-rio-grande-do-norte-1.jpg",
      },
      coverPictureFile: null,
      publicacoes: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    likePost(id) {
      Http.post(`postslike/${id}`).then(() => {
        this.loadData();
      });
    },
    uploadPost() {
      let data = new FormData();
      data.append("image", this.coverPictureFile);
      data.append("text", this.form.publicacao);
      Http.post(`posts`, data).then(() => {
        this.loadData();
        this.form.publicacao = "";
        this.coverPictureFile = null;
      });
    },
    loadData() {
      Http.get("posts").then((response) => {
        this.publicacoes = response.data;
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
