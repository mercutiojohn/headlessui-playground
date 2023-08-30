<script setup>
import Menu from '@/components/Menu.vue'
</script>

<template>
  <main>
    <div class="grid grid-cols-3 gap-2">
      <div class="h-20 bg-dark-50"></div>
      <div class="h-20 bg-dark-50"></div>
      <div class="h-20 bg-dark-50">
        <Menu />
      </div>
    </div>
  </main>
</template>

<style scoped>
/* .card {
  @apply h-20 bg-dark-50;
} */
</style>
