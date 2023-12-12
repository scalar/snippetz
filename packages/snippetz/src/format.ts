import babel from 'prettier/plugins/babel'
import estree from 'prettier/plugins/estree'
import * as prettier from 'prettier/standalone'

export async function format(source: any) {
  const target = source.target

  if (target === 'js') {
    return await prettier.format(source.code, {
      semi: false,
      parser: 'babel',
      plugins: [babel, estree],
      singleQuote: true,
    })
  }

  throw new Error(`Unsupported target: ${source.target}`)
}
