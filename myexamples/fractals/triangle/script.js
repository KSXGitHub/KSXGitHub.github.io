'use strict'

main(window)

function main ({Math: {sqrt, sin, cos, PI}, document}) {
  const triangleheight = sqrt(3) / 2
  const rotate = alpha => (x, y) => {
    const sa = sin(alpha)
    const ca = cos(alpha)
    return [x * ca - y * sa, x * sa + y * ca]
  }
  function * fractal (alpha, count) {
    if (count) {
      const rotation = rotate(alpha)
      const next = [...fractal(alpha, count - 1)]
      yield * next
        .map(([x, y]) => [x / 3, y / 3])
      yield rotation(1 / 3, 0)
      yield * [...fractal(alpha + PI * 2 / 3, count - 1)]
        .map(([x, y]) => [x / 3 + 1 / 3, y / 3])
      yield rotation(1 / 2, 0)
      yield * [...fractal(alpha - PI * 2 / 3, count - 1)]
        .map(([x, y]) => [x / 3 + 1 / 2, y / 3])
      yield rotation(2 / 3, 0)
      yield * next
        .map(([x, y]) => [x / 3 + 2 / 3, y / 3])
    }
  }
  function * koch (alpha, count) {
    
  }
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')
}
