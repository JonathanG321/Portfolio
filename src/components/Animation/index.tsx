import React from "react"
import Particles from "react-tsparticles"
import { Main } from "tsparticles"
import { loadTrianglesPreset } from "tsparticles-preset-triangles"
import { loadFirePreset } from "tsparticles-preset-fire"
import { loadStarsPreset } from "tsparticles-preset-stars"

export type Preset = "triangles" | "stars" | "fire"

type Props = {
  type: Preset
}

function Animation({ type }: Props) {
  async function customInit(main: Main) {
    loadTrianglesPreset(main)
    loadFirePreset(main)
    loadStarsPreset(main)
  }
  return (
    <Particles
      init={customInit}
      options={{
        preset: type,
        backgroundMode: true,
        fullScreen: true,
      }}
    />
  )
}

export default Animation
