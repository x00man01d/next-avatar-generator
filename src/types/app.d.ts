interface UserPic {
  backgroundSolid: HSL
  stripes?: Stripe[]
}
interface Stripe {
  start: number
  end: number
  color: HSL
}

interface HSL {
  hue: number
  saturation: number
  lightness: number
}
