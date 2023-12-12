import { expect, describe, it } from 'vitest'
import { snippetz } from './snippetz'

describe('snippetz', async () => {
  it('formats basic JS', async () => {
    const snippet = await snippetz().get({
      target: 'js',
      code: 'const    answer=42',
    })

    expect(snippet).toBe(`const answer = 42\n`)
  })
})
