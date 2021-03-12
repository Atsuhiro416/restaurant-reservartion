<template>
  <div id="store">
    <LoggedinHeader />
    <div class="store-container">
      <div class="store-img">
        <img src="../assets/bar.jpg" alt="">
      </div>
      <div class="store-middle-wrapper flex around">
        <h2>{{ store.name }}</h2>
        <div class="store-user-actions flex between">
          <div class="store-fav">
            <font-awesome-icon icon="star" size="3x" class="star-color" />
            <p>お気に入り追加</p>
          </div>
          <button @click="reservation">予約する</button>
        </div>
      </div>
      <div class="store-info">
        <p>{{ store.introduction }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import LoggedinHeader from '../components/LoggedinHeader.vue'

export default {
  props: ["id"],
  data() {
    return {
      store: {},
    };
  },
  created() {
    this.getStore();
  },
  methods: {
    getStore() {
      axios
        .get("https://desolate-river-22304.herokuapp.com/api/store/" + this.id)
        .then(response => {
          this.store = response.data.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    reservation() {
      console.log("予約機能は未実装です");
    }
  },
  components: {
    LoggedinHeader,
  }
}
</script>

<style scoped>
.store-container {
  width: 70vw;
  margin: 5vh auto;
  padding-top: 100px;
}

.store-img {
  text-align: center;
}

.store-middle-wrapper {
  margin-top: 5vh;
}

.store-middle-wrapper h2 {
  font-size: 300%;
}

.store-user-actions button {
  height: 50px;
  width: 100px;
  margin-top: 5px;
}

.store-fav {
  text-align: center;
  margin-right: 20px;
}

.star-color {
  color: #ffa62b;
  opacity: .7;
}

.store-fav p {
  font-size: 12px;
  margin-top: 10px;
}

.store-info {
  width: 45vw;
  margin: 10vh auto;
}
</style>
