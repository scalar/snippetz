import type { TargetId, ClientId, Request } from '@scalar/snippetz-core'
import { undici } from '@scalar/snippetz-plugin-node-undici'

export function snippetz() {
  const plugins = [undici]

  return {
    get(target: TargetId, client: ClientId, request: Request) {
      const plugin = this.findPlugin(target, client)

      if (plugin) {
        return plugin(request)
      }
    },
    print(target: TargetId, client: ClientId, request: Request) {
      return this.get(target, client, request)?.code
    },
    targets() {
      return plugins.map((plugin) => plugin().target)
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
    hasPlugin(target: TargetId, client: ClientId) {
      return Boolean(this.findPlugin(target, client))
    },
  }
}
