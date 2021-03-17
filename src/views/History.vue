<template>
  <div id="history">
    <LoggedinHeader />
    <h2>閲覧履歴</h2>
    <div class="store-cards flex around flex-wrap">
      <StoreCard
      v-for="store in stores"
      :key="store.id"
      :name="store.name"
      :category="store.category"
      :id="store.store_id"
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
        .get("https://desolate-river-22304.herokuapp.com/api/my-histories/" + this.$store.state.user.id)
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
h2 {
  font-size: 200%;
  text-align: center;
  padding-top: 150px;
}
</style>
