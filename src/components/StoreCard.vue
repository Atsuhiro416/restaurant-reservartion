<template>
  <div id="store-card">
    <div class="store-list flex around flex-wrap">
      <div class="store-card" v-for="(store, index) in stores" :key="store.id" :id="store.id" @click="$router.push({ name: 'Store', params: { id: store.id } })">
        <div class="store-img" >
          <img :src="images[index]" alt="">
        </div>
        <p class="store-name">{{ store.name }}</p>
        <p class="store-category">{{ store.category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      stores: {},
      images: [require("../assets/niku.jpg"), require("../assets/bar.jpg"), require("../assets/sushi.jpg")]
    };
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
  },
  created() {
    this.getStores();
  }
}
</script>

<style scoped>
.store-lists {
  width: 90vw;
  margin: 10vh auto;
}

.store-card {
  width: 320px;
  height: 370px;
  background-color: #f8f1f1;
  margin-bottom: 10vh;
  border-radius: 10px;
  cursor: pointer;
}

.store-card:hover {
  -webkit-transform: scale(1.05);
          transform: scale(1.05);
  -webkit-box-shadow: 0px 3px 6px 0px #9E9E9E;
          box-shadow: 0px 3px 6px 0px #9E9E9E;
  -webkit-transition: .2s all;
  transition: .2s all;
}

.store-card img {
  width: 100%;
  height: auto;
}

.store-card p {
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  color: #16697a;
}

@media screen and (max-width: 1024px)  {

  .store-lists {
    margin-top: 0;
  }
}
</style>
