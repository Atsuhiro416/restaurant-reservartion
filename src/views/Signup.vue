<template>
  <div id="signup">
    <HeaderAuth></HeaderAuth>
    <div class="middle-wrapper flex around">
      <div class="eyecatch">
        <p>自分だけの<br>お気に入りを<br>見つけよう</p>
      </div>
      <div class="signup">
        <div class="card">
          <p>新規登録する</p>
          <div class="form">
            <input placeholder="メールアドレス" type="email" v-model="email">
            <div class="error-message">
              <span>{{ errorMessage.email }}</span>
            </div>
            <input placeholder="パスワード 6字以上" type="password" v-model="password">
            <div class="error-message">
              <span>{{ errorMessage.password }}</span>
            </div>
            <button @click="auth" class="card-register-btn">新規登録する</button>
          </div>
          <div class="card-bottom">
            <span>アカウントをお持ちの方：</span>
            <router-link :to="{ name: 'Login' }">ログイン</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth";
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: {
        email: "",
        password: this.$store.state.message.password,
      },
    };
  },
  methods: {
    auth() {
      const url = "https://desolate-river-22304.herokuapp.com";
      axios
        .post(url + "/api/register", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response);
          this.$router.push('/');
        })
        .catch(error => {
          console.log(error.response.data.errors);
          this.errorMessage.email = "";
          this.errorMessage.email = error.response.data.errors.email[0];
          this.errorMessage.password = "";
          this.errorMessage.password = error.response.data.errors.password[0];
        });
    },
  },
  components: {
    HeaderAuth
  }
}
</script>

<style scoped>
#signup {
  height: 100vh;
  width: 100vw;
  background: url(../assets/login-medium.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}
.middle-wrapper {
  position: absolute;
  height: 50vh;
  width: 100vw;
  top: 55%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.eyecatch {
  color: #fff;
}

.eyecatch p {
  font-size: 430%;
  font-weight: bolder;
  margin-top: 90px;
}


.card {
  width: 25vw;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  border: 0px solid #000;
  text-align: center;
}

.card p {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}

br {
  display: block;
  content: "";
  margin: 15px 0;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 4px;
}

.card-register-btn {
  margin-top: 20px;
  width: 200px;
  font-weight: bold;
  font-size: 14px;
}

.card-bottom {
  margin-top: 15px;
}

input {
  margin-top: 20px;
  width: 80%;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid black;
  color: black;
}

@media screen and (max-width: 1024px) {
  .header-right {
    width: 40%;
  }
  .card {
    width: 30vw;
  }
}

@media screen and (max-width: 768px) {
  .container {
    background: none;
  }
  .header-left {
    margin: 30px auto;
  }
  .header-left h1 {
    line-height: 40px;
  }
  .header-right {
    display: none;
  }
  .middle-wrapper {
    top: 40%;
  }
  .eyecatch {
    display: none;
  }
  .card {
    width: 90vw;
  }
  .card p {
    font-size: 30px;
  }
  input {
    margin-top: 40px;
    padding: 15px 20px;
    font-size: 20px;
  }
  .error-message {
    font-size: 20px;
  }
  .card-register-btn {
    width: 60vw;
    padding: 15px 0px;
    font-size: 20px;
    margin-top: 30px;
  }
  .card-bottom {
    margin-top: 30px;
    font-size: 17px;
  }
}
</style>
