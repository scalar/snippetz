<script setup lang="ts">
import CodeExample from './components/CodeExample.vue'
</script>

<template>
  <h1>
    Snippetz
  </h1>

  <div class="introduction">
    <p>
      @scalar/snippetz is a library that generates code snippets for making HTTP requests in Node.js and the browser.
    </p>
  </div>

  <h2>
    Examples
  </h2>

  <div class="examples">
    <CodeExample target="node" client="undici" :request="{ url: 'https://example.com' }"/>
    <CodeExample target="node" client="undici" :request="{ url: 'https://example.com', method: 'POST' }"/>
    <CodeExample target="node" client="undici" :request="{ url: 'https://example.com', method: 'POST', headers: [
      {
        name: 'Content-Type',
        value: 'application/json'
      }
    ]
    }"/>
    <CodeExample target="node" client="undici" :request="{
      url: 'https://example.com',
      method: 'POST',
      headers: [
        {
          name: 'Content-Type',
          value: 'application/json; charset=utf-8',
        },
      ],
      postData: {
        mimeType: 'application/json',
        text: JSON.stringify({ hello: 'world' })
      }
    }"/>
  </div>
</template>

<style scoped>
h1, h2 {
  font-size: 1.2rem;
  margin: 2rem 0;
}
.introduction {
  margin-bottom: 2rem;
  max-width: 500px;
  line-height: 1.6;
  font-size: 1.2rem;
}
.examples {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

</style>
