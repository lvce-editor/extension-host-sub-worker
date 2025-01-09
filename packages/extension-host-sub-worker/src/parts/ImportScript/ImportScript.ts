import * as CleanImportError from '../CleanImportError/CleanImportError.ts'
import { VError } from '../VError/VError.ts'

export const importScript = async (path) => {
  try {
    const module = await import(path)
    return module
  } catch (error) {
    const cleanError = CleanImportError.cleanImportError(error)
    throw new VError(cleanError, `Failed to load ${path}`)
  }
}
