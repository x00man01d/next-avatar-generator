const randomColor = (): HSL => {
  return {
    hue: Math.round(Math.random() * 360),
    saturation: Math.round(Math.random() * 100),
    lightness: Math.round(Math.random() * 100)
  }
}

const randomBrightColor = (): HSL => {
  return {
    hue: Math.round(Math.random() * 360),
    saturation: 40 + Math.round(Math.random() * 60),
    lightness: 40 + Math.round(Math.random() * 30)
  }
}

// function gaussianRand() {
//   let rand = 0

//   for (let i = 0; i < 6; i += 1) {
//     rand += Math.random()
//   }

//   return rand / 6
// }

export { randomColor, randomBrightColor }
