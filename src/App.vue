<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex h-15 p-l-10 justify-start items-center border-b-1 border-black-30">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

}
</style>
