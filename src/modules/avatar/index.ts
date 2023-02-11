import { randomColor } from './colors'
import { randomStripes } from './stripes'

const randomAvatar = (): UserPic => {
  return {
    backgroundSolid: randomColor(),
    stripes: randomStripes()
  }
}

export { randomAvatar }
