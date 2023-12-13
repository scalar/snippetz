<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { snippetz } from '@scalar/snippetz'
import { undici } from '@scalar/snippetz-plugin-undici'
import { getHighlighter } from 'shikiji'

const props = defineProps<{
  target: 'undici',
  request: any,
}>()

const code = ref('')
const highlightedCode = ref('')
const highlightedRequest = ref('')

onMounted(async () => {
  // Code
  const source = undici(props.request)
  code.value = snippetz().get(source)

  // Syntax highlighting for the code
  const shiki = await getHighlighter({
    themes: ['nord'],
    langs: [source.target, 'json'],
  })

  await shiki.loadTheme('vitesse-dark')

  highlightedCode.value = shiki.codeToHtml(code.value, { lang: source.target, theme: 'vitesse-dark' })
  highlightedRequest.value = shiki.codeToHtml(JSON.stringify(props.request, null, 2), { lang: 'json', theme: 'vitesse-dark' })
})
</script>

<template>
  <div class="code-block">
    <div class="title">
      {{ target }}
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
