<script setup>
import Menu from '@/components/examples/Menu.vue'
import ListBox from '@/components/examples/ListBox.vue'
</script>

<template>
  <main>
    <div class="grid grid-cols-3 gap-2 p-10">
      <div class="card">
        <Menu />
      </div>
      <div class="card">
        <ListBox />
      </div>
      <div class="card">
        
      </div>
      <div class="card">
        
      </div>
    </div>
  </main>
</template>

<style scoped>
.card {
  @apply h-60 bg-dark-50 rounded-lg p-10;
}
</style>
