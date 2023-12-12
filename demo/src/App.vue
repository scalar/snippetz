<script setup lang="ts">
import CodeExample from './components/CodeExample.vue'
</script>

<template>
  <h1>
    @scalar/snippetz
  </h1>

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
h1 {
  font-size: 1.4rem;
  margin: 2rem 0;
}
.examples {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
