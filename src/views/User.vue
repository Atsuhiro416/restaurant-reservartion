<template>
  <div id="user">
    <LoggedinHeader></LoggedinHeader>
    <div class="container">
      <h2>アカウント情報</h2>
      <p>メールアドレス：{{ userEmail }}</p>
      <button @click="$router.push('/change-password')">パスワードを再設定</button>
    </div>
  </div>
</template>

<script>
import LoggedinHeader from '../components/LoggedinHeader.vue'

export default {
  computed: {
    userEmail() {
      return this.$store.getters.getUserEmail;
    }
  },
  components: {
    LoggedinHeader
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 15vh;
}

.container h2 {
  font-size: 200%;
  padding-top: 100px;
}

.container p {
  margin-top: 5vh;
  font-size: 150%;
  padding: 10px;
  overflow-wrap: break-word;
}

.container button {
  margin-top: 5vh;
  font-size: 130%;
  width: 300px;
  border-radius: 10px;
}
</style>
