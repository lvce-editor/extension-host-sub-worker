import { WebWorkerRpcClient } from '@lvce-editor/rpc'

export const listen = async (commandMap: any): Promise<void> => {
  const rpc = await WebWorkerRpcClient.create({
    commandMap,
  })
  globalThis.rpc = rpc
}
