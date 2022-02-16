export const isBrowser = typeof window !== `undefined`

export type Scroll = {
  panel1: number
  panel2: number
  panel3: number
}
export const scrollDefault = {
  panel1: 0,
  panel2: 0,
  panel3: 0,
}

export type Panel = {
  panel1: number
  panel2: number
  panel3: number
  panel4: number
}
export const panelDefault = {
  panel1: 0,
  panel2: 0,
  panel3: 0,
  panel4: 0,
}

export type Active = {
  panel1: boolean
  panel2: boolean
  panel3: boolean
  panel4: boolean
}
export const activeDefault = {
  panel1: false,
  panel2: false,
  panel3: false,
  panel4: false,
}
