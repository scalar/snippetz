import type { TargetId, ClientId, Request } from '@scalar/snippetz-core'
import { undici } from '@scalar/snippetz-plugin-node-undici'
import { fetch as nodeFetch } from '@scalar/snippetz-plugin-node-fetch'
import { fetch as jsFetch } from '@scalar/snippetz-plugin-js-fetch'

export function snippetz() {
  const plugins = [undici, nodeFetch, jsFetch]

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
    hasPlugin(target: string, client: ClientId) {
      return Boolean(this.findPlugin(target as TargetId, client))
    },
  }
}
