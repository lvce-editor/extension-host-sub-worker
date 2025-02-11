import { Rpc } from '@lvce-editor/rpc'

const rpcs: Record<string, Rpc> = Object.create(null)

export const get = (id: string): Rpc => {
  return rpcs[id]
}

export const set = (id: string, value: Rpc): void => {
  rpcs[id] = value
}
