<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { snippetz } from '@scalar/snippetz'
import { objectToString } from '@scalar/snippetz-core'
import { getHighlighter } from 'shikiji'

const props = defineProps<{
  target: 'node',
  client: 'undici',
  request: any,
}>()

const code = ref('')
const highlightedCode = ref('')
const highlightedRequest = ref('')

onMounted(async () => {
  // Code
  code.value = snippetz().print('node', props.client, props.request) ?? ''

  // Syntax highlighting for the code
  const shiki = await getHighlighter({
    themes: ['vitesse-dark'],
    langs: ['javascript'],
  })

  highlightedCode.value = shiki.codeToHtml(code.value, { lang: 'javascript', theme: 'vitesse-dark' })
  highlightedRequest.value = shiki.codeToHtml(`import { snippetz } from '@scalar/snippetz'

const snippet = snippetz().print('node', ${props.client}, ${objectToString(props.request)}`, {
    lang: 'javascript',
    theme: 'vitesse-dark'
  })
})
</script>

<template>
  <div class="code-block">
    <div class="title">
      {{ target }}/{{ client }}
    </div>
    <div class="configuration" v-html="highlightedRequest" />
    <div class="container" v-html="highlightedCode" />
  </div>
</template>

<style scoped>
.code-block {
  border: 2px solid #343a40;
  border-radius: 4px;
  font-family: monospace;
}
.configuration {
  border-bottom: 2px solid #343a40;
}

.title {
  background: #343a40;
  color: #868e96;
  padding: 0.5rem 1rem calc(0.5rem + 2px);
}

:deep(.configuration) pre,
:deep(.container) pre {
  margin: 0;
  padding: 0.75rem;
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
