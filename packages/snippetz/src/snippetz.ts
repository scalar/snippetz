import { format } from './format'

export type SnippetOptions = {}

const defaultOptions = {}

export function snippetz() {
  return {
    get(source: any, options?: Partial<SnippetOptions>) {
      options = {
        ...defaultOptions,
        ...options,
      }

      return format(source)
    },
  }
}
