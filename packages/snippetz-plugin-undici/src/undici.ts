import type { Request } from 'har-format'
import type { Source } from '@scalar/snippetz'

/** Helper function to map { name: 'foo', value: 'bar' } to { foo: 'bar' } */
function arrayToObject(items: any) {
  return items.reduce((acc: any, item: any) => {
    acc[item.name] = item.value
    return acc
  }, {})
}

function isKeyNeedsQuotes(key: string) {
  return /\s|-/.test(key);
}

export function objectToString(obj: Record<string, any>, indent = 0): string {
  let parts = [];
  let indentation = ' '.repeat(indent);
  let innerIndentation = ' '.repeat(indent + 2);

  for (const [key, value] of Object.entries(obj)) {
    let formattedKey = isKeyNeedsQuotes(key) ? `'${key}'` : key;

    if (Array.isArray(value)) {
      const arrayString = value.map(item => {
        if (typeof item === 'string') {
            return `'${item}'`;
        } else if (item && typeof item === 'object') {
            return objectToString(item, indent + 2);
        } else {
            return item;
        }
      }).join(`, ${innerIndentation}`);
      parts.push(`${innerIndentation}${formattedKey}: [${arrayString}]`);
    } else if (value && typeof value === 'object') {
      parts.push(`${innerIndentation}${formattedKey}: ${objectToString(value, indent + 2)}`);
    } else if (typeof value === 'string') {
      parts.push(`${innerIndentation}${formattedKey}: '${value}'`);
    } else {
      parts.push(`${innerIndentation}${formattedKey}: ${value}`);
    }
  }

  return `{\n${parts.join(',\n')}\n${indentation}}`;
}

export function undici(request: Partial<Request>): Source {
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

  // Cookies
  if (normalizedRequest.cookies) {
    options.headers = options.headers || {}

    normalizedRequest.cookies.forEach((cookie) => {
      options.headers!['Set-Cookie'] = options.headers!['Set-Cookie']
        ? `${options.headers!['Set-Cookie']}; ${cookie.name}=${cookie.value}`
        : `${cookie.name}=${cookie.value}`
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
    ? `, ${objectToString(options)}`
    : ''

  // Code Template
  const code = `import { request } from 'undici'

const { statusCode, body } = await request('${normalizedRequest.url}${queryString}'${jsonOptions})`

  // Create an AST
  return {
    target: 'javascript',
    code,
  }
}
