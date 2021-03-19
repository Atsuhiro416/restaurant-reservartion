<template>
  <div class="search">
    <input type="text" v-model="keyword">
  </div>
</template>

<script>
export default {
  props: ["stores"],
  data() {
    return {
      keyword: "",
      searchedStores: {}
    };
  },
  computed: {
    filteredStores() {
      const filterStores = {};
      for(const i in this.stores) {
        const store = this.stores[i];
        if(store.name.indexOf(this.keyword) !== -1 ||
            store.category.indexOf(this.keyword) !== -1) {
              filterStores[i] = store;
            }
      }
      return filterStores;
    },
  },
}
</script>
