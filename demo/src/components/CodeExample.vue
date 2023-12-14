<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { snippetz } from '@scalar/snippetz'
import { objectToString } from '@scalar/snippetz-core'
import { getHighlighter } from 'shikiji'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const props = defineProps<{
  target: 'node',
  client: 'undici',
  request: any,
}>()

const code = ref('')
const highlightedConfiguration = ref('')
const highlightedResult = ref('')
const highlightedExample = ref('')

onMounted(async () => {
  // Code
  code.value = snippetz().print(props.target, props.client, props.request) ?? ''

  // Syntax highlighting for the code
  const shiki = await getHighlighter({
    themes: ['vitesse-dark'],
    langs: ['javascript', 'json'],
  })

  highlightedConfiguration.value = shiki.codeToHtml(JSON.stringify(props.request, null, 2), { lang: 'json', theme: 'vitesse-dark' })
  highlightedResult.value = shiki.codeToHtml(code.value, { lang: 'javascript', theme: 'vitesse-dark' })
  highlightedExample.value = shiki.codeToHtml(`import { snippetz } from '@scalar/snippetz'

const snippet = snippetz().print('${props.target}', '${props.client}', ${objectToString(props.request)})`, {
    lang: 'javascript',
    theme: 'vitesse-dark'
  })
})
</script>

<template>
  <div class="code-block">
    <TabGroup>
      <TabList>
        <Tab as="template" v-slot="{ selected }">
          <button type="button" class="tab" :class="{'tab--selected': selected}">
            Request
          </button>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
          <button type="button" class="tab" :class="{'tab--selected': selected}">
            Code
          </button>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
          <button type="button" class="tab" :class="{'tab--selected': selected}">
            Result
          </button>
        </Tab>
      </TabList>
      <div class="code-block-content">
        <TabPanels>
          <TabPanel>
            <div class="source" v-html="highlightedConfiguration" />
          </TabPanel>
          <TabPanel>
            <div class="source" v-html="highlightedExample" />
          </TabPanel>
          <TabPanel>
            <div class="source" v-html="highlightedResult" />
          </TabPanel>
        </TabPanels>
      </div>
    </TabGroup>
  </div>
</template>

<style scoped>
.code-block-content {
  border: 2px solid #343a40;
  border-radius: 0 6px 6px 6px;
  overflow: hidden;
  font-family: monospace;
  width: 100%;
  max-width: 600px;
}

.title {
  background: #343a40;
  color: #868e96;
  padding: 0.75em 1rem calc(0.75em + 2px);
}

.divider {
  color: #868e96;
  background: #343a40;
  padding: 0.75em 1rem calc(0.75em + 2px);
  border-bottom: 2px solid #343a40;
}

:deep(.source) pre {
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

.tab {
  background: none;
  border: none;
  background-color: #343a40;
  padding: 5px 10px;
  font-family: sans-serif;
  font-size: 0.8rem;
  border-radius: 6px 6px 0 0;
  opacity: 0.6;
  margin-right: 4px;
  outline: none;
}

.tab--selected {
  color: #fff;
  opacity: 1;
}
</style>
