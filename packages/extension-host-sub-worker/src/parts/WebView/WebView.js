import { MessagePortRpcParent } from '@lvce-editor/rpc'
import * as CommandState from '../CommandState/CommandState.js'

MessagePortRpcParent
const rpcs = Object.create(null)

export const create = async (options) => {
  const port = rpcs[options.id]
  await CommandState.execute('WebView.create', {
    ...options,
    port,
  })
}

export const setPort = async (id, port) => {
  const rpc = await MessagePortRpcParent.create({
    messagePort: port,
    commandMap: {},
  })
  rpcs[id] = rpc
}
