import { MessagePortRpcParent } from '@lvce-editor/rpc'
import * as PortRegistry from '../PortRegistry/PortRegistry.ts'

export const setPort = async (id: string, port: MessagePort): Promise<void> => {
  const rpc = await MessagePortRpcParent.create({
    messagePort: port,
    commandMap: {},
  })
  PortRegistry.set(id, rpc)
}
