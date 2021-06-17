<template class="template">
  <div class="q-pa-lg container">
      <q-card class="my-card q-pa-md bg-cor">
        <q-img src="https://placeimg.com/500/300/nature" :ratio="16/5" />
        <q-item style="margin-top: -20px; margin-left: 15px; padding: 0">
            <q-item-section avatar>
              <q-avatar size="100px">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kristian_Nairn_%28cropped%29.jpg/140px-Kristian_Nairn_%28cropped%29.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section style="color: #ffffee" >
              <q-item-label><h4 class="q-ma-xs">{{user.nickname}}</h4></q-item-label>
              <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center" style="padding-top: 0; font-size: 20px">
                <q-icon name="place" />
                Recife
              </div>
            </q-item-section>
        </q-item>
      </q-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState('auth', ["user"])
  }
}
</script>

<style scoped>
.container {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.bg-cor{
  background-color: rgba(30, 72, 39, 0.768)
}
</style>
