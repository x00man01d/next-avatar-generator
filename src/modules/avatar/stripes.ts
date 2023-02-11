import { randomColor } from './colors'

const randomStripes = () => {
  const stripes: Stripe[] = []
  const stripesAmount = 3 + Math.round(Math.random() * 5)

  for (let index = 0; index < stripesAmount; index++) {
    stripes.push({
      start: randomPosition(),
      end: randomPosition(),
      color: randomColor()
    })
  }
  return stripes
}

const randomPosition = () => {
  return Math.round(Math.random() * 100)
}

export { randomStripes }
