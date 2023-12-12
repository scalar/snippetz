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
  border: 1px solid #999;
  border-radius: 4px;
}

.title {
  background: #999;
  color: #333;
  padding: 0.25rem 1rem;
}

.container {
  padding: 1rem;
}

pre {
  margin: 0;
}

pre code {
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
