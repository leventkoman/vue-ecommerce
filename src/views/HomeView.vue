<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { getAllProducts } from '@/services/product.service.ts'
import type { ProductForGetDto } from '@/models/dto/product-for-get.dto.ts'
import ProductCard from '@/components/ProductCard.vue'
import { useRouter } from 'vue-router'
import { slugify } from '@/helpers/utils.ts'
import { useProductStore } from '@/stores/useProductStore.ts'
import { storeToRefs } from 'pinia'

// const products = ref<ProductForGetDto[]>([])
const router = useRouter()
const productStore = useProductStore()
const { search, products } = storeToRefs(productStore)
onMounted(async () => {
  const { data } = await getAllProducts()
  products.value = data.products
  console.log(data)
})

watch(search, (newValue) => {
  console.log("service", search)
  productStore.fetchProducts(newValue)
})

function gotoDetails(id: number, title: string) {
  console.log(id)
  router.push({
    name: 'product-detail',
    params: { id, slug: slugify(title) },
  })
}
</script>

<template>
  <div class="product-list">
    <ProductCard
      v-for="item in products"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :brand="item.brand"
      :price="item.price"
      :description="item.description"
      :rating="item.rating"
      :thumbnail="item.thumbnail"
      :discount-percentage="item.discountPercentage"
      @click="gotoDetails(item.id, item.title)"
    />
  </div>
</template>

<style scoped>
.product-list {
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
