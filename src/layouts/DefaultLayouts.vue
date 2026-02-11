<script setup lang="ts">
import AppHeader from '@/components/layouts/AppHeader.vue'
import AppFooter from '@/components/layouts/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <div class="container">
    <router-view />
  </div>
  <AppFooter />
</template>

<style scoped>
.container {
  //background: #fff;
  padding: 16px;
  max-width: 1200px;

  @media (max-width: 1200px) {
    max-width: 840px;
  }
  margin: 0 auto;
}
</style>
