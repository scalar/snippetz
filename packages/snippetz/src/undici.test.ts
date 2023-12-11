import { expect, describe, it } from 'vitest'
import { undici } from './undici'
import { print } from './print'

describe('undici', () => {
  it('has import', () => {
    const source = undici({
      url: 'https://example.com',
    })

    expect(print(source)).toContain(`import {request} from "undici"`)
  })

  it('basic request', () => {
    const source = undici({
      url: 'https://example.com',
    })

    expect(print(source)).toContain(`await request("https://example.com")`)
  })

  it('POST request', () => {
    const source = undici({
      url: 'https://example.com',
      method: 'post',
    })

    expect(print(source)).toContain(`await request("https://example.com", {
  "method": "POST"
})`)
  })
})
