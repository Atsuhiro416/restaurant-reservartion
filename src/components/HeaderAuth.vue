<template>
  <header class="flex between">
    <div class="header-left">
      <h1>うまみっけ</h1>
    </div>
    <div class="header-right flex between">
      <div>
        <button class="header-btn" @click="$router.push('/')">ログイン</button>
      </div>
      <div>
        <button class="header-btn" @click="$router.push('/signup')">新規登録</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: transparent;
}
  .header-right {
  width: 25vw;
}
.header-btn {
  width: 150px;
  font-size: 15px;
}

@media screen and (max-width: 1024px) {
  .header-right {
    width: 40%;
  }
}

@media screen and (max-width: 768px) {
  .header-left {
    margin: 30px auto;
  }
  .header-left h1 {
    line-height: 40px;
  }
  .header-right {
    display: none;
  }
}
</style>
