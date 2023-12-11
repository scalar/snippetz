import { expect, describe } from 'vitest'
import { print } from './print'

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

describe('print', async () => {
  expect(
    await print({
      target: 'js',
      tree,
    })
  ).toBe(`const answer = 42;\n`)
})
