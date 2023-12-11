import * as prettier from 'prettier'
import { print } from './print'

export async function format(source: any) {
  const target = source.target

  if (target === 'js') {
    return await prettier.format(print(source), {
      semi: false,
      parser: 'babel',
      singleQuote: true,
    })
  }

  throw new Error(`Unsupported target: ${source.target}`)
}
