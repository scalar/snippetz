export function undici(request: any) {
  return {
    type: 'Program',
    sourceType: 'module',
    body: [
      {
        type: 'ImportDeclaration',
        specifiers: [
          {
            type: 'ImportSpecifier',
            local: { type: 'Identifier', name: 'request' },
            imported: { type: 'Identifier', name: 'request' },
          },
        ],
        source: { type: 'Literal', value: 'undici' },
      },
      {
        type: 'VariableDeclaration',
        kind: 'const',
        declarations: [
          {
            type: 'VariableDeclarator',
            id: {
              type: 'ObjectPattern',
              properties: [
                {
                  type: 'Property',
                  key: { type: 'Identifier', name: 'statusCode' },
                  value: { type: 'Identifier', name: 'statusCode' },
                  kind: 'init',
                  computed: false,
                  method: false,
                  shorthand: true,
                },
                {
                  type: 'Property',
                  key: { type: 'Identifier', name: 'headers' },
                  value: { type: 'Identifier', name: 'headers' },
                  kind: 'init',
                  computed: false,
                  method: false,
                  shorthand: true,
                },
                {
                  type: 'Property',
                  key: { type: 'Identifier', name: 'trailers' },
                  value: { type: 'Identifier', name: 'trailers' },
                  kind: 'init',
                  computed: false,
                  method: false,
                  shorthand: true,
                },
                {
                  type: 'Property',
                  key: { type: 'Identifier', name: 'body' },
                  value: { type: 'Identifier', name: 'body' },
                  kind: 'init',
                  computed: false,
                  method: false,
                  shorthand: true,
                },
              ],
            },
            init: {
              type: 'AwaitExpression',
              argument: {
                type: 'CallExpression',
                callee: { type: 'Identifier', name: 'request' },
                arguments: [{ type: 'Literal', value: request.url }],
              },
            },
          },
        ],
      },
    ],
  }
}
