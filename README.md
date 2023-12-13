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
npm install @scalar/snippetz
```

## Usage

```js
import { snippetz } from '@scalar/snippetz'

const snippet = snippetz().print('node', 'undici', {
  url: 'https://example.com'
})

/* Output */

// import { request } from 'undici'
//
// const { statusCode, body } = await request(
//   'https://example.com',
// )
```

## API

### Get all plugins

```js
import { snippetz } from '@scalar/snippetz'

const snippet = snippetz().plugins()

/* Output */

// [
//   {
//     target: 'node',
//     client: 'undici',
//   }
// ]
```

### Check if a plugin is loaded

```js
import { snippetz } from '@scalar/snippetz'

const snippet = snippetz().hasPlugin('node', 'undici')

/* Output */

// true
```

### Generate a snippet

```js
import { undici } from '@scalar/snippetz-plugin-undici'

const source = undici({
  url: 'https://example.com'
})

console.log(source.code)

// import { request } from 'undici'

// const { statusCode, body } = await request(
//   'url': 'https://example.com',
// )
```

## Community

We are API nerds. You too? Let’s chat on Discord: <https://discord.gg/8HeZcRGPFS>

## Contributors

<!-- readme: collaborators,contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/hanspagel">
            <img src="https://avatars.githubusercontent.com/u/1577992?v=4" width="100;" alt="hanspagel"/>
            <br />
            <sub><b>hanspagel</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: collaborators,contributors -end -->

Contributions are welcome! Read [`CONTRIBUTING`](https://github.com/scalar/snippetz/blob/main/CONTRIBUTING).

## License

The source code in this repository is licensed under [MIT](https://github.com/scalar/snippetz/blob/main/LICENSE).