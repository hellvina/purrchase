export const mergeObjects = (target: Record<string, unknown>, source: Record<string, unknown>): Record<string, unknown> => {
  for (const key in source) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (source[key] instanceof Object && key in target) {
        target[key] = mergeObjects(target[key] as Record<string, unknown>, source[key] as Record<string, unknown>)
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}
