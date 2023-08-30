<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="h-15 border-b-1 flex justify-start items-center border-light-900">
    <div class="flex p-l-10 p-r-10 justify-start items-center page-w">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
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
