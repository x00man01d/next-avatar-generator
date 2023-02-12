const randomColor = (): HSL => {
  return {
    hue: randomHue(),
    saturation: randomSaturation(),
    lightness: randomLightNess()
  }
}

const randomHue = () => {
  return Math.round(Math.random() * 360)
}
const randomSaturation = () => {
  // return Math.round(Math.random() * 100)
  return Math.round(Math.random() * 100)
}
const randomLightNess = () => {
  // return Math.round(Math.random() * 100)
  return Math.round(Math.random() * 100)
}

function gaussianRand() {
  let rand = 0

  for (let i = 0; i < 6; i += 1) {
    rand += Math.random()
  }

  return rand / 6
}

export { randomColor }
