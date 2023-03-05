<template>
  <nav>
    <RouterLink :to="{ name: 'home' }" class="button">Home</RouterLink>
    <RouterLink :to="{ name: 'resume' }" class="button">Resume</RouterLink>
    <RouterLink :to="{ name: 'portfolio' }" class="button">Portfolio</RouterLink>
  </nav>
</template>

<script lang="ts" setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>