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
          <div class="store-fav" @click="favorite">
            <font-awesome-icon icon="star" size="3x" :class="starColor()" />
            <p>お気に入り{{ favoriteMessage }}</p>
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
      isLike: null,
      favoriteMessage: ""
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
          this.getFavorite();
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    getFavorite() {
      axios
        .get("https://desolate-river-22304.herokuapp.com/api/like-exist/" + this.$store.state.user.id + '/' + this.id)
        .then(response => {
          this.isLike = response.data.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.response);
        })
    },
    favorite() {
      axios
        .post("https://desolate-river-22304.herokuapp.com/api/like",
        {
          user_id: this.$store.state.user.id,
          store_id: this.id,
        })
        .then(response=> {
          console.log(response.data);
          this.getFavorite();
          // this.$router.go({
          //   path: this.$router.currentRoute.path,
          //   force: true,
          // });
        })
        .catch(error => {
          console.log(error);
        });
    },
    starColor() {
      if(this.isLike === true) {
        this.favoriteMessage = "登録済";
        return "star-color";
      } else if (this.isLike === false) {
        this.favoriteMessage = "登録";
        return "black-star";
      }
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
  cursor: pointer;
}

.star-color {
  color: #ffa62b;
  opacity: .7;
}

.star-color:hover {
  opacity: 1;
}

.black-star {
  color: #000;
  opacity: .6;
}

.black-star:hover {
  color: #ffa62b;
  opacity: .5;
}

.store-fav p {
  font-size: 12px;
  margin-top: 10px;
}

.store-info {
  width: 45vw;
  margin: 10vh auto;
}

@media screen and (max-width: 1024px) {
  .store-container {
    width: 100vw;
  }
  .store-img img {
    width: 80vw;
    height: auto;
  }
  .store-middle-wrapper h2 {
    margin-top: 0;
  }
  .store-user-actions button {
    width: 150px;
    height: 70px;
  }
  .store-info {
    margin: 5vh auto;
    width: 75vw;
    font-size: 30px;
  }
}

@media screen and (max-width: 768px) {
  .store-container {
    margin-top: 0;
  }
  .store-img img {
    width: 100vw;
    height: auto;
  }
  .store-middle-wrapper {
    display: block;
  }
  .store-middle-wrapper h2 {
    text-align: center;
  }
  .store-user-actions {
    -ms-flex-pack: distribute;
        justify-content: space-around;
    margin-top: 20px;
  }
  .store-user-actions button {
    width: 150px;
    font-size: 20px;
  }
  .storeinfo {
    font-size: 20px;
  }
}
</style>
