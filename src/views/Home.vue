<template>
  <div class="home">
    <LoggedinHeader />
    <Swiper />
    <div class="search">
      <input type="text" v-model="keyword" placeholder="探す..." >
    </div>
    <div class="store-cards flex around flex-wrap">
      <StoreCard
      v-for="store in filteredStores"
      :key="store.id"
      :name="store.name"
      :category="store.category"
      :id="store.id"
      :image="image"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import LoggedinHeader from '../components/LoggedinHeader.vue'
import StoreCard from '../components/StoreCard.vue'
import Swiper from '../components/Swiper.vue'

export default {
  data(){
    return {
      keyword: "",
      stores: {},
      image: require("../assets/washoku.jpg"),
    };
  },
  methods: {
    getStores() {
      axios
        .get("https://desolate-river-22304.herokuapp.com/api/store")
        .then(response => {
          this.stores = response.data.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  created() {
    this.getStores();
  },
  computed: {
    filteredStores() {
      const storesArray = [];
      for(const i in this.stores) {
        const store = this.stores[i];
        if(store.name.indexOf(this.keyword) !== -1 ||
            store.category.indexOf(this.keyword) !== -1) {
              storesArray.push(store);
            }
      }
      return storesArray;
    },
  },
  components: {
    LoggedinHeader,
    StoreCard,
    Swiper,
  }
}
</script>

<style scoped>
.search {
  width: 20vw;
  margin: 10vh auto;
  position: relative;
}

.search input {
  width: 100%;
  font-size: 20px;
  border-radius: 5px;
}

@media screen and (max-width: 1024px) {

  .search {
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
}

@media screen and (max-width: 768px) {

  .search {
    width: 80vw;
  }
}
</style>
