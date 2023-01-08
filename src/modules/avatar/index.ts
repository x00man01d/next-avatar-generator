const randomAvatar = (): UserPic => {
  return {
    backgroundSolid: {
      hue: randomHue(),
      saturation: randomSaturation(),
      lightness: randomLightNess()
    }
  }
}

const randomHue = () => {
  return Math.round(Math.random() * 360)
}
const randomSaturation = () => {
  return Math.round(Math.random() * 100)
}
const randomLightNess = () => {
  return Math.round(Math.random() * 100)
}

export { randomAvatar }
