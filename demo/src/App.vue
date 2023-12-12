<script setup lang="ts">
import CodeExample from './components/CodeExample.vue'
</script>

<template>
  <div class="examples">
    <CodeExample target="undici" :request="{ url: 'https://example.com' }"/>
    <CodeExample target="undici" :request="{ url: 'https://example.com', method: 'POST' }"/>
    <CodeExample target="undici" :request="{ url: 'https://example.com', method: 'POST', headers: [
      {
        name: 'Content-Type',
        value: 'application/json'
      }
    ]
    }"/>
  </div>
</template>

<style scoped>
.examples {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
