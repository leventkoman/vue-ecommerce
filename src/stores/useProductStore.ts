import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { ProductForGetDto } from '@/models/dto/product-for-get.dto.ts'
import { getSearchProducts } from '@/services/product.service.ts'

export const useProductStore = defineStore('products', () => {
  const search = ref<string>('');
  const products = ref<ProductForGetDto[]>([]);

  async function fetchProducts(query: string) {
    query = query.toLowerCase().trim();
    const { data } = await getSearchProducts(query);
    products.value = data.products;
  }

  function setSearch(query: string) {
    search.value = query;

    setTimeout(async () => {
      await fetchProducts(query);
    })
  }

  return {
    search,
    products,
    fetchProducts,
  }
})
