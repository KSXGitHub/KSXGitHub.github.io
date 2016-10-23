'use strict'

const {random} = Math
const DONOTHING = () => {}

const range = (begin, end) =>
  begin < end ? [begin, ...range(begin + 1, end)] : []

const decay = (array, delay, chance, callback = DONOTHING, formal = []) => {
  const timer = setTimeout(decay, delay, array.filter(() => random() < chance), callback, [array, ...formal])
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

turn(start, stop)
turn(stop, start)

