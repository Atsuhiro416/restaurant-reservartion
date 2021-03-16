<template>
  <div id="swiper">
    <div v-swiper:mySwiper="swiperOption" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in images" :key="item.id">
          <img :src="item.image" @click="$router.push({ name: 'Store', params: { id: item.id } })">
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'

export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        },
      },
      images: {
        1: {
          image: require("../assets/sushi.jpg"),
          id: 24,
        },
        2: {
          image: require("../assets/niku.jpg"),
          id: 4,
        },
        3: {
          image: require("../assets/bar.jpg"),
          id: 14,
        },
      },
    };
  },
  directives: {
    swiper: directive
  },
}
</script>

<style scoped>
.swiper-container {
  width: 50vw;
  text-align: center;
  margin-top: 10vh;
}

.swiper-wrapper {
  margin: 0 auto;
  padding-top: 80px;
}

.swiper-slide img {
  width: 450px;
  height: auto;
  cursor: pointer;
}

@media screen and (max-width: 1024px) {

  .swiper-container {
    width: 60vw;
    margin-top: 5vh;
  }
}

@media screen and (max-width: 768px) {

  .swiper-container {
    width: 100vw;
    margin-top: 10px;
  }
}
</style>
