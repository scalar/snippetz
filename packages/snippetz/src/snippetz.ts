import type { Source } from '@scalar/snippetz-core'
import { undici } from '@scalar/snippetz-plugin-undici'
export type SnippetOptions = {}

const defaultOptions = {}

export function snippetz() {
  const plugins = [undici]

  return {
    targets() {
      return plugins.map((plugin) => plugin().target)
    },
    clients() {
      return plugins.map((plugin) => plugin().client)
    },
    get(source: Source, options?: Partial<SnippetOptions>) {
      options = {
        ...defaultOptions,
        ...options,
      }

      return source.code
    },
  }
}
