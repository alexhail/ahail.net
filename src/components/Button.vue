<template>
    <RouterLink v-if="props.router" :to="{ name: props.to }" class="button">
      <div class="button-container">
        <div class="button-content">
          <slot></slot>
        </div>
      </div>
    </RouterLink>
    <a v-else class="button" :to="{ name: props.to }">
      <div class="button-container">
        <div class="button-content">
          <slot></slot>
        </div>
      </div>
    </a>
</template>

<script lang="ts" setup>
  import { RouterLink, RouterView } from 'vue-router'

  const props = defineProps({
    router: Boolean,
    to: { type: String, default: "home" }
  })
</script>