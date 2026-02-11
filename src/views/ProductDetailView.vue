<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getProductById } from '@/services/product.service.ts'
import type { ProductForGetDto } from '@/models/dto/product-for-get.dto.ts'
import { calculateDiscountPercentage } from '@/helpers/utils.ts'
import Counter from '@/components/Counter.vue'

const route = useRoute()
const productId = Number(route.params.id)
const product = ref<ProductForGetDto>()
const cartCount = ref<number>(1)
onMounted(async () => {
  const { data } = await getProductById(productId)

  product.value = data
})

function handleCount(event: number) {
  console.log('handleCount', event)
  cartCount.value = event
}
</script>

<template>
  <div class="flex ga-20 my-20">
    <div class="img-container">
      <img :src="product?.images[0]" alt="" style="width: 400px; height: 500px" />
    </div>
    <div class="detail pa-20 flex flex-column ga-20">
      <p class="title">{{ product?.title }}</p>
      <p>{{ product?.description }}</p>
      <p>
        <span class="pr-12">⭐️</span><span>{{ product?.rating }}</span>
      </p>
      <p class="price">
        <span class="pr-12">{{
          calculateDiscountPercentage(product?.price, product?.discountPercentage)
        }}</span>
        <span>$</span>
      </p>
      <div>
        <div class="flex ga-8">
          <div v-for="(item, index) in product?.images" :key="index">
            <img class="small-img" :src="item" alt="" width="100px" height="100px" />
          </div>
        </div>
      </div>
      <div class="cart">
        <span class="pr-20"
          ><span>Select quantity (Max {{ product?.minimumOrderQuantity }}) </span></span
        >
        <Counter :max-quantity="product?.minimumOrderQuantity" @update="handleCount" />
      </div>
      <div>
        <button>
          <span>Add <span v-if="cartCount > 1">{{cartCount}}</span> to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-container,
.detail {
  border-radius: 10px;
  border: 1px solid #dfdfdf;
}

.detail {
  width: 100%;

  .title {
    font-weight: bold;
    color: red;
    font-size: 18px;
  }
  .price {
    font-weight: bold;
    font-size: 32px;
  }

  .small-img {
    border-radius: 10px;
    border: 1px solid #dfdfdf;
  }
}
</style>
