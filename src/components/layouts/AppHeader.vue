<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import { useProductStore } from '@/stores/useProductStore.ts'
import { storeToRefs } from 'pinia'

const productStore = useProductStore()
const { search } = storeToRefs(productStore);
</script>

<template>
  <div class="header pa-16 flex justify-between items-center">
    <div class="logo">VueShop</div>
    <div class="search-bar">
      <SearchBar :model-value="search" :placeholder="'Search product...'" />
    </div>
    <div class="menu flex items-center justify-center ga-8">
      <a class="decoration-none menu-item" href="#">Home</a>
      <a class="decoration-none menu-item" href="#">Add Product</a>
      <div class="cart">
        <a class="decoration-none" href="#">Cart</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  //height: 64px;
  background-color: #b6b7fd;
  max-width: 1200px;

  @media (max-width: 1200px) {
    max-width: 840px;
  }
  margin: 0 auto;

  .logo {
    font-size: 24px;
  }
  .menu {
    text-transform: uppercase;

    .menu-item {
      color: #000;

      &:hover {
        color: #ea0007;
      }
    }
    .cart {
      border: 1px solid #dfdfdf;
      background-color: red;
      padding: 10px;
      border-radius: 8px;

      & > a {
        color: #fff;
      }
    }
  }
}
</style>
