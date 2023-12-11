import { expect, test } from 'vitest'
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

test('snippetz', async () => {
  const snippet = await snippetz().get(tree)

  expect(snippet).toBe(`const answer = 42\n`)
})
