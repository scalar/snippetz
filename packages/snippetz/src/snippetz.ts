import { format } from './format'
import type { Source } from './types'

export type SnippetOptions = {}

const defaultOptions = {}

export function snippetz() {
  return {
    get(source: Source, options?: Partial<SnippetOptions>) {
      options = {
        ...defaultOptions,
        ...options,
      }

      return format(source)
    },
  }
}
