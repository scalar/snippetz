import { expect, test } from 'vitest'
import { undici } from './undici'
import { print } from './print'
// import { parse } from 'abstract-syntax-tree'

test('undici', () => {
  // const source = `import { request } from 'undici'

  // const {
  //   statusCode,
  //   headers,
  //   trailers,
  //   body
  // } = await request('http://localhost:3000/foo')`

  // const tree = parse(source)

  // console.log(JSON.stringify(tree))

  const tree = undici({
    url: 'http://localhost:3000/foo',
  })

  expect(print(tree)).toBe(`import {request} from "undici";
const {statusCode, headers, trailers, body} = await request("http://localhost:3000/foo");
`)
})
