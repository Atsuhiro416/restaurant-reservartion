<template>
  <div class="home">
    <LoggedinHeader />
    <div class="store-cards flex around flex-wrap">
      <StoreCard
      v-for="store in stores"
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

export default {
  data(){
    return {
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
  components: {
    LoggedinHeader,
    StoreCard,
  }
}
</script>

<style scoped>

</style>
