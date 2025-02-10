const rpcs = Object.create(null)

export const get = async (id) => {
  return rpcs[id]
}

export const set = async (id, value) => {
  rpcs[id] = value
}
