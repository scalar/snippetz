import { expect, describe } from 'vitest'
import { snippetz } from './snippetz'

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

describe('snippetz', async () => {
  const snippet = await snippetz().get({
    target: 'js',
    tree,
  })

  expect(snippet).toBe(`const answer = 42\n`)
})
