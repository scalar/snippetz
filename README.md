# request plot (WIP)


## Quickstart

```js
import { format, print, undici } from 'request-plot'

const tree = undici({
  url: 'https://example.com'
})

console.log(format(print(tree)))

// import { request } from 'undici'
// const { statusCode, headers, trailers, body } = await request(
//   'https://example.com',
// )
```

## Usage

### Generate an abstract tree (AST)

```js
import { undici } from 'request-plot'

const tree = undici({
  url: 'https://example.com'
})
```

### Print the source code

```js
import { print } from 'request-plot'

const source = print(tree)
```

### Format the source code

```js
import { format } from 'request-plot'

console.log(format(source))
```