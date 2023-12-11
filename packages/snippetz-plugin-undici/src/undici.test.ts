import { expect, describe, it } from 'vitest'
import { undici } from './undici'
import { print } from '@scalar/snippetz'

describe('undici', () => {
  it('has import', () => {
    const source = undici({
      url: 'https://example.com',
    })

    expect(print(source)).toContain(`import {request} from "undici"`)
  })

  it('returns a basic request', () => {
    const source = undici({
      url: 'https://example.com',
    })

    expect(print(source)).toBe(`import {request} from "undici";
const {statusCode, headers, body} = await request("https://example.com");
`)
  })

  it('returns a POST request', () => {
    const source = undici({
      url: 'https://example.com',
      method: 'post',
    })

    expect(print(source)).toBe(`import {request} from "undici";
const {statusCode, headers, body} = await request("https://example.com", {
  "method": "POST"
});
`)
  })

  it('has headers', () => {
    const source = undici({
      url: 'https://example.com',
      headers: [
        {
          name: 'Content-Type',
          value: 'application/json',
        },
      ],
    })

    expect(print(source)).toBe(`import {request} from "undici";
const {statusCode, headers, body} = await request("https://example.com", {
  "headers": {
    "Content-Type": "application/json"
  }
});
`)
  })

  it('has JSON body', () => {
    const source = undici({
      url: 'https://example.com',
      headers: [
        {
          name: 'Content-Type',
          value: 'application/json',
        },
      ],
      postData: {
        mimeType: 'application/json',
        text: JSON.stringify({
          hello: 'world',
        }),
      },
    })

    expect(print(source)).toBe(`import {request} from "undici";
const {statusCode, headers, body} = await request("https://example.com", {
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "hello": "world"
  }
});
`)
  })

  it('has query string', () => {
    const source = undici({
      url: 'https://example.com',
      headers: [
        {
          name: 'Content-Type',
          value: 'application/json',
        },
      ],
      queryString: [
        {
          name: 'foo',
          value: 'bar',
        },
        {
          name: 'bar',
          value: 'foo',
        },
      ],
    })

    expect(print(source)).toBe(`import {request} from "undici";
const {statusCode, headers, body} = await request("https://example.com?foo=bar&bar=foo", {
  "headers": {
    "Content-Type": "application/json"
  }
});
`)
  })
})
