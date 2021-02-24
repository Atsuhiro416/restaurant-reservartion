<template>
  <header class="flex between">
    <div class="header-left">
      <router-link :to="{ name: 'Home' }">
        <h1>うまみっけ</h1>
      </router-link>
    </div>
    <div class="header-right flex aruond">
      <div class="header-icon">
        <router-link :to="{ name: 'History' }">
          <font-awesome-icon icon="history" size="3x" class="history-color" />
          <p>閲覧履歴</p>
        </router-link>
      </div>
      <div class="header-icon">
        <router-link :to="{ name: 'Favorite' }">
          <font-awesome-icon icon="star" size="3x" class="star-color" />
          <p>お気に入り</p>
        </router-link>
      </div>
      <div class="header-icon" @mouseover="mouseOverAction" @mouseleave="mouseLeaveAction">
        <div>
          <font-awesome-icon icon="user-circle" size="3x" class="user-color" />
          <p>ユーザー</p>
        </div>
        <ul v-if="submenu" class="submenu">
          <li>
            <router-link :to="{ name: 'User'}">
              <p>アカウント情報</p>
            </router-link>
          </li>
          <li>
            <p @click="logout">ログアウト</p>
          </li>
        </ul>
      </div>
    </div>
    <div id="hamburger" @click="hamburger()" :class="{'active':isClass}">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="menu-content" :class="{'open':isClass}">
      <ul class="menu-content_inner">
        <li>
          <router-link :to="{ name: 'User' }">
            <p>アカウント情報</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Favorite' }">
            <p>お気に入り一覧</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'History' }">
            <p>閲覧履歴</p>
          </router-link>
        </li>
        <li>
          <p @click="logout">ログアウト</p>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isClass: false,
      submenu: false,
    };
  },
  methods: {
    mouseOverAction() {
      this.submenu = true;
    },
    mouseLeaveAction() {
      this.submenu = false;
    },
    hamburger() {
      this.isClass = !this.isClass;
    },
    logout() {
      this.$store.dispatch('logout');
    },
  }
}
</script>

<style scoped>
header {
  border-bottom: 1px solid #000;
}

.header-icon {
  margin-right: 30px;
  cursor: pointer;
  width: 80px;
  /* background-color: pink; */
  text-align: center;
  position: relative;
}

.header-icon p {
  font-size: 12px;
  margin-top: 5px;
  color: #000;
}

.history-color {
  color: #000;
  opacity: .6;
}

.star-color {
  color: #ffa62b;
  opacity: .7;
}

.user-color {
  color: #16697a;
}

.submenu {
  width: 150px;
  margin-top: 5px;
  padding: 10px;
  list-style: none;
  background-color: #fff;
  border: 1px solid #000;
  position: absolute;
  top: 50;
  right: 0;
  cursor: default;
}

.submenu li {
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 15px;
}

.submenu li:hover {
  opacity: .5;
}

.submenu li p {
  font-size: 18px;
}

.search-color {
  color: #000;
  opacity: .6;
}

#hamburger {
  display: none;
}

#menu-btn-check {
  display: none;
}

.menu-content {
  display: none;
}

@media screen and (max-width: 768px) {
  .header-right {
    display: none;
  }
  #hamburger {
    display: initial;
    width: 40px;
    height: 40px;
    position: absolute;
    cursor: pointer;
    z-index: 100;
    top: 25px;
    right: 20px;
    transition: .4s;
  }
  #hamburger span {
    position: absolute;
    left: 2px;
    display: block;
    width: 35px;
    height: 4px;
    background-color: #ffa62b;
    transition: 0.8s;
  }
  #hamburger span:nth-last-of-type(1) {
    top: 10px;
  }
  #hamburger span:nth-last-of-type(2) {
    top: 20px;
  }
  #hamburger span:nth-last-of-type(3) {
    top: 30px;
  }

  #hamburger.active span:nth-of-type(1) {
    top: 20px;
    transform: rotate(225deg);
  }

  #hamburger.active span:nth-of-type(2) {
    opacity: 0;
  }
  #hamburger.active span:nth-of-type(3) {
    top: 20px;
    transform: rotate(-225deg);
  }

  .menu-content {
    display: block;
    width: calc(100%);
    height: 100%;
    text-align: center;
    transition: 0.2s;
    position: fixed;
    top: 0;
    left: calc(-100%);
    background: #fff;
    color: #333333;
    z-index: 50;
  }
  .menu-content ul {
    margin-top: 15vh;
  }
  .menu-content li {
    width: 100%;
    text-align: left;
  }
  .menu-content li p {
    color: #333333;
    margin: 70px 15px;
    padding: 5px;
    text-decoration: none;
    display: block;
    font-size: 200%;
    text-align: center;
    font-weight: bold;
  }
  .menu-content.open {
    left: 0;
  }
}
</style>
