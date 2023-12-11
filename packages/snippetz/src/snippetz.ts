import { format } from './format'
import { print } from './print'

export type SnippetOptions = {}

export class Snippetz {
  constructor(options?: SnippetOptions) {
    // console.log(options)
  }

  get(tree: any) {
    return format(print(tree))
  }
}

export function snippetz(tree: any) {
  return new Snippetz({
    tree,
  })
}
