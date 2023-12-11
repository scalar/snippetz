import { expect, test } from 'vitest'
import { format } from './format'

test('format', async () => {
  const source = `import {request} from "undici";
const {statusCode, headers, trailers, body} = await request("http://localhost:3000/foo");
`

  expect(await format(source)).toBe(`import { request } from 'undici'
const { statusCode, headers, trailers, body } = await request(
  'http://localhost:3000/foo',
)
`)
})
