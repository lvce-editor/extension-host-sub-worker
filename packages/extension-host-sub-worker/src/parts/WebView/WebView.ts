import * as CommandState from '../CommandState/CommandState.ts'
import * as PortRegistry from '../PortRegistry/PortRegistry.ts'

export const create = async (options) => {
  const port = PortRegistry.get(options.id)
  await CommandState.execute('WebView.create', {
    ...options,
    port,
  })
}
