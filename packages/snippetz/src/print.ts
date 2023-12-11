import { generate } from 'abstract-syntax-tree'

export function print(tree: any) {
  return generate(tree)
}
