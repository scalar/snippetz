import { generate } from 'astring'

export function print(source: any) {
  const target = source.target

  if (target === 'js') {
    return generate(source.tree)
  }

  throw new Error(`Unsupported target: ${source.target}`)
}
