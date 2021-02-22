<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>{{ name }}</p>
    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {
      name: "hello",
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  },
  components: {
    HelloWorld
  }
}
</script>
