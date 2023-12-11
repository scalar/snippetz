# Snippetz

[![CI](https://github.com/scalar/snippetz/actions/workflows/ci.yml/badge.svg)](https://github.com/scalar/snippetz/actions/workflows/ci.yml)
[![Release](https://github.com/scalar/snippetz/actions/workflows/release.yml/badge.svg)](https://github.com/scalar/snippetz/actions/workflows/release.yml)
[![Contributors](https://img.shields.io/github/contributors/scalar/snippetz)](https://github.com/scalar/snippetz/graphs/contributors)
[![GitHub License](https://img.shields.io/github/license/scalar/snippetz)](https://github.com/scalar/snippetz/blob/main/LICENSE)
[![Discord](https://img.shields.io/discord/1135330207960678410?style=flat&color=5865F2)](https://discord.gg/8HeZcRGPFS)

> [!WARNING]
> It’s pretty early. Don’t use this in production

A modern way to generate code examples for different languages.

## Installation

```
npm install @scalar/snippetz
```

## Usage

```js
import { snippetz, undici } from '@scalar/snippetz'

const snippet = snippetz().get(
  undici({
    url: 'https://example.com'
  })
)

/* Output */

// import { request } from 'undici'
// const { statusCode, headers, body } = await request(
//   'https://example.com',
// )
```

## API

### Generate an abstract tree (AST)

```js
import { undici } from '@scalar/snippetz'

const source = undici({
  url: 'https://example.com'
})

console.log(source)
```

### Print the source code

```js
import { print } from '@scalar/snippetz'

console.log(print({
  target: 'js',
  tree: …
}))
```

### Format the source code

```js
import { format } from '@scalar/snippetz'

console.log(format({
  target: 'js',
  tree: …
}))
```
