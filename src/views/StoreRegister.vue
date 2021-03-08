<template>
  <div id="store-register">
    <div class="input-form">
      <div class="input">
        <p>店名</p>
        <input type="text" v-model="name">
      </div>
      <div class="input">
        <p>カテゴリー</p>
        <input type="text" v-model="category">
      </div>
      <div class="input">
        <p>説明</p>
        <textarea name="introduction" v-model="introduction" cols="60" rows="10"></textarea>
      </div>
      <div class="input">
        <p>住所</p>
        <input type="text" v-model="address">
      </div>
      <div class="input">
        <p>owner_id</p>
        <input type="number" v-model="ownerId">
      </div>
      <div class="input">
        <input type="file" @change="confirmImage" v-if="view" />
      </div>
      <div v-if="confirmedImage">
        <img :src="confirmedImage" >
      </div>
      <div>
        <button @click="uploadImage">店舗登録</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: "",
      category: "",
      introduction: "",
      address: "",
      ownerId: "",
      file: "",
      confirmedImage: "",
      view: true,
      stores: {},
    };
  },
  created() {
    this.getStores()
  },
  methods: {
    getStores() {
      axios
        .get("https://desolate-river-22304.herokuapp.com/api/store")
        .then(response => {
          this.stores = response.data.data;
          console.log(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    confirmImage(event) {
      this.file = event.target.files[0];
      if(!this.file.type.match("image.*")) {
        this.confirmedImage = "";
        return;
      }
      this.createImage(this.file);
    },
    createImage(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = event => {
        this.confirmedImage = event.target.result;
      };
    },
    uploadImage() {
      let data = new FormData();
      data.append("name", this.name);
      data.append("category", this.category);
      data.append("introduction", this.introduction);
      data.append("address", this.address);
      data.append("owner_id", this.ownerId);
      data.append("file", this.file);

      axios
        .post("https://desolate-river-22304.herokuapp.com/api/store", data)
        .then(response => {
          this.getStores();
          console.log(response.data);
          this.name = "";
          this.category = "";
          this.introduction = "";
          this.address = "";
          this.ownerId = "";
          this.file = "";
          this.confirmedImage = "";
          this.view = false;
          this.$nextTick(function() {
            this.view = true;
          });
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  },
}
</script>

<style scoped>
.input-form {
  margin: 40px auto;
  width: 25vw;
}
.input {
  margin-bottom: 10px;
}
input {
  width: 25vw;
}
</style>
