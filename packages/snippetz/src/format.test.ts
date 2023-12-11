import { expect, describe, it } from 'vitest'
import { format } from './format'

const tree = {
  type: 'Program',
  body: [
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'answer',
          },
          init: {
            type: 'Literal',
            value: 42,
          },
        },
      ],
      kind: 'const',
    },
  ],
}

describe('format', async () => {
  it('formats basic JS', async () => {
    expect(
      await format({
        target: 'js',
        tree,
      })
    ).toBe(`const answer = 42\n`)
  })
})
