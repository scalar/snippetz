import { expect, describe, it } from 'vitest'
import { undici } from './undici'
import { print } from './print'

describe('undici', () => {
  it('basic request', () => {
    const tree = undici({
      url: 'https://example.com',
    })

    expect(print(tree)).toBe(`import {request} from "undici";
const {statusCode, headers, trailers, body} = await request("https://example.com");
`)
  })

  it('POST request', () => {
    const tree = undici({
      url: 'https://example.com',
      method: 'post',
    })

    expect(print(tree)).toBe(`import {request} from "undici";
const {statusCode, headers, trailers, body} = await request("https://example.com", {
  "method": "POST"
});
`)
  })
})
