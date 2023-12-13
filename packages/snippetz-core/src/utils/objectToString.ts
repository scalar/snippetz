import { isKeyNeedsQuotes } from './isKeyNeedsQuotes'

export function objectToString(obj: Record<string, any>, indent = 0): string {
  let parts = []
  let indentation = ' '.repeat(indent)
  let innerIndentation = ' '.repeat(indent + 2)

  for (const [key, value] of Object.entries(obj)) {
    let formattedKey = isKeyNeedsQuotes(key) ? `'${key}'` : key

    if (Array.isArray(value)) {
      const arrayString = value
        .map((item) => {
          if (typeof item === 'string') {
            return `'${item}'`
          } else if (item && typeof item === 'object') {
            return objectToString(item, indent + 2)
          } else {
            return item
          }
        })
        .join(`, ${innerIndentation}`)
      parts.push(`${innerIndentation}${formattedKey}: [${arrayString}]`)
    } else if (value && typeof value === 'object') {
      parts.push(
        `${innerIndentation}${formattedKey}: ${objectToString(
          value,
          indent + 2
        )}`
      )
    } else if (typeof value === 'string') {
      parts.push(`${innerIndentation}${formattedKey}: '${value}'`)
    } else {
      parts.push(`${innerIndentation}${formattedKey}: ${value}`)
    }
  }

  return `{\n${parts.join(',\n')}\n${indentation}}`
}
