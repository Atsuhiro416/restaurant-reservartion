<template>
  <div class="home">
    <LoggedinHeader />
    <StoreCard />
  </div>
</template>

<script>
import LoggedinHeader from '../components/LoggedinHeader.vue'
import StoreCard from '../components/StoreCard.vue'

export default {
  components: {
    LoggedinHeader,
    StoreCard,
  }
}
</script>

<style scoped>

</style>
