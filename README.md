# request plot (WIP)

## Usage

Input:

```js
const tree = undici({
  url: 'https://example.com'
})

const source = print(tree)

console.log(format(source))
```

Output:

```js
import { request } from 'undici'
const { statusCode, headers, trailers, body } = await request(
  'https://example.com',
)
```