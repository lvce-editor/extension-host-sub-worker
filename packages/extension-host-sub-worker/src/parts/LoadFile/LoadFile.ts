import * as Assert from '../Assert/Assert.ts'
import * as CommandState from '../CommandState/CommandState.ts'
import * as ImportScript from '../ImportScript/ImportScript.ts'

export const loadFile = async (path) => {
  Assert.string(path)
  const module = await ImportScript.importScript(path)
  if (module && module.commandMap) {
    const commandMap = module.commandMap
    CommandState.registerCommands(commandMap)
  } else {
    throw new Error(`missing commandMap export`)
  }
}
