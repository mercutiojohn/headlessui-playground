<script setup>
import Menu from '@/components/examples/Menu.vue'
import ListBox from '@/components/examples/ListBox.vue'
import ComboBox from '@/components/examples/ComboBox.vue'
import Dialog from '@/components/examples/Dialog.vue'
</script>

<template>
  <main>
    <div class="grid grid-cols-3 gap-2 p-10 page-w">
      <div class="card dark">
        <Menu />
      </div>
      <div class="card">
        <ListBox />
      </div>
      <div class="card">
        <ComboBox />
      </div>
      <div class="card">
        <Dialog />
      </div>
    </div>
  </main>
</template>

<style scoped>
.card {
  @apply h-60 border-1 border-light-900 bg-light-400 rounded-lg p-10 flex flex-col items-stretch justify-center;
}
.card.dark {
  @apply bg-dark-50 border-transparent;
}
</style>
