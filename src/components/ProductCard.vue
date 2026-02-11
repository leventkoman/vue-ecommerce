<script setup lang="ts">
import type { ProductCardProps } from '@/models/props/product-card-props.ts'
import { calculateDiscountPercentage } from '@/helpers/utils.ts'

const props = withDefaults(defineProps<ProductCardProps>(), {});
</script>

<template>
  <div class="card pb-8">
    <img :src="thumbnail" :alt="title" />
    <div class="px-8 flex flex-column ga-8">
      <div class="brand-name-wrapper">
        <span class="fw-bold pr-4">{{ brand }}</span>
        <span>{{ description }}</span>
      </div>
      <div><span class="pr-4">⭐</span>️{{ rating }}</div>
      <div class="price-container">
        <div class="price py-12" v-if="discountPercentage === 0">
          <span class="pr-4">{{ price }}</span
          ><span>$</span>
        </div>
        <div class="discount" v-else>
          <span class="price-discount pr-8">{{ price }}</span>
          <span class="discount-badge px-2">{{ discountPercentage }}</span>
          <div class="pl-12 py-8">
            <span class="pr-4">{{ calculateDiscountPercentage(price, discountPercentage) }}</span
            ><span>$</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #dfdfdf;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    box-shadow: 5px 10px 18px #dfdfdf;
  }

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
  .price-container {
    display: flex;

    .price {
      color: #000;
      font-size: 1.3rem;
    }

    .discount {
      .price-discount {
        color: #000;
        opacity: 0.4;
        text-decoration: line-through;
      }
      .discount-badge {
        width: auto;
        background-color: #009319;
        color: #fff;
        border-radius: 4px;
      }
    }
  }
}

.brand-name-wrapper {
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
}
</style>
