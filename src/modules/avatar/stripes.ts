import { randomColor } from './colors'

const randomStripes = () => {
  const stripes: Stripe[] = []
  const stripesAmount = 3 + Math.round(Math.random() * 5)

  const stripesBorders: number[] = []

  for (let index = 0; index < stripesAmount; index++) {
    stripesBorders.push(randomPosition())
    stripesBorders.push(randomPosition())
  }
  console.log(stripesBorders)

  for (let index = 0; index < stripesBorders.length; index = index + 2) {
    stripes.push({
      start: stripesBorders[index],
      end: stripesBorders[index],
      color: randomColor()
    })
  }
  console.log(stripes)
  return stripes
}

const randomPosition = () => {
  return Math.round(Math.random() * 100)
}

export { randomStripes }
