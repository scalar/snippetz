# Snippetz

[![CI](https://github.com/scalar/snippetz/actions/workflows/ci.yml/badge.svg)](https://github.com/scalar/snippetz/actions/workflows/ci.yml)
[![Release](https://github.com/scalar/snippetz/actions/workflows/release.yml/badge.svg)](https://github.com/scalar/snippetz/actions/workflows/release.yml)
[![Contributors](https://img.shields.io/github/contributors/scalar/snippetz)](https://github.com/scalar/snippetz/graphs/contributors)
[![GitHub License](https://img.shields.io/github/license/scalar/snippetz)](https://github.com/scalar/snippetz/blob/main/LICENSE)
[![Discord](https://img.shields.io/discord/1135330207960678410?style=flat&color=5865F2)](https://discord.gg/8HeZcRGPFS)

> [!WARNING]
> This package is in early development. Don’t use it in production!

A modern way to generate code examples for different languages.

## Installation

```
npm install @scalar/snippetz @scalar/snippetz-plugin-undici
```

## Usage

```js
import { snippetz } from '@scalar/snippetz'
import { undici } from '@scalar/snippetz-plugin-undici'

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
import { undici } from '@scalar/snippetz-plugin-undici'

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

## Community

We are API nerds. You too? Let’s chat on Discord: <https://discord.gg/8HeZcRGPFS>

## Contributors

<!-- readme: collaborators,contributors -start -->
<!-- readme: collaborators,contributors -end -->

Contributions are welcome! Read [`CONTRIBUTING`](https://github.com/scalar/snippetz/blob/main/CONTRIBUTING).

## License

The source code in this repository is licensed under [MIT](https://github.com/scalar/snippetz/blob/main/LICENSE).