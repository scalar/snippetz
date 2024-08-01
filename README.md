# Snippetz

[![CI](https://github.com/scalar/snippetz/actions/workflows/ci.yml/badge.svg)](https://github.com/scalar/snippetz/actions/workflows/ci.yml)
[![Contributors](https://img.shields.io/github/contributors/scalar/snippetz)](https://github.com/scalar/snippetz/graphs/contributors)
[![GitHub License](https://img.shields.io/github/license/scalar/snippetz)](https://github.com/scalar/snippetz/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/%40scalar/snippetz)](https://www.npmjs.com/package/@scalar/snippetz)
[![Discord](https://img.shields.io/discord/1135330207960678410?style=flat&color=5865F2)](https://discord.gg/scalar)

A modern way to generate code examples for different languages.

## Installation

```bash
npm install @scalar/snippetz
```

## Usage

```ts
import { snippetz } from '@scalar/snippetz'

const snippet = snippetz().print('node', 'undici', {
  url: 'https://example.com',
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

```ts
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

```ts
import { snippetz } from '@scalar/snippetz'

const snippet = snippetz().hasPlugin('node', 'undici')

/* Output */

// true
```

### Lean usage

You can also just use one specific plugin to keep your bundle size small.

```ts
import { undici } from '@scalar/snippetz/plugins/node/undici'

const source = undici({
  url: 'https://example.com',
})

console.log(source.code)

// import { request } from 'undici'

// const { statusCode, body } = await request(
//   'url': 'https://example.com',
// )
```

## Community

We are API nerds. You too? Let’s chat on Discord: <https://discord.gg/scalar>

## Contributors

Contributions are welcome! Read [`CONTRIBUTING`](https://github.com/scalar/snippetz/blob/main/CONTRIBUTING).

<!-- readme: collaborators,contributors -start -->
<table>
	<tbody>
		<tr>
            <td align="center">
                <a href="https://github.com/hanspagel">
                    <img src="https://avatars.githubusercontent.com/u/1577992?v=4" width="100;" alt="hanspagel"/>
                    <br />
                    <sub><b>hanspagel</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/marclave">
                    <img src="https://avatars.githubusercontent.com/u/6176314?v=4" width="100;" alt="marclave"/>
                    <br />
                    <sub><b>marclave</b></sub>
                </a>
            </td>
		</tr>
	<tbody>
</table>
<!-- readme: collaborators,contributors -end -->

## License

The source code in this repository is licensed under [MIT](https://github.com/scalar/snippetz/blob/main/LICENSE).
