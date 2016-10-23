'use strict'

const {random} = Math
const DONOTHING = () => {}

const range = (begin, end) =>
  begin < end ? [begin, ...range(begin + 1, end)] : []

const decay = (array, delay, chance, callback = DONOTHING, formal = []) => {
  const timer = setTimeout(decay, delay, array.filter(() => random() < chance), callback, [array, ...formal]))
  const response = callback({timer, array, formal})
  return {timer, response}
}

const count = document.getElementById('count')
const chance = document.getElementById('chance')
const log = document.getElementById('log')
const start = document.getElementById('start')
const stop = document.getElementById('stop')

