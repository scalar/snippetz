import { Parser } from 'acorn'

import type { Request } from 'har-format'

export function undici(request: Partial<Request>) {
  // Defaults
  const normalizedRequest = {
    method: 'GET',
    ...request,
  }

  // Normalization
  normalizedRequest.method = normalizedRequest.method.toUpperCase()

  // Reset undici defaults
  const options = {
    method:
      normalizedRequest.method === 'GET' ? undefined : normalizedRequest.method,
  }

  // Remove undefined keys
  Object.keys(options).forEach((key) => {
    if (options[key] === undefined) {
      delete options[key]
    }
  })

  // Transform to JSON
  const jsonOptions = Object.keys(options).length
    ? `, ${JSON.stringify(options, null, 2)}`
    : ''

  // Code Template
  const code = `

import { request } from "undici"

const { statusCode, headers, trailers, body } = await request("${normalizedRequest.url}"${jsonOptions})

`

  // Create an AST
  return {
    target: 'js',
    tree: Parser.parse(code, {
      ecmaVersion: 2022,
      locations: false,
      sourceType: 'module',
    }),
  }
}
