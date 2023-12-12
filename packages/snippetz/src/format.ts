import * as prettier from 'prettier'

export async function format(source: any) {
  const target = source.target

  if (target === 'js') {
    return await prettier.format(source.code, {
      semi: false,
      parser: 'babel',
      singleQuote: true,
    })
  }

  throw new Error(`Unsupported target: ${source.target}`)
}
