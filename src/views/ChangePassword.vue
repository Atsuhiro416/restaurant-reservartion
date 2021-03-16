<template>
  <div id="change-password">
    <LoggedinHeader />
    <div class="container">
      <h2>パスワード再設定</h2>
      <p>新しいパスワードを入力</p>
      <input type="password" placeholder="新しいパスワード 6字以上" v-model="password">
      <div :class="{ 'error-message':isError, 'success-message':isOk }">
        <span>{{ message }}</span>
      </div>
      <button @click="changePassword">パスワード変更</button>
    </div>
  </div>
</template>

<script>
import LoggedinHeader from '../components/LoggedinHeader.vue';
import axios from "axios";

export default {
  data() {
    return {
      password: "",
      message: "",
      isError: false,
      isOk: false,
    };
  },
  methods: {
    changePassword() {
      axios
        .put("https://desolate-river-22304.herokuapp.com/api/user", {
          email: this.$store.state.user.email,
          password: this.password,
        })
        .then((response) => {
          this.$store.dispatch("changeUserData", {
            password: this.password,
          });
          console.log(response);
          this.isError = false;
          this.isOk = true;
          this.message = "";
          this.message = "パスワードが変更されました！";
          this.password = "";
        })
        .catch((error) => {
          console.log(error.response);
          this.isOk = false;
          this.isError = true;
          this.message = "";
          this.message = error.response.data.errors.password[0];
        });
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

.success-message {
  color: #55C500;
  font-size: 20px;
  margin-top: 4px;
}
.error-message {
  color: red;
  font-size: 20px;
  margin-top: 4px;
}

.container button {
  margin-top: 5vh;
  font-size: 130%;
  width: 300px;
  border-radius: 10px;
}

.container input {
  display: block;
  margin: 5vh auto 0;
  width: 400px;
  padding: 5px 10px;
  font-size: 130%;
}

@media screen and (max-width: 768px) {
  .container input {
    width: 80vw;
  }
}
</style>
