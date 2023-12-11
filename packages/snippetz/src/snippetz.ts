import { format } from './format'
import { print } from './print'

export type SnippetOptions = {
  format: boolean
}

const defaultOptions = {
  format: true,
}

export function snippetz() {
  return {
    get(source: any, options?: Partial<SnippetOptions>) {
      options = {
        ...defaultOptions,
        ...options,
      }

      return options.format ? format(source) : print(source)
    },
  }
}
