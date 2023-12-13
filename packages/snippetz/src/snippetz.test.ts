import { expect, describe, it } from 'vitest'
import { snippetz } from './snippetz'

describe('snippetz', async () => {
  it('outputs basic JS', async () => {
    const snippet = snippetz().get({
      target: 'javascript',
      code: 'const answer = 42\n',
    })

    expect(snippet).toBe(`const answer = 42\n`)
  })

  it('loads undici by default', async () => {
    const targets = snippetz().targets()
    expect(targets).toStrictEqual(['node'])

    const clients = snippetz().clients()
    expect(clients).toStrictEqual(['undici'])
  })
})
