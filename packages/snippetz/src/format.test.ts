import { expect, describe, it } from 'vitest'
import { format } from './format'

describe('format', async () => {
  it('formats basic JS', async () => {
    expect(
      await format({
        target: 'javascript',
        code: 'const    answer=42',
      })
    ).toBe(`const answer = 42\n`)
  })
})
