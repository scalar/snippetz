# Snippetz

[![CI](https://github.com/scalar/snippetz/actions/workflows/ci.yml/badge.svg)](https://github.com/scalar/snippetz/actions/workflows/ci.yml)
[![Release](https://github.com/scalar/snippetz/actions/workflows/release.yml/badge.svg)](https://github.com/scalar/snippetz/actions/workflows/release.yml)
[![Contributors](https://img.shields.io/github/contributors/scalar/snippetz)](https://github.com/scalar/snippetz/graphs/contributors)
[![GitHub License](https://img.shields.io/github/license/scalar/snippetz)](https://github.com/scalar/snippetz/blob/main/LICENSE)
[![Discord](https://img.shields.io/discord/1135330207960678410?style=flat&color=5865F2)](https://discord.gg/8HeZcRGPFS)

## Quickstart

```js
import { snippetz, undici } from '@scalar/snippetz'

const snippet = snippetz().get(
  undici({
    url: 'https://example.com'
  })
)
```

<!-- ```js
import { format, print, undici } from '@scalar/snippetz'

const tree = undici({
  url: 'https://example.com'
})

console.log(format(print(tree)))
``` -->

Output:

```
// import { request } from 'undici'
// const { statusCode, headers, trailers, body } = await request(
//   'https://example.com',
// )
```

## Usage

### Generate an abstract tree (AST)

```js
import { undici } from '@scalar/snippetz'

const tree = undici({
  url: 'https://example.com'
})
```

### Print the source code

```js
import { print } from '@scalar/snippetz'

const source = print(tree)
```

### Format the source code

```js
import { format } from '@scalar/snippetz'

console.log(format(source))
```