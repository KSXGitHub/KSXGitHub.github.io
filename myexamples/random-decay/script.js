'use strict'

const {random, floor} = Math
const DONOTHING = () => {}
const xmlns = document.documentElement.namespaceURI

const range = (begin, end) =>
  begin < end ? [begin, ...range(begin + 1, end)] : []

const decay = (array, delay, chance, callback = DONOTHING, formal = []) => {
  const timer = setTimeout(decay, delay, array.filter(() => random() < chance), delay, callback, [array, ...formal])
  const response = callback({timer, array, formal})
  return {timer, response}
}

const onClick = (element, handle) =>
  element.addEventListener('click', handle, false)

const turn = (on, off) =>
  onClick(on, () => { on.disabled = true; off.disabled = false })

const count = document.getElementById('count')
const chance = document.getElementById('chance')
const delay = document.getElementById('delay')
const log = document.getElementById('log')
const start = document.getElementById('start')
const stop = document.getElementById('stop')

let timerid = null

const onStart = () => {
  const paragraph = document.createElementNS(xmlns, 'p')
  const headerdiv = document.createElementNS(xmlns, 'div')
  log.appendChild(paragraph)
  paragraph.appendChild(headerdiv)
  headerdiv.innerHTML = `<h3><span>${new Date()}</span></h3>`
  const main = ({timer, array}) => {
    timerid = timer
    const div = document.createElementNS(xmlns, 'div')
    const length = document.createElementNS(xmlns, 'span')
    const list = document.createElementNS(xmlns, 'span')
    paragraph.appendChild(div)
    div.appendChild(length)
    div.appendChild(list)
    length.textContent = `(${array.length}) $`
    list.textContent = array.join(', ')
  }
  decay(
    range(0, floor(count.value)),
    floor(delay.value),
    parseFloat(chance.value),
    main
  )
}

const onStop = () => {
  clearTimeout(timerid)
  log.textContent = ''
}

turn(start, stop)
turn(stop, start)
onClick(start, onStart)
onClick(stop, onStop)
