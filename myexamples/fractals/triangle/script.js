'use strict'

main(window)

function main ({Math: {sqrt, sin, cos}, document}) {
  const triangleheight = sqrt(3) / 2
  const rotate = ([x, y], alpha) => {
    const sa = sin(alpha)
    const ca = cos(alpha)
    return [x * ca - y * sa, x * sa + y * ca]
  }
  function * fractal (alpha, count) {
    if (count) {
      const next = fractal(alpha, count - 1)
      yield * [...next].map(([x, y]) => [x / 3, y / 3])
      yield ''
    }
  }
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')
}
