<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<{ maxQuantity?: number }>(), {})

const emit = defineEmits<{
  (e: 'update', value: number): void
}>()

const count = ref<number>(1)
// const count = computed({
//   get: () => props.modelValue,
//   set: (value: number): void => emit('update:modelValue', value),
// })
const isIncrement = ref<boolean>(false)

function decrement() {
  if (count.value <= 1) return

  count.value--

  if (isIncrement.value) {
    isIncrement.value = false
    return
  }
  emit('update', count.value);
}

function increment() {
  count.value++
  if (count.value === props.maxQuantity) {
    isIncrement.value = true
  }

  emit('update', count.value);
}
</script>

<template>
  <button @click="decrement" class="count" style="margin-right: 10px">-</button>
  <input readonly class="count-input" type="text" :value="count" />
  <button :disabled="isIncrement" @click="increment" class="count" style="margin-left: 10px">
    +
  </button>
</template>

<style scoped>
.count {
  border-radius: 50%;
  background: transparent;
  border: 1px solid #dfdfdf;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
.count-input {
  width: 25px;
  text-align: center;
  border-radius: 12px;
  border: 1px solid #dfdfdf;
  width: 32px;
  height: 32px;
}
</style>
