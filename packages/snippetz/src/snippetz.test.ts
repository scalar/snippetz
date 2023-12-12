import { expect, describe, it } from 'vitest'
import { snippetz } from './snippetz'

describe('snippetz', async () => {
  it('formats basic JS', async () => {
    const snippet = snippetz().get({
      target: 'javascript',
      code: 'const answer = 42\n',
    })

    expect(snippet).toBe(`const answer = 42\n`)
  })
})
