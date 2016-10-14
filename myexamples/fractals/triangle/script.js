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
      yield * [...fractal(alpha + PI / 3, count - 1)]
        .map(([x, y]) => [x / 3 + 1 / 3, y / 3])
      yield rotation(1 / 2, 0)
      yield * [...fractal(alpha - PI / 3, count - 1)]
        .map(([x, y]) => [x / 3 + 1 / 2, y / 3])
      yield rotation(2 / 3, 0)
      yield * next
        .map(([x, y]) => [x / 3 + 2 / 3, y / 3])
    }
  }
  function * koch (alpha, count) {
    const rotation = rotate(alpha)
    const div3 = ([x, y]) => [x / 3, y / 3]
    yield rotation(0, triangleheight * 2 / 3)
    yield * [...fractal(alpha + PI / 3, count)].map(div3)
    yield rotation(- 1 / 2, - triangleheight / 3)
    yield * [...fractal(alpha + PI, count)].map(div3)
    yield rotation(1 / 2, - triangleheight / 3)
    yield * [...fractal(alpha + PI * 5 / 3, count)].map(div3)
    yield rotation(0, triangleheight * 2 / 3)
  }
  function onclick () {
    const path = [...koch(PI / 3)]
    context.clearRect(0, 0, csize, csize)
    context.beginPath()
    context.closePath()
    context.fill()
    context.stroke()
  }
  const canvas = document.getElementById('main-canvas')
  const csize = canvas.width = canvas.height = 1024
  const context = canvas.getContext('2d')
  context.stroke = 'red'
  context.fill = 'yellow'
  context.lineWidth = 1
  const input = document.getElementById('main-input')
  const button = document.getElementById('calc')
  button.addEventListener('click', onclick, false)
}
