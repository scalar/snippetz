import { expect, test } from 'vitest'
import { print } from './print'

test('print', async () => {
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

  expect(await print(tree)).toBe(`const answer = 42;\n`)
})
