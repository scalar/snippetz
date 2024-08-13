import type { TargetId, ClientId, Request } from './core'
import { undici } from './plugins/node/undici'
import { fetch as nodeFetch } from './plugins/node/fetch'
import { fetch as jsFetch } from './plugins/js/fetch'
import { ofetch as jsOFetch } from './plugins/js/ofetch'
import { ofetch as nodeOFetch } from './plugins/node/ofetch'

import {
  HTTPSnippet,
  type TargetId as Target,
  type HarRequest,
} from 'httpsnippet-lite'

export function snippetz() {
  const plugins = [undici, nodeFetch, jsFetch, jsOFetch, nodeOFetch]

  return {
    get(target: TargetId, client: ClientId, request: Partial<Request>) {
      const plugin = this.findPlugin(target, client)

      if (plugin) {
        return plugin(request)
      }
    },
    print(target: TargetId, client: ClientId, request: Partial<Request>) {
      return this.get(target, client, request)?.code
    },
    targets() {
      return (
        plugins
          // all targets
          .map((plugin) => plugin().target)
          // unique values
          .filter((value, index, self) => self.indexOf(value) === index)
      )
    },
    clients() {
      return plugins.map((plugin) => plugin().client)
    },
    plugins() {
      return plugins.map((plugin) => {
        const details = plugin()

        return {
          target: details.target,
          client: details.client,
        }
      })
    },
    findPlugin(target: TargetId, client: ClientId) {
      return plugins.find((plugin) => {
        const details = plugin()

        return details.target === target && details.client === client
      })
    },
    hasPlugin(target: string, client: string) {
      return Boolean(this.findPlugin(target as TargetId, client as ClientId))
    },

    async convert(request: any, target: string, client?: string) {
      const snippet = new HTTPSnippet(request as HarRequest)
      return (await snippet.convert(target as Target, client)) as string
    },
  }
}
