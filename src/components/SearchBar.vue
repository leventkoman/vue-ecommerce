<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  placeholder: String,
  modelValue: String,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();
const timeout = ref<number | null>(null)
function onSearch(event: Event) {
  const value = (event.target as HTMLInputElement).value;

  if (timeout.value) {
    clearTimeout(timeout.value);
  }

  timeout.value = setTimeout(() => {
    emit('update:modelValue', value);
  }, 500)
}
</script>

<template>
  <input
    :value="modelValue"
    :placeholder="placeholder ?? 'search product'"
    @input="onSearch"
    type="search"
  />
</template>

<style scoped>
input {
  height: 40px;
  border-radius: 20px;
  min-width: 350px;
  font-size: 18px;
  padding: 0 16px;
  outline: none;
  border: 1px solid #dfdfdf;
  &:focus {
    border: 1px solid red;
  }
}
</style>
