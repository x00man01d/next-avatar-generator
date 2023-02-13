import { randomBrightColor } from './colors'
import { randomStripes } from './stripes'

const randomAvatar = (): UserPic => {
  return {
    backgroundSolid: randomBrightColor(),
    stripes: randomStripes()
  }
}

export { randomAvatar }
