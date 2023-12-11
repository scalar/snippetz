import { Parser } from 'acorn'

import type { Request } from 'har-format'

/** Helper function to map { name: 'foo', value: 'bar' } to { foo: 'bar' } */
function arrayToObject(items: any) {
  return items.reduce((acc: any, item: any) => {
    acc[item.name] = item.value
    return acc
  }, {})
}

export function undici(request: Partial<Request>) {
  // Defaults
  const normalizedRequest = {
    method: 'GET',
    ...request,
  }

  // Normalization
  normalizedRequest.method = normalizedRequest.method.toUpperCase()

  // Reset undici defaults
  const options: Record<string, any> = {
    method:
      normalizedRequest.method === 'GET' ? undefined : normalizedRequest.method,
  }

  // Query

  const searchParams = new URLSearchParams(
    normalizedRequest.queryString
      ? arrayToObject(normalizedRequest.queryString)
      : undefined
  )
  const queryString = searchParams.size ? `?${searchParams.toString()}` : ''

  // Headers
  if (normalizedRequest.headers) {
    options.headers = {}

    normalizedRequest.headers.forEach((header) => {
      options.headers![header.name] = header.value
    })
  }

  // Remove undefined keys
  Object.keys(options).forEach((key) => {
    if (options[key] === undefined) {
      delete options[key]
    }
  })

  // Add body
  if (normalizedRequest.postData) {
    // Plain text
    options.body = normalizedRequest.postData.text

    // JSON
    if (normalizedRequest.postData.mimeType === 'application/json') {
      options.body = JSON.parse(options.body)
    }
  }

  // Transform to JSON
  const jsonOptions = Object.keys(options).length
    ? `, ${JSON.stringify(options, null, 2)}`
    : ''

  // Code Template
  const code = `

import { request } from "undici"

const { statusCode, headers, trailers, body } = await request("${normalizedRequest.url}${queryString}"${jsonOptions})

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
