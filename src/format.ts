import * as prettier from 'prettier'

export async function format(source: string) {
  return await prettier.format(source, {
    semi: false,
    parser: 'babel',
    singleQuote: true,
  })
}
