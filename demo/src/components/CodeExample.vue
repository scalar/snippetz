<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { snippetz } from '@scalar/snippetz'
import { undici } from '@scalar/snippetz-plugin-undici'

const props = defineProps<{
  target: 'undici',
  request: any,
}>()

const code = ref('')

onMounted(async () => {
  code.value = await snippetz().get(undici(props.request))
})
</script>

<template>
  <div class="code-block">
    <div class="title">
      {{ target }}
    </div>
    <div class="container">
      <pre><code>{{ code }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.code-block {
  border: 2px solid #343a40;
  border-radius: 4px;
  font-family: monospace;
}

.title {
  background: #343a40;
  color: #868e96;
  padding: 0.5rem 1rem calc(0.5rem + 2px);
}

.container {
  padding: 1rem;
}

pre {
  margin: 0;
}

pre code {
  color: #adb5bd;
  display: block;
  background: none;
  white-space: pre;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  max-width: 100%;
  min-width: 100px;
  padding: 0;
}
</style>
